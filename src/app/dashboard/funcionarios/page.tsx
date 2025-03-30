import Header from "@/components/header/Header";
import Sidebar from "@/components/sidebar/Sidebar";
import CustomTable from "@/components/table/CustomTable";

import styles from "../dashboard.module.css";

const colums = [
    { id: "id", label: "Id" },
    { id: "username", label: "Nome de usuário" },
    { id: "role", label: "Função" }
]

export default async function Employees() {
    return (
        <>
            <Header />
            <main className={styles.main_container}>
                <Sidebar />
                <CustomTable columns={colums} />
            </main>
        </>
    )
}