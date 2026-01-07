import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(sessionStorage.getItem('token'));
    const [loading, setLoading] = useState(true);

    const API_URL = (import.meta.env.VITE_API_URL || 'http://localhost:5000') + '/auth';

    useEffect(() => {
        if (token) {
            // Validate token or just decode user info if needed
            // For now, simpler implementation:
            setUser({ token });
        }
        setLoading(false);
    }, [token]);

    const login = async (username, password) => {
        try {
            const res = await axios.post(`${API_URL}/login`, { username, password });
            const { token, user } = res.data;

            setToken(token);
            setUser({ ...user, token });
            sessionStorage.setItem('token', token);
            toast.success("Login Successful!");
            return true;
        } catch (err) {
            console.error(err);
            toast.error(err.response?.data?.msg || "Login Failed");
            return false;
        }
    };

    const logout = () => {
        setToken(null);
        setUser(null);
        sessionStorage.removeItem('token');
        toast.info("Logged Out");
    };

    return (
        <AuthContext.Provider value={{ user, token, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};
