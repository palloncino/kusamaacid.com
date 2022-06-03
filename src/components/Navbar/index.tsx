import { SwipeableDrawer } from '@mui/material';
import { Fragment, useState } from 'react';
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

  const renderHoriNav = () => {
    return (
      <div className="navbar-container">
        {routes.map(({name, path, label}: ILink) => <Text key={name} textType='link' onClick={() => handleNavigate(path)}>{label}</Text>)}
      </div>
    );
  };

  return (
    <div className="navbar-wrapper">
      {isMobile ? (
        <Fragment>
          <div className='drawer-button-container' onClick={toggleDrawer}>
            <span className='drawer-button'>
            MENU
            </span>
          </div>
          <SwipeableDrawer
            open={isOpen}
            onClose={toggleDrawer}
            onOpen={toggleDrawer}
            transitionDuration={{appear: 200, enter: 200, exit: 200}}
          >
            {routes.map(({name, path, label}: ILink) => <Text key={name} textType='link' onClick={() => handleNavigate(path)}>{label}</Text>)}
          </SwipeableDrawer>
        </Fragment>
      ) : renderHoriNav()}
    </div>
  );
};