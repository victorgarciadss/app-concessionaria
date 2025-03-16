'use client'

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createContext, ReactNode, useEffect, useState } from "react"
import Cookies from "js-cookie";

interface AuthProps {
    validToken: boolean | null,
    login: (token: string) => void,
    logout: () => void
}

export const AuthContext = createContext({} as AuthProps);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [validToken, setValidToken] = useState<boolean | null>(null);

    useEffect(() => {
        const token = Cookies.get("token");

        setValidToken(!!token);
        
    }, []);

    function login(token: string): void {
        Cookies.set("token", token, { expires: 1 / 48, path: "/" })
        setValidToken(true);
    };

    function logout(): void {
        Cookies.remove("token");
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