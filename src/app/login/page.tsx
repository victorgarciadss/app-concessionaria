import { JSX } from "react";
import styles from './loginPage.module.css';


export default function Login(): JSX.Element {
    return (
        <main className={styles.main_container}>
            <section className={styles.content}>
                <div>
                    <h2>Bem vindo a nossa seção de login</h2>
                    <p>Insira suas credenciais para continuar</p>
                </div>

                <form className={styles.login_form} action="">
                    <div className={styles.form_content}>
                        <div className={styles.user_data_container}>
                            <label htmlFor="">Nome de usuário:</label>
                            <input type="text" />
                        </div>

                        <div className={styles.user_data_container}>
                            <label htmlFor="">Senha:</label>
                            <input type="password" name="password" id="" />
                        </div>

                        <button className={styles.login_form_button}>Entrar</button>
                    </div>
                </form>
            </section>
        </main>
    )
}