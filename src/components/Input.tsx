import { ChangeEvent } from 'react';

import * as styles from './Input.css';

interface Props {
  type: string;
  name: string;
  value: string;
  handleEvent: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({ type, name, value, handleEvent }: Props) {
  return (
    <input
      className={styles.inputType}
      type={type}
      name={name}
      placeholder={name}
      value={value}
      onChange={handleEvent}
    />
  );
}
