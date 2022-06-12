import './Container.css';
import { IContainerProps } from '../../interfaces';

export const Container = ({ children }: IContainerProps) => {
  return (
    <div className="container">
      {children}
    </div>
  );
};
