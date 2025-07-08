import React from 'react'
import '../Styles/Product.css'
import { Link } from 'react-router-dom';

export const Product = ({product, cart, setCart}) => {
    const name = product.name.length > 21 ? product.name.substring(0,20) + "..." : product.name;

    const addCart = () => {
        setCart([...cart, {...product, quantity: 1}]);
    };
    
    const removeCart = () => {
        setCart(cart.filter((c) => c.id !== product.id));
    };

    const isInCart = cart.some(item => item.id === product.id);

    return (
        <div className='product'>
            <Link to={`/product/${product.id}`}>
                <div className='img'>
                    <img src={product.pic} alt={product.name} />
                </div>
            </Link>
            <div className='details'>
                <h3>{name}</h3>
                <h4>Shop name: {product.shop}</h4>
                <p>Price: Rs:{product.amt}</p>
                {isInCart ? (
                    <button onClick={removeCart} className='btnRemove'>Remove From Cart</button>
                ) : (
                    <button onClick={addCart}>Add to Cart</button>
                )}
            </div>
        </div>
    )
}