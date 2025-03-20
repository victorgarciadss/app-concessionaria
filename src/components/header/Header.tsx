'use client'

import { JSX, useContext } from 'react';
import styles from './header.module.css';
import Link from 'next/link';
import { AuthContext } from '@/contexts/AuthProvider';

export default function Header(): JSX.Element {

    const { validToken, logout } = useContext(AuthContext);

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
                    {validToken ? (
                            <li>
                                <Link href="/"> <button onClick={logout} className={styles.button}>Logout</button></Link>
                            </li>
                        ) :
                        (
                            <li>
                                <Link href="/login" ><button  className={styles.button}>Login</button></Link>
                            </li>
                        )
                    }

                </ul>
            </nav>
        </header>
    )
}