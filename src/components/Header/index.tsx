import { Text } from '../';
import './Header.css';

export const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="header-container">
        <Text textType='h1'>Kusama Acid</Text>
        <Text textType='h3'>Pills</Text>
      </div>
    </div>
  );
};