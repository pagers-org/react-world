import * as styles from '@/styles/layout.css';
import { Input } from '@/types';

const Input = ({ placeholder }: Input) => {
  return <input type="text" className={styles.input} placeholder={placeholder} />;
};

export default Input;
