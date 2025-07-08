import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';
import '../Styles/Header.css';

export const Header = ({ cart }) => {
    const { user, logout } = useAuth();
    
    return (
        <header className="navbar">
            <div className="logo">
                <Link to="/">MOTO ACCESSORIES</Link>
            </div>
            <nav>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li>
                        <Link to="/cart" className="cart-link">
                            View Cart
                            {cart.length > 0 && (
                                <span className="cart-count">
                                    {cart.reduce((total, item) => total + (item.quantity || 1), 0)}
                                </span>
                            )}
                        </Link>
                    </li>
                    <li><Link to="/orders">My Orders</Link></li>
                    {user ? (
                        <>
                            <li><span className="welcome">Welcome, {user.name}</span></li>
                            <li>
                                <button onClick={logout} className="logout-btn">
                                    Logout
                                </button>
                            </li>
                        </>
                    ) : (
                        <li>
                            <Link to="/login" className="login-btn">
                                Login
                            </Link>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    );
};