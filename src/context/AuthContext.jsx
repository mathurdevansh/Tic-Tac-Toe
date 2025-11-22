import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadUser = async () => {
            const token = localStorage.getItem('token');
            if (token) {
                try {
                    const res = await axios.get('http://localhost:5000/api/auth/user', {
                        headers: { 'x-auth-token': token }
                    });
                    setUser(res.data);
                } catch (err) {
                    console.error("Auth error", err);
                    localStorage.removeItem('token');
                }
            }
            setLoading(false);
        };
        loadUser();
    }, []);

    const login = async (username, password) => {
        try {
            const res = await axios.post('http://localhost:5000/api/auth/login', { username, password });
            localStorage.setItem('token', res.data.token);
            setUser(res.data.user);
            return { success: true };
        } catch (err) {
            return { success: false, msg: err.response?.data?.msg || 'Login failed' };
        }
    };

    const signup = async (username, password) => {
        try {
            const res = await axios.post('http://localhost:5000/api/auth/signup', { username, password });
            localStorage.setItem('token', res.data.token);
            setUser(res.data.user);
            return { success: true };
        } catch (err) {
            return { success: false, msg: err.response?.data?.msg || 'Signup failed' };
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
    };

    const updateUser = (userData) => {
        setUser(userData);
    };

    return (
        <AuthContext.Provider value={{ user, login, signup, logout, updateUser, loading }}>
            {children}
        </AuthContext.Provider>
    );
};
