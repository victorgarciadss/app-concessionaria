'use client'

import { redirect } from "next/navigation";
import { createContext, ReactNode, useEffect, useState } from "react"
import Cookies from "js-cookie";

interface AuthProps {
    validToken: boolean | null,
    login: (token: string, role: string) => void,
    logout: () => void
}

export const AuthContext = createContext({} as AuthProps);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [validToken, setValidToken] = useState<boolean | null>(null);

    useEffect(() => {
        const token = Cookies.get("token");

        setValidToken(!!token);
        
    }, []);

    function login(token: string, role: string): void {
        Cookies.set("token", token, { expires: 1 / 48, path: "/" });
        Cookies.set("role", role);
        setValidToken(true);
    };

    function logout(): void {
        Cookies.remove("token");
        Cookies.remove("role");
        setValidToken(false);
        redirect("/login");
    }

    return (
        <AuthContext.Provider
            value={{ validToken, login, logout }}
        >
            {children}
        </AuthContext.Provider>
    )
}