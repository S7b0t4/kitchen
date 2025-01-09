import styles from "./ButtonType3.module.css";

const ButtonType3 = ({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {label}
    </button>
  );
};

export default ButtonType3;
