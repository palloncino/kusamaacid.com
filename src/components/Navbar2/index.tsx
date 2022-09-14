import './Navbar2.css';
import { Text } from '../../components';
import { useWhatDevice } from '../../hooks/useWhatDevice';
import { NavBar2Container, StyledSocialLink } from '../../style/Navbar2';
import instaSvg from '../../assets/media/insta.svg';

export const Navbar2 = () => {
  const { isMobile } = useWhatDevice();

  return (
    <div className="navbar2-wrapper">
      <NavBar2Container isMobile={isMobile}>

        <div className="navbar2__child3" style={{ cursor: 'pointer' }}>
          <Text textType={isMobile ? 'small' : 'regular'} customStyle={{ lineHeight: '1.5rem', color: '#ACBBCB', padding: '0 1rem' }}>
            <StyledSocialLink icon={instaSvg} onClick={() => window.location.href = 'https://www.instagram.com/gianste___/'}>
                _GIANSTE_
            </StyledSocialLink>
          </Text>
        </div>
        
        <div className="navbar2__child1">
          <Text textType={isMobile ? 'regular' : 'h3'} customStyle={{ lineHeight: '1.5rem', padding: '0' }}>
            kusamaacid.com
          </Text>
        </div>

        <div className="navbar2__child3">
          <Text textType={isMobile ? 'small' : 'regular'} customStyle={{ lineHeight: '1.5rem', color: '#ACBBCB', padding: '0 1rem' }}>
            {isMobile ? 'Mobile' : 'Desktop'}
          </Text>
        </div>
        
      </NavBar2Container>

    </div>
  );
};
