import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Hederlig - кухни по честным ценам в Санкт - Петербурге</title>
        <meta
          name="description"
          content="Закажите кухню, которая сделает вашу жизнь удобной и уютной. Бесплатный 3D-проект, индивидуальный подход и оптимальная цена. Без переплат! Узнайте больше о преимуществах кухни Hederlig"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:url" content="https://hederlig.ru" />
        <meta
          property="og:title"
          content="Hederlig - кухни по честным ценам в Санкт - Петербурге"
        />
        <meta
          property="og:description"
          content="Закажите кухню, которая сделает вашу жизнь удобной и уютной. Бесплатный 3D-проект, индивидуальный подход и оптимальная цена. Без переплат! Узнайте больше о преимуществах кухни Hederlig"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://static.tildacdn.com/tild3065-3338-4534-b765-366133356562/photo.png"
        />
        <link rel="icon" href="/icon.png" />
      </Head>
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        <header className={styles.header}>
          <div className="header_text_block">
            <div className="header_title">
              <Image
                className={styles.header_title_logo}
                src="/logo.svg"
                alt="Hederlig logo"
                width={125}
                height={29}
              />
            </div>
            <p className={styles.header_subtitle}>
              Кухня, которая создает уют и упрощает вашу жизнь. Никаких
              компромиссов, никаких переплат
            </p>
          </div>
        </header>
        <main className={styles.main}></main>
        <footer className={styles.footer}></footer>
      </div>
    </>
  );
}
