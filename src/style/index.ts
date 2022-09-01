import { boxSizing } from '@mui/system';
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
	padding: ${({p}) => p};
	padding-bottom: ${({pb}) => pb};
	padding-top: ${({pt}) => pt};
	padding-left: ${({pl}) => pl};
	padding-right: ${({pr}) => pr};
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
		cursor: pointer;

		&:hover {
			transform: scale(1.05);
			box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
		}
	`};
`;



export {
  CustomSection,
  PageWrapper,
  BackgroundImage
};

