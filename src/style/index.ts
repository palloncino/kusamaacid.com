import styled from 'styled-components';

const CustomSection = styled.div<{
	css?: string;
	width?: string,
	m?: string,
	mb?: string,
	mt?: string,
	ml?: string,
	mr?: string,
	p?: string,
	pb?: string,
	pt?: string,
	pl?: string,
	pr?: string,
}>`
	margin: ${({m}) => m};
	margin-bottom: ${({mb}) => mb};
	margin-top: ${({mt}) => mt};
	margin-left: ${({ml}) => ml};
	margin-right: ${({mr}) => mr};
	margin: ${({p}) => p};
	margin-bottom: ${({pb}) => pb};
	margin-top: ${({pt}) => pt};
	margin-left: ${({pl}) => pl};
	margin-right: ${({pr}) => pr};
	${({width}) => width ? `width: ${width};` : null}
	${({css}) => css}
`;

const PageWrapper = styled.div<{isMobile?: boolean;}>`
	max-width: 1024px;
`;

const BackgroundImage = styled.div<{
		isMobile?: boolean; 
		height?: string; 
		width?: string; 
		bg?: string; 
		transform?: string; 
		boxShadow?: string; 
		css?: string;
	}>`
	${({bg, height, width, transform, boxShadow, css}) => `
		box-sizing: border-box;
		${css ? css : ''};
		${bg ? bg : ''};
		${height ? height : ''};
		${width ? width : ''}};
		${transform ? transform : ''}
		${boxShadow ? boxShadow : ''}
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		&:hover {
			box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
		}
	`};
`;

// SECTION 1

const Section_1 = styled.div<{isMobile?: boolean;}>`
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
`;

const SectionChild_1_head = styled.div<{isMobile?: boolean;}>`
	height: 100px;
`;

const SectionChild_1_body = styled.div<{isMobile?: boolean;bg?: string;}>`
	background: ${({bg}) => bg ? `url(${bg})` : '#c4c4c4'};
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	height: 100%;
`;

const SectionChild_1_body_1 = styled.div<{isMobile?: boolean;}>`
	height: 100%;
	display: flex;
	flex-wrap: wrap;
	padding: 1rem;
`;

const SectionChild_1_body_1_1 = styled.div<{isMobile?: boolean;bg?: string;}>`
	box-sizing: border-box;
	padding-right: 1rem;
	flex: 2;
`;

const SectionChild_1_body_1_2_header = styled.div<{isMobile?: boolean;}>`
		background: #00000020;
`;

const SectionChild_1_body_1_2 = styled.div<{isMobile?: boolean;css?: string;}>`
	${({css}) => css ? css : ''};
	box-sizing: border-box;
	flex: 3;
`;

const SectionChild_1_body_2 = styled.div<{isMobile?: boolean;}>`
	height: 100%;
	display: flex;
	padding: 1rem;
`;

const SectionChild_1_body_2_1_header = styled.div<{isMobile?: boolean;bg?: string}>`
		background: #00000020;
`;

const SectionChild_1_body_2_1 = styled.div<{isMobile?: boolean;bg?: string;css?: string;}>`
	${({css}) => css ? css : ''};
	box-sizing: border-box;
	padding-right: 1rem;
	flex: 3;
`;

const SectionChild_1_body_2_2 = styled.div<{isMobile?: boolean;}>`
	box-sizing: border-box;
	flex: 3;
`;



export {
  CustomSection,
  PageWrapper,
  BackgroundImage,
  //   SECTION 1
  Section_1,
  SectionChild_1_head,
  SectionChild_1_body,
  SectionChild_1_body_1,
  SectionChild_1_body_1_1,
  SectionChild_1_body_1_2,
  SectionChild_1_body_1_2_header,
  SectionChild_1_body_2,
  SectionChild_1_body_2_1,
  SectionChild_1_body_2_1_header,
  SectionChild_1_body_2_2,
};

