import { useState, useEffect } from "react";

const brands = [ 
    "Samsung",
    "Apple",
    "Lenovo",
    "Nike",
    "Dell",
    "Asus",
    "Google",
    "Lacoste",
    "Tommy Hilfiger",
    "Acer"
];

export function Aside({ setCategory, setSelectedBrands, handlePriceFilter }) {
    const [price, setPrice] = useState(450000);
    const [selectedBrandsState, setSelectedBrandsState] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All');

    const handleSlider = (e) => {
        setPrice(e.target.value);
    }

    const handleBrandChange = (brand) => {
        setSelectedBrandsState(prev => {
            if (prev.includes(brand)) {
                return prev.filter(b => b !== brand);
            } else {
                return [...prev, brand]
            }
        })
    }

    useEffect(() => {
        setSelectedBrands(selectedBrandsState);
    }, [selectedBrandsState, setSelectedBrands]);

    const handleCategoryClick = (category) => {
        console.log("Clicked..")
        setSelectedCategory(category);
        setCategory(category);
    };

    return (
        <div className="content">
            <aside>
                <h3>Category</h3>
                <ul>
                    <li 
                        className={selectedCategory === 'All' ? 'selectedBtn' : ''}
                        onClick={() => handleCategoryClick('All')}
                    >
                        All
                    </li>
                    <li 
                        className={selectedCategory === 'Mobile' ? 'selectedBtn' : ''}
                        onClick={() => handleCategoryClick('Mobile')}
                    >
                        Mobile
                    </li>
                    <li 
                        className={selectedCategory === 'Laptops' ? 'selectedBtn' : ''}
                        onClick={() => handleCategoryClick('Laptops')}
                    >
                        Laptops
                    </li>
                    <li 
                        className={selectedCategory === 'Clothing' ? 'selectedBtn' : ''}
                        onClick={() => handleCategoryClick('Clothing')}
                    >
                        Clothing
                    </li>
                    <li 
                        className={selectedCategory === 'Accessories' ? 'selectedBtn' : ''}
                        onClick={() => handleCategoryClick('Accessories')}
                    >
                        Accessories
                    </li>
                </ul>
                <h3>Brands</h3>
                <div className="brandContainer">
                    {brands.map((brand) => (
                        <div className="brand-list" key={brand}>
                            <input
                                type="checkbox"
                                id={brand}
                                checked={selectedBrandsState.includes(brand)}
                                onChange={() => handleBrandChange(brand)}
                            />
                            <label htmlFor={brand}>{brand}</label>
                        </div>
                    ))}
                </div>
                <h3>Price</h3>
                <div className="slider-range">0 - {price}</div>
                <div className="priceRange-container">
                    <input
                        type="range"
                        min="0"
                        max="300000"
                        value={price}
                        onChange={handleSlider} />
                    <button className="price-filter" onClick={() => handlePriceFilter(price)}>Go</button>
                </div>
            </aside>
        </div>
    );
}
