import styled from 'styled-components';

const StyledNavLink = styled.div<{isMobile?: boolean;}>`

    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: relative;
    cursor: pointer;
    text-decoration: none;
    transition: .2s;
    font-size: 1rem;
    text-transform: uppercase;
    margin-right: 1rem;
    height: auto;
    padding: .2rem 1rem;
    border-bottom: 2px solid #0e1d2ad9;
    background: #0e1d2a69;
    color: #FEFEFE;

    :last-child {
      margin-right: 0rem;
    }

    :hover {
      transform: scale(.98);
      z-index: 1000;
      color: #FEFEFE;
    }

    :before {
      content: "";
      position: absolute;
      display: block;
      width: 100%;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: #FEFEFE;
      transform: scaleX(0);
      transition: transform 0.3s ease;
    }

    :hover::before {
      animation-name: example;
      animation-duration: .2s;
      animation-fill-mode: forwards;
    }

    @keyframes example {
      0% {
        transform: scaleX(0);
      }
      100%{
        transform: scaleX(1);
      }
    }

    ${({isMobile}) => isMobile ? `
    ` : `
        
    `}
`;

const DrawerButtonContainer = styled.div<{isMobile?: boolean;}>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  background: url(https://acidpilsnft.tempurl.host/wp-content/uploads/2022/08/3-scaled.jpg);
  background-position: center;
  background-size: cover;
  cursor: pointer;
`;


export {
  StyledNavLink,
  DrawerButtonContainer
};