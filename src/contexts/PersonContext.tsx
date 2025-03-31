"use client"

import { Role } from "@/enums/Role"
import { createContext, useState } from "react"

export interface Employee {
    id: bigint,
    username: string,
    role: Role
};

export interface Client {
    id: bigint,
    name: string,
    cpf: string,
    adress: string,
    age: number
};

interface PersonContextProps {
    employees: Employee[],
    clients: Client[],
    setEmployeesData: (data: Employee[]) => void,
    setClientsData: (data: Client[]) => void
};

export const PersonContext = createContext({} as PersonContextProps);

export function PersonProvider ({ children } : { children: React.ReactNode }) {
    const [employees, setEmployees] = useState<Employee[]>([]);
    const [clients, setClients] = useState<Client[]>([]);

    function setEmployeesData(data: Employee[]): void {
        setEmployees(data);
    }

    function setClientsData(data: Client[]): void {
        setClients(data);
    }

    return (
        <PersonContext.Provider 
            value={{ employees, clients, setEmployeesData, setClientsData }}
        >
            {children}
        </PersonContext.Provider>
    )
}

