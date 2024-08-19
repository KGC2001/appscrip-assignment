import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            {product.status === 'out of stock' && (
                <div className="label out-of-stock">OUT OF STOCK</div>
            )}
            {product.isNew && (
                <div className="label new-product">NEW PRODUCT</div>
            )}
            <div className="image-wrapper">
                <img src={product.image} alt={product.title} className="product-image" />
            </div>
            <div className="product-details">
                <h3 className="product-title">{product.title}</h3>
                <p className="product-description">{product.description}</p>
                <div className="product-price">${product.price}</div>
            </div>
        </div>
    );
};

export default ProductCard;





// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import ProductCard from '../ProductCard/ProductCard';
// import './ProductList.css'


// const ProductList = ({ filters }) => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const response = await axios.get('https://fakestoreapi.com/products');
//       setProducts(response.data);
//     };

//     fetchProducts();
//   }, []);

//   const filteredProducts = products.filter(product =>
//     filters.length === 0 || filters.includes(product.category)
//   );

//   return (
//     <div className="product-list">
//       {filteredProducts.map(product => (
//         <ProductCard key={product.id} product={product} />
//       ))}
//     </div>
//   );
// };

// export default ProductList;
