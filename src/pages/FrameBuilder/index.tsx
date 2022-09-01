import { CSSProperties, lazy, Suspense } from 'react';
import { Spinner } from '../../components/Spinner';
import { useWhatDevice } from '../../hooks/useWhatDevice';
import { IComponentFrame, ILink } from '../../interfaces';
import { useLocation, useNavigate } from 'react-router-dom';

import { Navbar } from '../../components';
import { Navbar2 } from '../../components/Navbar2';
import { CustomSection } from '../../style';
import './Layout.css';
import MiniProjectCard from '../../components/MiniProjectCard';

const ROUTES_WITHOUT_HEADER = ['/pills', '/smiley'];

const ComponentFrame = ({ view }: IComponentFrame) => {

  const { isMobile, device } = useWhatDevice();
  
  const navigate = useNavigate();

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
              background: isMobile ? 
                `url(${process.env.REACT_APP_KUSAMA_BUCKET_BANNERS}/banner-mobile-no-bg.png)` : 
                `url(${process.env.REACT_APP_KUSAMA_BUCKET_BANNERS}/banner-mobile-no-bg.png)`,
              // `url(${process.env.REACT_APP_KUSAMA_BUCKET_BANNERS}/Acid+Pills+Web+Banner_05.png)`,
              // backgroundSize: isMobile ? 'contain' : 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              transform: 'translateX(-20%)',
              display: 'flex', 
              flexDirection: 'column',
            }} />

            <div  style={{
              boxSizing: 'border-box',
              padding: '1rem 0',
              width: '100%', 
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              justifyContent: 'flex-start',
              gap: '1rem'
            }}>

              <div style={{ height: '250px' }}>
                <MiniProjectCard 
                  id="smiley-mini"
                  mainMediaUrl={`${process.env.REACT_APP_KUSAMA_BUCKET_SMILEY_VIDEOS}/SMILE_BLUE.mp4`}
                  bannerUrl={`${process.env.REACT_APP_KUSAMA_BUCKET_SMILEY_BANNERS}/bannerSmiley.png`}
                  bannerTextTitle={'Primary'}
                  bannerTextSubTitle={'Secondary'}
                  paragraph={`
                  Acid Smiley was the first approach to NFT's. Acid Smiley was the first approach to NFT's.
                  A very restrained collection of 10 unique pieces that vary in color with acid
                  `}
                  buttons={[
                    {
                      variant: 'outlined',
                      label: 'Catalog',
                      callback: () => navigate('/smiley')
                    },
                    {
                      variant: 'outlined',
                      label: 'All Projects',
                      callback: (e) => handleClick(e, {name: 'projects', path: '/#projects', label: 'Projects'})
                    }
                  ]}
                />
              </div>

              <div style={{ height: '250px' }}>
                <MiniProjectCard 
                  id="pills-mini"
                  mainMediaUrl={`${process.env.REACT_APP_KUSAMA_BUCKET_PILLS}/BUTTERFLY.mp4`}
                  bannerUrl={`${process.env.REACT_APP_KUSAMA_BUCKET_SMILEY_BANNERS}/bannerSmiley.png`}
                  bannerTextTitle={'Primary'}
                  bannerTextSubTitle={'Secondary'}
                  paragraph={`
                  Acid Smiley was the first approach to NFT's. Acid Smiley was the first approach to NFT's.
                  A very restrained collection of 10 unique pieces that vary in color with acid
                  `}
                  buttons={[
                    {
                      variant: 'outlined',
                      label: 'Catalog',
                      callback: () => navigate('/pills')
                    },
                    {
                      variant: 'outlined',
                      label: 'All Projects',
                      callback: (e) => handleClick(e, {name: 'projects', path: '/#projects', label: 'Projects'})
                    }
                  ]}
                />
              </div>

              <div style={{ height: '250px' }}>
                <MiniProjectCard 
                  id="collab-mini"
                  mainImgUrl={`${process.env.REACT_APP_KUSAMA_OLD_SITE}/wp-content/uploads/2022/08/a56b4c48-49cc-4929-a748-5d4842b67c4b.jpg`}
                  bannerUrl={`${process.env.REACT_APP_KUSAMA_BUCKET_SMILEY_BANNERS}/bannerSmiley.png`}
                  bannerTextTitle={'Primary'}
                  bannerTextSubTitle={'Secondary'}
                  paragraph={`
                  Acid Smiley was the first approach to NFT's. Acid Smiley was the first approach to NFT's.
                  A very restrained collection of 10 unique pieces that vary in color with acid
                  `}
                  buttons={[
                    {
                      variant: 'outlined',
                      disabled: true,
                      label: 'Catalog',
                      callback: () => console.log
                    },
                    {
                      variant: 'outlined',
                      label: 'All Projects',
                      callback: (e) => handleClick(e, {name: 'projects', path: '/#projects', label: 'Projects'})
                    }
                  ]}
                />
              </div>

            </div>

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