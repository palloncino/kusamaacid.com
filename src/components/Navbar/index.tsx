import { SwipeableDrawer } from '@mui/material';
import { Fragment, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Container } from '../';
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
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDrawer = () => setIsOpen(!isOpen);

  return (
    <div className="navbar-wrapper">
      {isMobile ? (
        <Fragment>
          <div className='drawer-button-container' onClick={toggleDrawer}>
            <span className='drawer-button'>
              lll
            </span>
          </div>
          <SwipeableDrawer
            open={isOpen}
            onClose={toggleDrawer}
            onOpen={toggleDrawer}
            transitionDuration={{appear: 200, enter: 200, exit: 200}}
          >
            {routes.map(({name, path, label}: ILink) => <NavLink className="navbar-link" key={name} to={path}>{label}</NavLink>) }
          </SwipeableDrawer>
        </Fragment>
      ) : (
        <Container>
          <div className="navbar-container">
            {routes.map(({name, path, label}: ILink) => <NavLink className="navbar-link" key={name} to={path}>{label}</NavLink>) }
          </div>
        </Container>
      )}
    </div>
  );
};