import styles from './ButtonType1.module.css';

const ButtonType1 = ({ label, onClick }: { label: string; onClick: () => void }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {label}
    </button>
  );
};

export default ButtonType1;
