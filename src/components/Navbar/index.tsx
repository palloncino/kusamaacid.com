import { useNavigate } from 'react-router-dom';
import { Text } from '../';
import json from '../../settings.json';
import './Navbar.css';
const { routes } = json;

export const Navbar = () => {

  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    return navigate(path);
  };

  return (
    <div className="navbar-wrapper">
      <div className="navbar-container">
        {routes.map(str => <Text key={str.name} textType='link' onClick={() => handleNavigate(str.path)}>{str.label}</Text>)}
      </div>
    </div>
  );
};