import styled from 'styled-components';

const Section_2 = styled.div<{isMobile?: boolean;}>`
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
  position: relative;
`;

const SectionChild_2_head = styled.div<{isMobile?: boolean;}>`
	height: 100px;
`;

const SectionChildBody = styled.div<{isMobile?: boolean;bg?: string;}>`
  box-sizing: border-box;
	// background: ${({bg}) => bg ? `url(${bg})` : 'transparent'};
	// background-position: center;
	// background-repeat: no-repeat;
	// background-size: cover;
`;

// CHILD 1 - Smiley
const SectionContainer = styled.div<{isMobile?: boolean;css?: string;}>`
  box-sizing: border-box;
  border-radius: .2rem;
	height: 100%;
  ${({isMobile}) => isMobile ? `
    display; block;
  ` : `
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  `};
  ${({css}) => css ? css : ''}
`;

const SectionLeftBoxMedia = styled.div<{isMobile?: boolean;bg?: string;css?: string;}>`
  box-sizing: border-box;
  height: 100%;
  position: relative;
	flex: 2;
  transition: .5s;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
  ${({css}) => css ? css : ''}
  ${({isMobile}) => isMobile ? `
    min-height: 400px;
  ` : `

  `}
`;

const SectionRightBoxMedia = styled.div<{isMobile?: boolean;}>`
  box-sizing: border-box;
  height: 100%;
  position: relative;
  flex: 2;
  cursor: pointer;
  transition: .5s;
  &:hover {
    transform: scale(1.05);
  }
`;

const SectionChild_2_body_1_2_header = styled.div<{isMobile?: boolean;}>`
		background: transparent;
`;

const SectionTextBoxRight = styled.div<{isMobile?: boolean;css?: string;}>`
	${({css}) => css ? css : ''};
	box-sizing: border-box;
	flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

// CHILD 2 - Pills

const SectionChild_2_body_2_1_header = styled.div<{isMobile?: boolean;bg?: string}>`
		background: transparent;
`;

const SectionTextBoxLeft = styled.div<{isMobile?: boolean;bg?: string;css?: string;}>`
    ${({css}) => css ? css : ''};
    box-sizing: border-box;
    flex: 3;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;

// MiniProjectCard

const MiniSectionLeftBoxMedia = styled.div<{isMobile?: boolean;bg?: string;css?: string;}>`
  box-sizing: border-box;
  height: 100%;
  position: relative;
	flex: 1;
  transition: .5s;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
  ${({css}) => css ? css : ''}
  ${({isMobile}) => isMobile ? `
    min-height: 400px;
  ` : `

  `}
`;

const MiniSectionTextBoxRight = styled.div<{isMobile?: boolean;css?: string;}>`
	${({css}) => css ? css : ''};
	box-sizing: border-box;
	flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const MiniSectionContainer = styled.div<{isMobile?: boolean;css?: string;}>`
  box-sizing: border-box;
  border-radius: .2rem;
	height: 100%;
  ${({isMobile}) => isMobile ? `
    display; block;
  ` : `
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  `};
  ${({css}) => css ? css : ''}
`;


export {
  Section_2,  
  SectionChild_2_head,
  SectionChildBody,

  // CHILD 1 - Smiley
  SectionContainer,
  MiniSectionContainer,
  // text
  SectionLeftBoxMedia,
  MiniSectionLeftBoxMedia,
  SectionChild_2_body_1_2_header,
  // img
  SectionTextBoxRight,
  MiniSectionTextBoxRight,

  // CHILD 2 - Pills
  // img
  SectionTextBoxLeft,
  // text
  SectionChild_2_body_2_1_header,
  SectionRightBoxMedia,
};