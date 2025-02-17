import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import ButtonType1 from "@/components/ui/button/ButtonType1";
import ButtonType2 from "@/components/ui/button/ButtonType2";
import ButtonType3 from "@/components/ui/button/ButtonType3";
import ButtonType4 from "@/components/ui/button/ButtonType4";
import ButtonType5 from "@/components/ui/button/ButtonType5";
import Header from "@/widgets/Header";

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
          <Header />
        </header>
        {/* <ButtonType1 label={"Получить консультацию"} onClick={()=>{console.log("click")}}/>
            <ButtonType2 label={"/tg.svg"} onClick={()=>{console.log("click")}}/>
            <ButtonType3 label={"Оставить заявку"} onClick={()=>{console.log("click")}}/>
            <ButtonType4 link={"/"} text={"Подробнее"} img_link={"/weui_arrow-filled.svg"} onClick={()=>{console.log("click")}}/>
            <ButtonType4 link={"/"} text={"Пройдите тест и узнайте, <br/> какая кухня подходит именно вам"} img_link={"/weui_arrow-filled.svg"} onClick={()=>{console.log("click")}}/>
            <ButtonType5 text={"Подробнее"} img_link={"/weui_arrow-filled.svg"} onClick={()=>{console.log("click")}}/> */}

        {/* ===  Первый экран  ===  */}
        <main className={styles.main}></main>

        {/* ===  Преимущества  ===  */}
        <section className={styles.advantages}></section>

        {/* ===  Преимущества 2  ===  */}
        <section className={styles.advantages2}></section>

        {/* ===  Типы кухни  ===  */}
        <section className={styles.types}></section>

        {/* ===  Категории кухонь    ===  */}
        <section className={styles.categories}></section>

        {/* ===  Стили кухни  ===  */}
        <section className={styles.styles}></section>

        {/* ===  Бонусная программа    ===  */}
        <section className={styles.bonus}></section>

        {/* ===  3 простых шага === */}
        <section className={styles.bonus}></section>

        {/* ===  3D feedbaack === */}
        <section className={styles.free_3d}></section>

        {/* ===  Партнеры === */}
        <section className={styles.partners}></section>

        {/* ===  Рассрочка === */}
        <section className={styles.installment}></section>

        {/* ===  Рассрочка === */}
        <section className={styles.installment}></section>

        {/* ===  Квиз-опросник  === */}
        <section className={styles.quiz}></section>

        {/* ===  Баннер  === */}
        <section className={styles.banner}></section>

        {/* ===  Обратная связь   === */}
        <section className={styles.feedbaack}></section>

        {/* ===  Футер === */}
        <footer className={styles.footer}></footer>
      </div>
    </>
  );
}
