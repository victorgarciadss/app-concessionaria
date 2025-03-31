import { JSX } from "react";
import styles from "./sidebar.module.css";

import { BsPeopleFill, BsGraphUpArrow } from "react-icons/bs";
import { IoCarSport } from "react-icons/io5";
import Link from "next/link";

export default function Sidebar(): JSX.Element {
    return (
        <nav className={styles.sidebar}>
            <ul className={styles.sidebar_list}>
                
                <li>
                    <Link href={"/dashboard/cars"} className={styles.element_list}>
                        <IoCarSport className={styles.icon} />
                        <span>Carros</span>
                    </Link>
                </li>
                
                <li>
                    <Link href={"/dashboard/clientes"} className={styles.element_list}>
                        <BsPeopleFill className={styles.icon} />
                        <span>Clientes</span>
                    </Link>
                </li>
                
                <li>
                    <Link href={"/dashboard/sales"} className={styles.element_list}>
                        <BsGraphUpArrow className={styles.icon} />
                        <span>Vendas realizadas</span>
                    </Link>
                </li>
    
            </ul>
        </nav>
    )
}