
export function ProductCard({ product }) {

    return <div className="card">
        <div className="card-header">
            <img src={product.imageUrl} alt="Smart Watch" className="product-image" />
        </div>
        <div className="card-body">
            <span className="brand-name">{product.brand}</span>
            <h2 className="product-name">{product.name}</h2>
            <p className="product-description">{product.description}</p>
            <div className="feature">
                <div className='category-container'>
                <span className="feature-label">Category:</span>
                <span className='category-desc'>{product.category}</span>
                </div>
                <div className='price-tagg'>₹{product.price}</div>
            </div>
        </div>

    </div>

}