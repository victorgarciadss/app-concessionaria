import Image from "next/image";
import styles from "./page.module.css";
import Header from '../components/header/Header';

export default function Home() {
  return (
    <>
      <Header />

      <main className={styles.main_container}>
        <div>Faça seu login para visualizar as informações e efetuar as informações necessárias</div>
      </main>
    </>
  );
}
