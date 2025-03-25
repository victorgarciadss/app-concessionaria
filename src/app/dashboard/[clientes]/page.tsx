import Header from "@/components/header/Header";
import Sidebar from "@/components/sidebar/Sidebar";
import CustomTable from "@/components/table/CustomTable";

import styles from "./clients.module.css";



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