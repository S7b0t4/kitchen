import styles from "./ButtonType2.module.css";
import Image from "next/image";

const ButtonType2 = ({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) => {
  return (
    <button className={styles.button} onClick={onClick}>
      <Image
        className={styles.icon}
        src={label}
        alt="button-icon"
        width={14}
        height={12}
      />
    </button>
  );
};

export default ButtonType2;
