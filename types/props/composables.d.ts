import { ReactNode } from 'react';

export type Button = {
  size?: string;
  onClick: () => void;
  children: ReactNode;
  type: string;
};

export type Input = {
  size: string;
  placeholder: string;
};
