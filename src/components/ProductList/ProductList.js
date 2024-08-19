// ProductList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProductList.css';

const ProductList = ({ filters }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                setProducts(response.data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, []);

    const filteredProducts = products.filter(product => {
        const { category } = product;
        console.log(category)
        const { customizable, idealFor, occasion, work, fabric, segment, suitableFor, rawMaterials, pattern } = filters;

        return (
            (customizable === false || product.customizable === customizable) &&
            (idealFor === 'All' || product.idealFor === idealFor) &&
            (occasion === 'All' || product.occasion === occasion) &&
            (work === 'All' || product.work === work) &&
            (fabric === 'All' || product.fabric === fabric) &&
            (segment === 'All' || product.segment === segment) &&
            (suitableFor === 'All' || product.suitableFor === suitableFor) &&
            (rawMaterials === 'All' || product.rawMaterials === rawMaterials) &&
            (pattern === 'All' || product.pattern === pattern)
        );
    });

    return (
        <div className="product-list">
            {filteredProducts.map(product => (
                <div className="product-card" key={product.id}>
                    {product.isNew && <div className="new-badge">New Product</div>}
                    {product.isOutOfStock && <div className="out-of-stock-badge">Out of Stock</div>}
                    <div className="product-image">
                        <img src={product.image} alt={product.title} />
                    </div>
                    <div className="product-details">
                        <h3 className="product-name">{product.title}</h3>
                        <p className="product-pricing">{product.price}$</p>
                        <button className="wishlist-button">❤️</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductList;


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
