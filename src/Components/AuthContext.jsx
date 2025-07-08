import { createContext, useState, useContext } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    
    const login = async (email, password) => {
    
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (email && password) {
                    setUser({ email, name: 'User' });
                    resolve();
                } else {
                    reject(new Error('Invalid credentials'));
                }
            }, 1000);
        });
    };
    
    const logout = () => {
        setUser(null);
    };
    
    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};