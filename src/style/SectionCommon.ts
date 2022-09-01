import styled from 'styled-components';

const Section_Text_Head_Common = styled.div<{css?: string; border?: string; height?: string; bgPosition?: string;}>`
    padding-bottom: .4rem;
    margin-bottom: 1rem;
    ${({css}) => css}
`;

const Section_Text_Head_ID = styled.div<{bg?: string;isMobile?: boolean;}>`
    background: ${({bg}) => bg ? `url(${bg})` : 'transparent'};
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    flex-direction: column;
    padding: .4rem;
    border-radius: .2rem;
    height: 400px;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 1rem 1.2rem;
    ${({isMobile}) => isMobile ? `
      height: 200px;
    ` : `
    
    `}
`;

export {
  Section_Text_Head_Common,
  Section_Text_Head_ID
};