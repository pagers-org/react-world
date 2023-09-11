'use client';

import { grayButton, greenButton } from '@/styles/common.css';
import { Button } from '@/types';

const Button = ({ onClick, children, type }: Button) => {
  return (
    <button onClick={onClick} className={getButtonStyle(type)}>
      {children}
    </button>
  );
};

function getButtonStyle(type: string): React.JSX.Element {
  let classType = <></>;
  switch (type) {
    case 'green':
      classType = greenButton;
      break;
    case 'gray':
      classType = grayButton;
      break;
  }
  return classType;
}

export default Button;
