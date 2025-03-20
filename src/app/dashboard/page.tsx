import Header from "@/components/header/Header";
import Sidebar from "@/components/sidebar/Sidebar";
import { JSX } from "react";

import styles from "./dashboard.module.css";

export default function Dashboard(): JSX.Element {
    return (
        <>
            <Header />
            
            <main className={styles.main_container}>
                <Sidebar />
            </main>
        </>

    )
}