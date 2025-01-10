import Image from "next/image";
import styles from "./header.module.css";
import buttonType2styles from "@/components/ui/button/ButtonType2.module.css";
import { useState } from "react";
import ButtonType2 from "@/components/ui/button/ButtonType2";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className={styles.header_row + " " + styles.page}>
        <div className={styles.header_text_block}>
          <div className="header_title">
            <Image
              className={styles.header_title_logo}
              src="/logo.svg"
              alt="Hederlig logo"
              width={125}
              height={29}
            />
          </div>
          <div className={styles.header_subtitle}>
            Кухня, которая создает уют и упрощает вашу жизнь.
            <br />
            Никаких компромиссов, никаких переплат
          </div>
        </div>
        <div className={styles.header_menu_row}>
          <p className={styles.header_menu_text}>Меню</p>
          <button
            className={`${styles.header_menu} ${isOpen ? styles.active : ""}`}
            onClick={() => {
              console.log("hello");
            }}
          >
            <div
              className={`${styles.burgerMenu} ${isOpen ? styles.active : ""}`}
              onClick={toggleMenu}
            >
              <div className={styles.line}></div>
              <div className={styles.line}></div>
              <div className={styles.line}></div>
            </div>
          </button>
        </div>
        <p className={styles.header_number}>8 (921) 957-23-08</p>
        <div className={styles.header_link_block}>
          <ButtonType2 label={"./tg.svg"} onClick={()=>{console.log('click')}}/>
        </div>
      </div>
    </>
  );
}
