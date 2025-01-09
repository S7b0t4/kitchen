import Image from "next/image";
import styles from "./ButtonType4.module.css";

const ButtonType4 = ({
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
        width={7}
        height={10}
      />
    </button>
  );
};

export default ButtonType4;
