import { Button, Drawer } from '@mui/material';
import { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Text, Container } from '../';
import { useWhatDevice } from '../../hooks/useWhatDevice';
import json from '../../settings.json';
import './Navbar.css';
const { routes } = json;

export const Navbar = () => {

  const { isMobile } = useWhatDevice();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDrawer = () => setIsOpen(!isOpen);

  const handleNavigate = (path: string) => {
    return navigate(path);
  };

  const renderDrawer = () => {
    return (
      <Fragment>
        <Button style={{ background: 'black' }} onClick={toggleDrawer}>MENU</Button>
        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
        >
          {routes.map(str => <Text key={str.name} textType='link' onClick={() => handleNavigate(str.path)}>{str.label}</Text>)}
        </Drawer>
      </Fragment>
    );
  };

  const renderHoriNav = () => {
    return (
      <div className="navbar-container">
        {routes.map(str => <Text key={str.name} textType='link' onClick={() => handleNavigate(str.path)}>{str.label}</Text>)}
      </div>
    );
  };

  return (
    <div className="navbar-wrapper">
      <Container>
        {isMobile ? renderDrawer() : renderHoriNav()}
      </Container>
    </div>
  );
};