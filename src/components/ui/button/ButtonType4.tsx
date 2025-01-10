import Image from "next/image";
import styles from "./ButtonType4.module.css";

const ButtonType4 = ({
  text,
  img_link,
  link,
  onClick,
}: {
  text: string;
  img_link: string;
  link: string;
  onClick: () => void;
}) => {
  return (
    <div className={styles.button_row} onClick={onClick}>
      <span
        className={styles.text}
        dangerouslySetInnerHTML={{ __html: text }}
      ></span>
      <a href={link}>
        <button className={styles.button}>
          <Image
            className={styles.icon}
            src={img_link}
            alt="button-icon"
            layout="intrinsic"
            width={7}
            height={10}
          />
        </button>
      </a>
    </div>
  );
};

export default ButtonType4;
