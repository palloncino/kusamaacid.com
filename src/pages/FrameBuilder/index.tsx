import { CSSProperties, lazy, Suspense } from 'react';
import { Spinner } from '../../components/Spinner';
import { useWhatDevice } from '../../hooks/useWhatDevice';
import { IComponentFrame } from '../../interfaces';
import { useLocation } from 'react-router-dom';

import { Navbar } from '../../components';
import { Navbar2 } from '../../components/Navbar2';
import { CustomSection } from '../../style';
import './Layout.css';

const ROUTES_WITHOUT_HEADER = ['/pills', '/smiley'];

const ComponentFrame = ({ view }: IComponentFrame) => {

  const { isMobile, device } = useWhatDevice();

  const location = useLocation();

  const getViewPath = () => {
    switch (view) {
      case 'home':
        return 'Home';

      case 'pills':
        return 'Pills';

      case 'smiley':
        return 'Smiley';

      default:
        return 'Home';
    }
  };
  const NavBarStyle = {
    width: '100%', 
    // background: 'url(https://acidpilsnft.tempurl.host/wp-content/uploads/2022/08/2-scaled.jpg)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    borderRadius: '.2rem',
    background: '#0e1d2ad9',
    padding: '.4rem',
  } as CSSProperties;

  const MobileNavBarStyle = isMobile ? {
    position: 'fixed',
    margin: '0 auto',
    maxWidth: '1200px',
    zIndex: 99,
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px'
  } as CSSProperties : {};

  const Component = lazy(() => import(`../${getViewPath()}`));

  return (
    <div className={`${device} layout-wrapper`}>

      <CustomSection width="100%" mb={'1rem'}>
      
        {!ROUTES_WITHOUT_HEADER.find(route => route === location.pathname) && (

          <div style={{ 
            position: 'relative',
            height: window.innerHeight,
            width: '100%',
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'flex-start', 
            alignItems: 'center',
          }}>
          
          
            <div style={{ 
              ...NavBarStyle,
              ...MobileNavBarStyle
            }}>
              <CustomSection width="100%" mb={isMobile ? '0rem' : '.4rem'}>
                <Navbar2/>
              </CustomSection>
              <CustomSection width="100%" mb={isMobile ? '0rem' : '.4rem'}>
                <Navbar />
              </CustomSection>
            </div>

            {/* <CustomSection width="100%" mb={'1rem'}>
            <Header />
          </CustomSection>  */}

            <div style={{ 
              position: 'absolute',
              zIndex: -1,
              height: window.innerHeight,
              width: window.innerWidth,
              // background: `url(${acidBanner2})`,
              background: isMobile ? 'url(https://kusama-acid-media.s3.amazonaws.com/banners/banner-mobile-no-bg.png)' : 'url(https://kusama-acid-media.s3.amazonaws.com/banners/Acid+Pills+Web+Banner_05.png)',
              backgroundSize: isMobile ? 'contain' : 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'center', 
              alignItems: 'center' 
            }} />

          </div>

        )}

        {ROUTES_WITHOUT_HEADER.find(route => route === location.pathname) && (
          <div style={{ 
            ...NavBarStyle,
            ...MobileNavBarStyle
          }}>
            <CustomSection width="100%" mb={isMobile ? '0rem' : '.4rem'}>
              <Navbar2/>
            </CustomSection>
            <CustomSection width="100%" mb={isMobile ? '0rem' : '.4rem'}>
              <Navbar />
            </CustomSection>
          </div>
        )}

      </CustomSection>

      <Suspense fallback={<Spinner />}>
        <Component />
      </Suspense>

      {/* <Footer /> */}
    </div>
  );
};

export default ComponentFrame;