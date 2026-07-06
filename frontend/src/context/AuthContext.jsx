import { createContext, useState, useEffect } from "react";
import api from "../api/axios";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {

    const [user, setUser] = useState(null);

    const [token, setToken] = useState(
        localStorage.getItem("token") || ""
    );

    useEffect(() => {

        const fetchCurrentUser = async () => {

            if (!token) return;

            try {

                const response = await api.get("/auth/me");

                setUser(response.data);

            } catch (error) {

                console.log(error);

                logout();

            }

        };

        fetchCurrentUser();

    }, [token]);

    const login = (userData, jwtToken) => {

        setUser(userData);

        setToken(jwtToken);

        localStorage.setItem("token", jwtToken);

    };

    const logout = () => {

        setUser(null);

        setToken("");

        localStorage.removeItem("token");

    };

    return (

        <AuthContext.Provider
            value={{
                user,
                token,
                login,
                logout,
                isLoggedIn: !!token,
            }}
        >

            {children}

        </AuthContext.Provider>

    );

}