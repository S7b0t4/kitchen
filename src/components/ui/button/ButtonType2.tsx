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
        layout="intrinsic"
        width={30}
        height={30}
      />
    </button>
  );
};

export default ButtonType2;
