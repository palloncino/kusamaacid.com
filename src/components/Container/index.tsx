import { ReactNode } from 'react';
import './Container.css';

interface IContainerProps {
  children?: ReactNode;
}

export const Container = ({ children }: IContainerProps) => {
  return (
    <div className="container">
      {children}
    </div>
  );
};
