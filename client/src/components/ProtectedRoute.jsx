import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const ProtectedRoute = () => {
    const { token, loading } = useContext(AuthContext);

    if (loading) return null; // Or a loader

    return token ? <Outlet /> : <Navigate to="/admin/login" />;
};

export default ProtectedRoute;
