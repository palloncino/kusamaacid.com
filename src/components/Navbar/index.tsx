import { SwipeableDrawer } from '@mui/material';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useWhatDevice } from '../../hooks/useWhatDevice';
import { ILink } from '../../interfaces';
import json from '../../settings.json';
import { DrawerButtonContainer, StyledNavLink } from '../../style/NavBar';
import './Navbar.css';
const { routes } = json;


// const links = routes.map(link => link.name !== 'pills' ? link : undefined).filter(l => l !== undefined);

export const Navbar = () => {
  const 
    { isMobile } = useWhatDevice(),
    [isOpen, setIsOpen] = useState(false),
    [openedOnce, setOpenedOnce] = useState(false),
    navigate = useNavigate();

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
    setTimeout(() => {
      setOpenedOnce(true);
    }, 10000);
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, _link: ILink) => {
    console.log({e, _link});
    if (_link.path.includes('#')) {
      handleInternalLink(_link);
    } else {
      handleExternalLink(_link);
    }

    function handleInternalLink(_link: ILink) {
      const id = _link.path.split('#')[1];
      console.log(id);
      const el = document.querySelector(`#${id}`);
      if (el) {
        el?.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }

    function handleExternalLink(_link: ILink) {
      return navigate(`${_link.path}`);
    }

  };


  return (
    <div className="navbar-wrapper">
      {isMobile ? (
        <div>
          <DrawerButtonContainer onClick={toggleDrawer}>
            menu
          </DrawerButtonContainer>
          <SwipeableDrawer
            open={isOpen}
            onClose={toggleDrawer}
            onOpen={toggleDrawer}
            transitionDuration={{ appear: 200, enter: 200, exit: 200 }}
          >
            <div style={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

              {
                routes.map(({ name, path, label }: ILink) => {
                  return (
                    <div key={name} className="swipeable-drawer-child">
                      <NavLink 
                        onClick={toggleDrawer} 
                        className="navbar-link" 
                        to={path}>
                        {label}
                      </NavLink>
                    </div>
                  );
                })
              }

            </div>
          </SwipeableDrawer>
        </div>
      ) : (
        <div className="navbar-container">
          {routes.map((link: ILink | undefined, index: number) => {
            if (link) {
              return <StyledNavLink key={`${link.label}-${index}`} onClick={(e) => handleClick(e, link)}>{link.label}</StyledNavLink>;
            }
          })}
        </div>
      )}
    </div>
  );
};