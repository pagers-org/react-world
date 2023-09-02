'use client';

import { button } from '@/styles/layout.css';
import { Button } from '@/types';

const Button = ({ onClick, children }: Button) => {
  return (
    <button onClick={onClick} className={button}>
      {children}
    </button>
  );
};

export default Button;
