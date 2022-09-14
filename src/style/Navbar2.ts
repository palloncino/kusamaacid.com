import styled from 'styled-components';


const NavBar2Container = styled.div<{isMobile?: boolean;}>`
    
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    height: auto;
    box-sizing: border-box;

    ${({isMobile}) => isMobile ? `
        align-items: center;
        flex: 2;
    ` : `
        
    `}
`;

const StyledSocialLink = styled.span<{color?: string;icon: string;}>`
  padding-left: 2rem;
  transition: .2s;
  background: ${({icon}) => icon ? `url(${icon})` : 'transparent' };
  background-position: left;
  background-repeat: no-repeat;
  background-size: contain;
  &:hover {
    color: #FEFEFE;
  }
`;


export {
  NavBar2Container,
  StyledSocialLink
};