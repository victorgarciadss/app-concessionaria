import { JSX } from "react";
import styles from "./sidebar.module.css";

import { BsPeopleFill, BsGraphUpArrow } from "react-icons/bs";
import { IoCarSport } from "react-icons/io5";
import Link from "next/link";

export default function Sidebar(): JSX.Element {
    return (
        <nav className={styles.sidebar}>
            <ul className={styles.sidebar_list}>
                <Link href={"/dashboard/cars"}>
                    <li className={styles.element_list}>
                        <IoCarSport className={styles.icon} />
                        <span>Carros</span>
                    </li>
                </Link>
                <Link href={"/dashboard/clients"}>
                    <li className={styles.element_list}>
                        <BsPeopleFill className={styles.icon} />
                        <span>Clientes</span>
                    </li>
                </Link>
                <Link href={"/dashboard/sales"}>
                    <li className={styles.element_list}>
                        <BsGraphUpArrow className={styles.icon} />
                        <span>Vendas realizadas</span>
                    </li>
                </Link>
                
            </ul>
        </nav>
    )
}