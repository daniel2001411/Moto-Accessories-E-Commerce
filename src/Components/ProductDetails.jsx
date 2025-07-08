import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../Assets/products.json';
import '../Styles/ProductDetails.css';

export const ProductDetails = ({ cart, setCart }) => {
    const { id } = useParams();
    const product = data.find(p => p.id === parseInt(id));
    
    if (!product) return <div>Product not found</div>;
    
    const addToCart = () => {
        setCart([...cart, {...product, quantity: 1}]);
    };
    
    const removeFromCart = () => {
        setCart(cart.filter(item => item.id !== product.id));
    };
    
    const isInCart = cart.some(item => item.id === product.id);
    
    return (
        <div className="product-details">
            <div className="product-images">
                <img src={product.pic} alt={product.name} />
            </div>
            <div className="product-info">
                <h1>{product.name}</h1>
                <p className="price">Rs: {product.amt}</p>
                <p>Shop: {product.shop}</p>
                <p className="description">{product.description || 'No description available'}</p>
                <div className="product-actions">
                    {isInCart ? (
                        <button className="remove-from-cart" onClick={removeFromCart}>
                            Remove from Cart
                        </button>
                    ) : (
                        <button className="add-to-cart" onClick={addToCart}>
                            Add to Cart
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};
