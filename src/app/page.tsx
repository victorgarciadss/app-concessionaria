import Image from "next/image";
import styles from "./page.module.css";
import Header from '../components/header/Header';

export default function Home() {
  return (
    <>
      <Header />

      <main className={styles.main_container}>
        <section className={styles.info_section}>
          <p>Faça seu login para visualizar as informações e efetuar as informações necessárias</p>
          <Image
            src={"/assets/image-black-car.webp"}
            alt="Imagem de carro preto com cenário tecnológico fundo no fundo"
            width={500}
            height={300}
          />
        </section>
      </main>
    </>
  );
}
