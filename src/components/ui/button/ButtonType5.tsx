import Image from "next/image";
import styles from "./ButtonType5.module.css";

const ButtonType5 = ({
  text,
  img_link,
  onClick,
}: {
  text: string;
  img_link: string;
  onClick: () => void;
}) => {
  return (
    <button className={styles.button} onClick={onClick}>
      <p>{text}</p>
      <div className={styles.icon}>
        <Image
          src={img_link}
          alt="button-icon"
          layout="intrinsic"
          width={10}
          height={20}
        />
      </div>
    </button>
  );
};

export default ButtonType5;
