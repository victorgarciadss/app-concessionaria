"use client"

import { JSX, useState } from "react";
import styles from "./register.module.css";
import { Role } from "@/enums/Role";
import Cookies from "js-cookie";
import { redirect } from "next/navigation";

export default function Register(): JSX.Element {

    async function submitUserData(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const token = Cookies.get("token");

        try {
            
            const response = await fetch("http://localhost:8080/auth/cadastro", {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "userName": username,
                    "password": password,
                    "role": role
                })
            });

            if(!response.ok) {
                throw new Error(`Erro na requisição: ${response.status} ${response.statusText}`);
            }

            const responseJson = await response.json();
            console.log(responseJson);
            // redirect("/"); // alterar após criar uma listagem de funcionários para redirecionar para lá
            

        } catch(err) {
            throw new Error(`Erro ao tentar o cadastro", ${err}`);
        }
    }

    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [role, setRole] = useState<Role>(Role.EMPLOYEE);

    return (
        <main className={styles.main_component}>
            <h2 className={styles.title}>
                Realize o cadastro do novo funcionário
            </h2>

            <form className={styles.form_container} onSubmit={submitUserData}>
                <div className={styles.info_content}>
                    <label htmlFor="username">Nome de usuário: </label>
                    <input
                        type="text"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>

                <div className={styles.info_content}>
                    <label htmlFor="password">Senha: </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div className={styles.info_content}>
                    <label htmlFor="role">Função: </label>
                    <select 
                        name="role"
                        id=""
                        value={role}
                        onChange={(e) => setRole(e.target.value as Role)}
                    >
                        <option value="ADMIN">Administrador</option>
                        <option value="EMPLOYEE">Funcionário</option>
                    </select>
                </div>

                <button className={styles.button} type="submit">Cadastrar</button>
            </form>
        </main>
    )
}