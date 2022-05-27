import { Text } from '../';
import { routes } from '../../settings.json';
import './Navbar.css';

export const NavBar = () => {
  return (
    <div className="navbar-container">
      {routes.map(str => <Text key={str.name} textType='link'>{str.label}</Text>)}
    </div>
  );
};