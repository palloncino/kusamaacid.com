import { CSSProperties, ReactNode } from 'react';
import './Text.css';

enum EnumTextType {
  h1 = 'h1',
  h3 = 'h3',
  h4 = 'h4',
  regular = 'regular',
  small = 'small',
  tooltip = 'tooltip',
}
interface ITextProps {
  children?: ReactNode;
  textType?: string;
  customStyle?: CSSProperties;
}

export const Text = ({ children, textType, customStyle }: ITextProps) => {

  function getOutput(type: string) {

    let output: ReactNode;

    switch (type) {
      case EnumTextType.h1:
        output = <h1 style={customStyle} className={`text text-${type}`}>{children}</h1>;
        break;

      case EnumTextType.h3:
        output = <h3 style={customStyle} className={`text text-${type}`}>{children}</h3>;
        break;

      case EnumTextType.h4:
        output = <h4 style={customStyle} className={`text text-${type}`}>{children}</h4>;
        break;

      case EnumTextType.regular:
        output = <p style={customStyle} className={`text text-${type}`}>{children}</p>;
        break;

      case EnumTextType.small:
        output = <p style={customStyle} className={`text text-${type}`}>{children}</p>;
        break;

      case EnumTextType.tooltip:
        output = <p style={customStyle} className={`text text-${type}`}>{children}</p>;
        break;

      default:
        output = <p style={customStyle} className={'text-regular'}>{children}</p>;
        break;
    }

    return output;

  }

  return <>{getOutput(textType as string)}</>;
};