'use client'

import { ChangeEvent, JSX, useContext, useState } from "react";
import styles from './loginPage.module.css';
import { redirect } from "next/navigation";
import { AuthContext } from "@/contexts/AuthProvider";

interface IUser {
    userName: string,
    password: string
};


export default function Login(): JSX.Element {

    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const { login } = useContext(AuthContext);

    async function getDataLogin() {

        const userData: IUser = {
            userName: username,
            password: password
        }

        try {
            const response = await fetch("http://localhost:8080/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData)
            })

            return response;
        } catch (err) {
            console.log(`Deu o seguinte erro: ${err}`);
        }
    }

    async function submitToForm(e: React.FormEvent) {
        e.preventDefault();
        const response = await getDataLogin();

        if (!response) {
            console.log("Erro na requisição");
            return;
        }

        if(response.ok) {
            const token = await response.text();

            if(token) {
                login(token);
                redirect("/dashboard");
            }
            else {
                console.log("Token expirado ou inválido");
            }
        }
        else {
            const errorData = await response.json();
            console.log("Erro no login:", errorData.message);
        }
    }


    return (
        <main className={styles.main_container}>
            <section className={styles.content}>
                <div>
                    <h2>Bem vindo a nossa seção de login</h2>
                    <p>Insira suas credenciais para continuar</p>
                </div>

                <form className={styles.login_form} onSubmit={submitToForm}>
                    <div className={styles.form_content}>
                        <div className={styles.user_data_container}>
                            <label htmlFor="">Nome de usuário:</label>
                            <input
                                type="text"
                                name="username"
                                value={username}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
                            />
                        </div>

                        <div className={styles.user_data_container}>
                            <label htmlFor="">Senha:</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                value={password}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                            />
                        </div>

                        <button className={styles.login_form_button}>Entrar</button>
                    </div>
                </form>
            </section>
        </main>
    )
}