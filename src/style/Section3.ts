import styled from 'styled-components';

const Section_3 = styled.div<{isMobile?: boolean;}>`
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
`;

const SectionChild_3_head = styled.div<{isMobile?: boolean;}>`
	height: 100px;
`;

const SectionChild_3_body = styled.div<{isMobile?: boolean;bg?: string;}>`
	background: ${({bg}) => bg ? `url(${bg})` : 'transparent'};
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	height: 100%;
`;

const SectionChild_3_body_1 = styled.div<{isMobile?: boolean;}>`
	height: 100%;
	display: flex;
	flex-wrap: wrap;
	padding: 1rem;
`;

const SectionChild_3_body_1_1 = styled.div<{isMobile?: boolean;bg?: string;}>`
	box-sizing: border-box;
	padding-right: 1rem;
	flex: 2;
`;

const SectionChild_3_body_1_2_header = styled.div<{isMobile?: boolean;}>`
		background: transparent;
`;

const SectionChild_3_body_1_2 = styled.div<{isMobile?: boolean;css?: string;}>`
	${({css}) => css ? css : ''};
	box-sizing: border-box;
	flex: 3;
`;

const SectionChild_3_body_2 = styled.div<{isMobile?: boolean;}>`
	height: 100%;
	display: flex;
	padding: 1rem;
`;

const SectionChild_3_body_2_1_header = styled.div<{isMobile?: boolean;bg?: string}>`
		background: transparent;
`;

const SectionChild_3_body_2_1 = styled.div<{isMobile?: boolean;bg?: string;css?: string;}>`
	${({css}) => css ? css : ''};
	box-sizing: border-box;
	padding-right: 1rem;
	flex: 3;
`;

const SectionChild_3_body_2_2 = styled.div<{isMobile?: boolean;}>`
	box-sizing: border-box;
	flex: 3;
`;


export {
  Section_3,
  SectionChild_3_head,
  SectionChild_3_body,
  SectionChild_3_body_1,
  SectionChild_3_body_1_1,
  SectionChild_3_body_1_2_header,
  SectionChild_3_body_1_2,
  SectionChild_3_body_2,
  SectionChild_3_body_2_1,
  SectionChild_3_body_2_1_header,
  SectionChild_3_body_2_2,
};