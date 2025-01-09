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
      <p>
      {text}
      </p>
      <Image
        className={styles.icon}
        src={img_link}
        alt="button-icon"
        layout="intrinsic"
        width={7}
        height={10}
      />
    </button>
  );
};

export default ButtonType5;
