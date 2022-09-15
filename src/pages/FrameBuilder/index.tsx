import { CSSProperties, lazy, Suspense } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Spinner } from '../../components/Spinner';
import { useWhatDevice } from '../../hooks/useWhatDevice';
import { IComponentFrame, ILink } from '../../interfaces';
import { Navbar } from '../../components';
import MiniProjectCard from '../../components/MiniProjectCard';
import { Navbar2 } from '../../components/Navbar2';
import { CustomSection } from '../../style';
import './Layout.css';
import Footer from '../../components/Footer';

const ROUTES_WITHOUT_HEADER = ['/pills', '/smiley', '/projects', '/team', '/music'];

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

      case 'projects':
        return 'Projects';

      case 'team':
        return 'Team';

      case 'music':
        return 'Music';

      default:
        return 'Home';
    }
  };

  const MiniProjectCardContainerStyle = {height: '250px', width: '100%'};

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, _link: ILink) => {
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
    backgroundRepeat: 'no-repeat',
    borderRadius: '.2rem',
    boxSizing: 'border-box',
    background: 'url(https://acidpilsnft.tempurl.host/wp-content/uploads/2022/08/3-scaled.jpg)',
    backgroundPosition: 'top',
    backgroundSize: 'cover',
    padding: '.4rem',
  } as CSSProperties;

  const MobileNavBarStyle = isMobile ? {
    position: 'fixed',
    top: 0,
    margin: '0 auto',
    maxWidth: '1200px',
    zIndex: 99,
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px'
  } as CSSProperties : {};

  const Component = lazy(() => import(`../${getViewPath()}`));

  return (
    <div className={`${device} layout-wrapper`}>

      <CustomSection width="100%" mb={isMobile ? '0rem' : '1rem'}>
      
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
              <CustomSection width="100%" mt={isMobile ? '0rem' : '.4rem'}>
                <Navbar />
              </CustomSection>
            </div>
          
            {isMobile ? (
              <div style={{
                position: 'relative',
                height: window.innerHeight,
                width: '100%',
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'center', 
                alignItems: 'center',
              }}>
                Mobile view is under construction 👨🏻‍🔧
              </div>
            ) : (
              <>

                <div style={{ 
                  position: 'absolute',
                  zIndex: -1,
                  height: window.innerHeight,
                  width: window.innerWidth,
                  background: 'transparent',
                  backgroundSize: isMobile ? 'contain' : 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  display: 'flex', 
                  flexDirection: 'column',
                }} />

                <div style={{
                  boxSizing: 'border-box', 
                  display: 'flex',
                  width: '100%', 
                  height: '100%', 
                  gap: '1rem'
                }}>

                  <div style={{boxSizing: 'border-box', display: 'flex', width: '100%', height: '100%'}}>
                    <div style={{
                      boxSizing: 'border-box',
                      padding: '1rem 0',
                      width: '100%', 
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      justifyContent: 'flex-start',
                      gap: '1rem'
                    }}>
                      <div style={MiniProjectCardContainerStyle}>
                        <MiniProjectCard 
                          id="team-mini"
                          mainImgUrl={`${process.env.REACT_APP_KUSAMA_BUCKET_ALL}/gianste1.jpg`}
                          bannerTextTitle={'Team'}
                          bannerTextSubTitle={'Who did it'}
                          paragraph={`
                        Always been passionate about my music, check it out with the cool track player.
                        `}
                          buttons={[
                            {
                              variant: 'outlined',
                              label: 'Get to know',
                              callback: () => navigate('/team')
                            },
                          ]}
                        />
                      </div>

                      <div style={MiniProjectCardContainerStyle}>
                        <MiniProjectCard 
                          id="music-mini"
                          mainImgUrl={`${process.env.REACT_APP_KUSAMA_BUCKET_ALL}/cachedImage.png`}
                          bannerTextTitle={'Music'}
                          bannerTextSubTitle={'get the Playlist'}
                          paragraph={`
                    Acid Smiley was the first approach to NFT's.
                    A very restrained collection of 10 unique pieces that vary in color with acid
                    `}
                          buttons={[
                            {
                              variant: 'outlined',
                              label: 'Listen to my music',
                              callback: () => navigate('/music')
                            },
                          ]}
                        />
                      </div>

                    </div>
                  </div>

                  <div style={{boxSizing: 'border-box', display: 'flex', width: '100%', height: '100%'}}>
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

                      <div style={MiniProjectCardContainerStyle}>
                        <MiniProjectCard 
                          id="smiley-mini"
                          mainMediaUrl={`${process.env.REACT_APP_KUSAMA_BUCKET_SMILEY_VIDEOS}/SMILE_BLUE.mp4`}
                          bannerUrl={`${process.env.REACT_APP_KUSAMA_BUCKET_SMILEY_BANNERS}/bannerSmiley.png`}
                          paragraph={`
                    Acid Smiley was the first approach to NFT's.
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

                      <div style={MiniProjectCardContainerStyle}>
                        <MiniProjectCard 
                          id="pills-mini"
                          mainMediaUrl={`${process.env.REACT_APP_KUSAMA_BUCKET_PILLS}/BUTTERFLY.mp4`}
                          bannerUrl={`${process.env.REACT_APP_KUSAMA_BUCKET_SMILEY_BANNERS}/bannerSmiley.png`}
                          paragraph={`
                    Acid Smiley was the first approach to NFT's.
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

                      <div style={MiniProjectCardContainerStyle}>
                        <MiniProjectCard 
                          id="collab-mini"
                          mainImgUrl={`${process.env.REACT_APP_KUSAMA_OLD_SITE}/wp-content/uploads/2022/08/a56b4c48-49cc-4929-a748-5d4842b67c4b.jpg`}
                          bannerUrl={`${process.env.REACT_APP_KUSAMA_BUCKET_SMILEY_BANNERS}/bannerSmiley.png`}
                          paragraph={`
                        Acid Smiley was the first approach to NFT's.
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
                </div>
              </>
            )}
          </div>

        )}

        {ROUTES_WITHOUT_HEADER.find(route => route === location.pathname) && (
          <>
            {isMobile && (<div style={{ content: '.', width: '100%', height: 'calc(60px + 1rem)', background: 'transparent' }} />)}
            <div style={{ 
              ...NavBarStyle,
              ...MobileNavBarStyle
            }}>
              <CustomSection width="100%" mb={isMobile ? '0rem' : '.4rem'}>
                <Navbar2/>
              </CustomSection>
              <CustomSection width="100%" mb={isMobile ? '0rem' : '0rem'}>
                <Navbar />
              </CustomSection>
            </div>
          </>
        )}

      </CustomSection>

      <Suspense fallback={<Spinner />}>
        <Component />
      </Suspense>

      <Footer />
    </div>
  );
};

export default ComponentFrame;