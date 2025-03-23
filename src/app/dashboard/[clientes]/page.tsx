import Header from "@/components/header/Header";
import Sidebar from "@/components/sidebar/Sidebar";
import CustomTable from "@/components/table/CustomTable";
import { cookies } from "next/headers";

import styles from "./clients.module.css";

interface ClientsProps {
    id: bigint,
    name: string,
    cpf: string,
    adress: string,
    age: number
};

// async function getClients(): Promise<ClientsProps[]> {
//     try {
//         const cookieStore = await cookies();
//         const token = cookieStore.get("token")?.value;

//         const response = await fetch("http://localhost:8080/clientes/paginado", {
//             headers: {
//                 "Authorization": `Bearer ${token}`,
//                 "Content-Type": "application/json"
//             },
//             cache: "no-store",
//         });

//         if (!response.ok) {
//             throw new Error(`Erro na requisição: ${response.status} ${response.statusText}`);
//         }

//         return response.json();

//     } catch (error) {
//         throw new Error(`Erro ao buscar clientes:", ${error}`);
//     }
// }

const columns = [
    { id: "id", label: "id" },
    { id: "name", label: "nome" },
    { id: "cpf", label: "CPF" },
    { id: "adress", label: "Endereço" },
    { id: "age", label: "idade" }
]

export default async function Clients() {

    return (
        <>
            <Header />
            <main className={styles.main_container}>

                <Sidebar />
                <CustomTable columns={columns} />
            </main>
        </>
    )
}