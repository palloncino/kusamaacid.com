import { Drawer } from '@mui/material';
import { FC, Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Text } from '../';
import { useWhatDevice } from '../../hooks/useWhatDevice';
import json from '../../settings.json';
import './Navbar.css';
const { routes } = json;

interface ILink {
  name: string,
  path: string,
  label: string
}

export const Navbar = () => {

  const { isMobile } = useWhatDevice();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDrawer = () => setIsOpen(!isOpen);

  const handleNavigate = (path: string) => {
    if (isOpen) {
      toggleDrawer(); 
    }
    return navigate(path);
  };

  const renderDrawer = () => {
    return (
      <Fragment>
        <div className='drawer-button-container' onClick={toggleDrawer}>
          <span className='drawer-button'>
            MENU
          </span>
        </div>
        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
        >
          {routes.map(({name, path, label}: ILink) => <Text key={name} textType='link' onClick={() => handleNavigate(path)}>{label}</Text>)}
        </Drawer>
      </Fragment>
    );
  };

  const renderHoriNav = () => {
    return (
      <div className="navbar-container">
        {routes.map(({name, path, label}: ILink) => <Text key={name} textType='link' onClick={() => handleNavigate(path)}>{label}</Text>)}
      </div>
    );
  };

  return (
    <div className="navbar-wrapper">
      {isMobile ? renderDrawer() : renderHoriNav()}
    </div>
  );
};