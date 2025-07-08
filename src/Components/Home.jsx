import React, { useState } from 'react'
import data from '../Assets/products.json';
import { Product } from './Product';
import '../Styles/Home.css'

export const Home = ({cart, setCart}) => {
    const [products] = useState(data);
    const [searchTerm, setSearchTerm] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('all');

    const filteredProducts = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = categoryFilter === 'all' || product.ptype === categoryFilter;
        return matchesSearch && matchesCategory;
    });

    return (
        <>
            <div className="search-filter-container">
                <input 
                    type="text" 
                    placeholder="Search products..." 
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <select onChange={(e) => setCategoryFilter(e.target.value)}>
                    <option value="all">All Categories</option>
                    <option value="Riding Jacket">Riding Jackets</option>
                    <option value="Riding Boot">Riding Boots</option>
                    <option value="Riding Gloves">Riding Gloves</option>
                    <option value="Riding Helmet">Helmets</option>
                    <option value="Riding Pant">Riding Pants</option>
                    <option value="Saddle Bag">Saddle Bags</option>
                    <option value="Tank Bag">Tank Bags</option>
                    <option value="Bungee Cord">Bungee Cords</option>
                    <option value="Hand Guard">Hand Guards</option>
                    <option value="Phone Mount">Phone Mounts</option>
                    <option value="Fog Light">Fog Lights</option>
                    <option value="Disc Lock">Disc Locks</option>
                    <option value="Bike Cover">Bike Covers</option>
                    <option value="Gel Seat">Gel Seats</option>
                    <option value="Frame Sliders">Frame Sliders</option>
                    <option value="Cleaning Kit">Cleaning Kits</option>
                    <option value="Balaclava">Balaclavas</option>
                    <option value="Top Box">Top Boxes</option>
                    <option value="Windshield">Windshields</option>
                    <option value="Knee Guard">Knee Guards</option>
                </select>
            </div>
            <div className='product-container'>
                {filteredProducts.map((product) => (
                    <Product key={product.id} product={product} cart={cart} setCart={setCart}/>
                ))}
            </div>
        </>
    )
}