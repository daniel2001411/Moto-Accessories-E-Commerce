import React, { useEffect, useState } from 'react'
import '../Styles/Cart.css';

export const Cart = ({cart, setCart}) => {
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setTotal(cart.reduce((acc, curr) => acc + parseInt(curr.amt) * (curr.quantity || 1), 0))
    }, [cart])


    const increaseQuantity = (productId) => {
    setCart(cart.map(item => 
        item.id === productId 
            ? {...item, quantity: (item.quantity || 1) + 1} 
            : item
    ));
};

const decreaseQuantity = (productId) => {
    setCart(cart.map(item => 
        item.id === productId && (item.quantity || 1) > 1
            ? {...item, quantity: item.quantity - 1} 
            : item
    ));
};

    const handleRemoveFromCart = (productId) => {
        setCart(cart.filter(item => item.id !== productId));
    }

    const handlePayment = () => {
        if (cart.length === 0) {
            alert("Your cart is empty!");
            return;
        }

            const order = {
        date: new Date().toISOString(),
        items: cart,
        total: total
    };
    
    const existingOrders = JSON.parse(localStorage.getItem('orders') || '[]');
    localStorage.setItem('orders', JSON.stringify([...existingOrders, order]));
        alert(`Payment of Rs: ${total} successful!`);
        setCart([]); 
    }

    return (
        <>
            <h1>Cart Products</h1>
            <div className='cart-container'>
                {cart.length === 0 ? (
                    <p>Your cart is empty</p>
                ) : (
                    cart.map((product) => (
                        <div className="cart-product" key={product.id}>
                            <div className="img">
                                <img src={product.pic} alt={product.name} />
                            </div>
<div className="cart-product-details">
    <h3>{product.name}</h3>
    <p>Price Rs: {product.amt}</p>
    <div className="quantity-controls">
        <button onClick={() => decreaseQuantity(product.id)}>-</button>
        <span>{product.quantity || 1}</span>
        <button onClick={() => increaseQuantity(product.id)}>+</button>
    </div>
    <button className="remove-btn" onClick={() => handleRemoveFromCart(product.id)}>
        Remove
    </button>
</div>
                        </div>
                    ))
                )}
            </div>
            {cart.length > 0 && (
                <>
                    <h2 className='cart-amt'>Total Amount Rs: {total}</h2>
                    <button className="payment-btn" onClick={handlePayment}>
                        Proceed to Payment
                    </button>
                </>
            )}
        </>
    )
}