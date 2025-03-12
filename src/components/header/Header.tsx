import { JSX } from 'react';
import styles from './header.module.css';
import Link from 'next/link';

export default function Header (): JSX.Element {
    return (
        <header className={styles.header_container}>
            <div>
                <h1 className={styles.title}>Garcia Concessionária</h1>
            </div>

            <nav>
                <ul className={styles.links}>
                    <li>
                        <Link href="" ><button className={styles.button}>Cadastrar</button></Link>
                    </li>
                    <li>
                        <Link href="/login" ><button className={styles.button}>Login</button></Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}