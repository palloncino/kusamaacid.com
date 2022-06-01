import { ReactNode } from 'react';

interface IContainerProps {
  type?: 'fluid';
  children?: ReactNode;
}

export const Container = ({children, type}: IContainerProps) => {
  return (
    <div className={`container container-${type}`}>
      {children}
    </div>
  );
};
