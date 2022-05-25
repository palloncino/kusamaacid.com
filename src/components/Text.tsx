import { ReactNode } from 'react';

interface ITextProps {
    children: ReactNode;
}

export const Text = ({ children }: ITextProps) => {
  return <>{children}</>;
};