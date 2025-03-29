'use client'

import { JSX, useContext } from 'react';
import styles from './header.module.css';
import Link from 'next/link';
import { AuthContext } from '@/contexts/AuthProvider';
import Cookies from 'js-cookie';

export default function Header(): JSX.Element {

    const { validToken, logout } = useContext(AuthContext);
    const role = Cookies.get("role");

    return (
        <header className={styles.header_container}>
            <div>
                <h1 className={styles.title}>Garcia Concessionária</h1>
            </div>

            <div className={styles.links}>
                {validToken ? (
                        <>
                            {role === "ROLE_ADMIN" && 
                                <Link href={"/register"}>
                                    <button className={styles.button}>Adicionar funcionário</button>
                                </Link>
                            }
                            
                            <Link href="/">
                                <button onClick={logout} className={styles.button}>Logout</button>
                            </Link>
                        </>
                    ) :
                    (
                        <Link href="/login" ><button className={styles.button}>Login</button></Link>
                    )
                }
            </div>
        </header>
    )
}