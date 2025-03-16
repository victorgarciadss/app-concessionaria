'use client'

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createContext, ReactNode, useEffect, useState } from "react"

interface AuthProps {
    validToken: boolean | null,
    login: (token: string) => void,
    logout: () => void
}

export const AuthContext = createContext({} as AuthProps);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [validToken, setValidToken] = useState<boolean | null>(null);

    useEffect(() => {
        async function fetchToken() {
            const token = document.cookie
                .split('; ')
                .find((row) => row.startsWith('token='))
                ?.split('=')[1];
                
            setValidToken(!!token);
        }
        fetchToken();
    }, []);

    function login(token: string): void {
        document.cookie = `token=${token}; path=/; max-age=1800`;
        setValidToken(true);
    };

    function logout(): void {
        document.cookie = "token=; path=/; max-age=0";
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