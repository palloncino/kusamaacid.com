import styled from 'styled-components';

const Section_1 = styled.div<{isMobile?: boolean; bg?: string;}>`
	background: ${({bg}) => bg ? `url(${bg})` : 'transparent'};
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
`;

const SectionChild_1_head = styled.div<{isMobile?: boolean;}>`
	height: 100px;
`;

const SectionChild_1_body = styled.div<{isMobile?: boolean; bg?: string;}>`
	background: ${({bg}) => bg ? `url(${bg})` : 'transparent'};
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	height: 100%;
	gap: 1rem;
	${({isMobile}) => isMobile ? `
		display: unset;
	` : `
		display: flex;
	`}
`;

const SectionChild_1_body_1 = styled.div<{isMobile?: boolean;}>`
	height: 100%;
	flex: 1;
`;

const SectionChild_1_body_1_1 = styled.div<{isMobile?: boolean;bg?: string;}>`
	box-sizing: border-box;
	flex: 1;
`;

const SectionChild_1_body_1_2 = styled.div<{isMobile?: boolean;css?: string;}>`
	${({css}) => css ? css : ''};
	box-sizing: border-box;
	flex: 1;
	background: #0e1d2ad9;
	border-radius: .2rem;
`;

const SectionChild_1_body_2 = styled.div<{isMobile?: boolean;}>`
	height: 100%;
	flex: 1;
`;

const SectionChild_1_body_2_1_header = styled.div<{isMobile?: boolean;bg?: string}>`
		background: transparent;
`;

const SectionChild_1_body_2_1 = styled.div<{isMobile?: boolean;bg?: string;css?: string;}>`
	box-sizing: border-box;
	flex: 3;
	background: #0e1d2ad9;
	border-radius: .2rem;
	${({isMobile}) => isMobile ? `
		margin-bottom: 0rem;
	` : `
		margin-bottom: 1rem;
	`};
	${({css}) => css ? css : ''};
`;

const SectionChild_1_body_2_2 = styled.div<{isMobile?: boolean;}>`
	box-sizing: border-box;
	flex: 3;
`;


export {
  Section_1,  
  SectionChild_1_head,
  SectionChild_1_body,
  SectionChild_1_body_1,
  SectionChild_1_body_1_1,
  SectionChild_1_body_1_2,
  SectionChild_1_body_2,
  SectionChild_1_body_2_1,
  SectionChild_1_body_2_1_header,
  SectionChild_1_body_2_2,
};