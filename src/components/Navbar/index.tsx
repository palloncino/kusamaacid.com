import { Text } from '../';
import json from '../../settings.json';
import './Navbar.css';
const { routes } = json;

export const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <div className="navbar-container">
        {routes.map(str => <Text key={str.name} textType='link'>{str.label}</Text>)}
      </div>
    </div>
  );
};