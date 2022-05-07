import React from "react";
import { useAuth } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

export default function ProtectedRoute({ children }) {

    const { user } = useAuth();
    const location = useLocation();

    if (!user) {
        return <Navigate to='/signup' replace state={{ from: location }} />;
    }

    return children;
}