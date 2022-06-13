import { SwipeableDrawer } from '@mui/material';
import { Fragment, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useWhatDevice } from '../../hooks/useWhatDevice';
import { ILink } from '../../interfaces';
import json from '../../settings.json';
import './Navbar.css';
const { routes } = json;

export const Navbar = () => {
  const { isMobile } = useWhatDevice();
  const [isOpen, setIsOpen] = useState(false);
  const [openedOnce, setOpenedOnce] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
    setTimeout(() => {
      setOpenedOnce(true);
    }, 10000);
  };

  const handlePageLink = (e: Event, path: string) => {
    e.preventDefault();
    console.log({e, path});
    const p = document.querySelector('#team');
    if (p) {
      p.scrollIntoView({
        behavior: 'smooth'
      });
    } else {
      window.location.pathname = '/';
    }
  };


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
            transitionDuration={{ appear: 200, enter: 200, exit: 200 }}
          >
            <div className="swipeable-drawer-child" style={{ marginBottom: '2rem', minHeight: '14.3rem' }}>
              {!openedOnce ? (
                <video width="100%" autoPlay playsInline>
                  <source src={`${process.env.REACT_APP_KUSAMA_BUCKET_BANNERS}kusama-acid-pills-banner-dynamic.mp4`} type="video/mp4" />
                </video>
              ) : (
                <div className="swipeable-drawer-child-header" />
              )}
            </div>
            {routes.map(({ name, path, label }: ILink) => {
              return (
                <div key={name} className="swipeable-drawer-child">
                  <NavLink onClick={toggleDrawer} className="navbar-link" to={path}>{label}</NavLink>
                </div>
              );
            })
            }
          </SwipeableDrawer>
        </Fragment>
      ) : (
        <div className="navbar-container">
          {routes.map(({ name, path, label }: ILink) => name == 'team' ? 
            <a onClick={(e: any) => handlePageLink(e, path)}
              key={name}
              className="navbar-link"
              href="#team">{label}</a> :
            <NavLink className="navbar-link" key={name} to={path}>{label}</NavLink>)}
        </div>
      )}
    </div>
  );
};