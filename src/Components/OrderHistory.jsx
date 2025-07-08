import React, { useState, useEffect } from 'react';
import '../Styles/OrderHistory.css';

export const OrderHistory = () => {
    const [orders, setOrders] = useState([]);
    
    useEffect(() => {
        const savedOrders = JSON.parse(localStorage.getItem('orders') || '[]');
        setOrders(savedOrders);
    }, []);
    
    return (
        <div className="order-history">
            <h1>Your Orders</h1>
            {orders.length === 0 ? (
                <p>You haven't placed any orders yet.</p>
            ) : (
                orders.map((order, index) => (
                    <div key={index} className="order">
                        <h3>Order #{index + 1}</h3>
                        <p>Date: {new Date(order.date).toLocaleString()}</p>
                        <p>Total: Rs: {order.total}</p>
                        <div className="order-products">
                            {order.items.map(item => (
                                <div key={item.id} className="order-product">
                                    <img src={item.pic} alt={item.name} />
                                    <span>{item.name} (x{item.quantity || 1})</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};