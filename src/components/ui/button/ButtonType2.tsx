import styles from './ButtonType2.module.css';
import Image from 'next/image';

const ButtonType2 = ({ label, onClick }: { label: string; onClick: () => void }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      <Image
          src={label}
          alt="button-icon"
          width={20}
          height={20}
          style={{ marginRight: '8px' }}
        />
    </button>
  );
};

export default ButtonType2;
