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

    const handleSlider = (e) => {
        setPrice(e.target.value);
    }

    const handleBrandChange = (brand) => {
        setSelectedBrandsState(prev => {
            if (prev.includes(brand)) {
                return prev.filter(b => b !== brand);
            }
            else {
                return [...prev, brand]
            }
        })
    }

    useEffect(() => {
        setSelectedBrands(selectedBrandsState);
    }, [selectedBrandsState, setSelectedBrands]);

    return <>

        <div className="content">

            <aside>
                <h3>Category</h3>
                <ul>
                    <li onClick={() => setCategory('All')}>All</li>
                    <li onClick={() => setCategory('Mobile')}>Mobile</li>
                    <li onClick={() => setCategory('Laptops')}>Laptops</li>
                    <li onClick={() => setCategory('Clothing')}>Clothing</li>
                    <li onClick={() => setCategory('Accessories')}>Accessories</li>
                </ul>
                <h3>Brands</h3>
                <div className="brandContainer">
                    {brands.map((brand) => {
                        return <div className="brand-list" key={brand}>

                            <input
                                type="checkbox"
                                id={brand}
                                checked={selectedBrandsState.includes(brand)}
                                onChange={() => handleBrandChange(brand)}
                            />
                            <label>{brand}</label>

                        </div>
                    })}
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
    </>
}