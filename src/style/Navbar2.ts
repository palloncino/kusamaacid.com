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


export {
  NavBar2Container
};