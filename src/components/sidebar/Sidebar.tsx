import { JSX } from "react";
import styles from "./sidebar.module.css";

import { BsPeopleFill, BsGraphUpArrow } from "react-icons/bs";
import { IoCarSport } from "react-icons/io5";

export default function Sidebar(): JSX.Element {
    return (
        <nav className={styles.sidebar}>
            <ul className={styles.sidebar_list}>
                <li className={styles.element_list}>
                    <IoCarSport />
                    <span>Carros</span>
                </li>
                <li className={styles.element_list}>
                    <BsPeopleFill />
                    <span>Clientes</span>
                </li>
                <li className={styles.element_list}>
                    <BsGraphUpArrow />
                    <span>Vendas realizadas</span>
                </li>
            </ul>
        </nav>
    )
}