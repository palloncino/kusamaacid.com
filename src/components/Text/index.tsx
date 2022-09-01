import { ReactNode } from 'react';
import { ITextProps } from '../../interfaces';
import './Text.css';

enum EnumTextType {
  h1_xLarge = 'h1_xLarge',
  h1_large = 'h1_large',
  h1 = 'h1',
  h3 = 'h3',
  h4 = 'h4',
  large = 'large',
  regular = 'regular',
  small = 'small',
  tooltip = 'tooltip',
}

export const Text = ({ children, textType, customStyle }: ITextProps) => {

  function getOutput(type: string) {

    let output: ReactNode;

    switch (type) {

      case EnumTextType.h1_xLarge:
        output = <h1 style={{ margin: 0, fontSize: '5rem', lineHeight: '5rem', ...customStyle}} className={`text text-${type}`}>{children}</h1>;
        break;
      
      case EnumTextType.h1_large:
        output = <h1 style={{ margin: 0, fontSize: '3.5rem', lineHeight: '3.5rem', ...customStyle}} className={`text text-${type}`}>{children}</h1>;
        break;

      case EnumTextType.h1:
        output = <h1 style={{ margin: 0, ...customStyle}} className={`text text-${type}`}>{children}</h1>;
        break;

      case EnumTextType.h3:
        output = <h3 style={{ margin: 0, ...customStyle}} className={`text text-${type}`}>{children}</h3>;
        break;

      case EnumTextType.h4:
        output = <h4 style={{ margin: 0, ...customStyle}} className={`text text-${type}`}>{children}</h4>;
        break;

      case EnumTextType.large:
        output = <p style={{ margin: 0, ...customStyle}} className={`text text-${type}`}>{children}</p>;
        break;

      case EnumTextType.regular:
        output = <p style={{ margin: 0, ...customStyle}} className={`text text-${type}`}>{children}</p>;
        break;

      case EnumTextType.small:
        output = <p style={{ margin: 0, ...customStyle}} className={`text text-${type}`}>{children}</p>;
        break;

      case EnumTextType.tooltip:
        output = <p style={{ margin: 0, ...customStyle}} className={`text text-${type}`}>{children}</p>;
        break;

      default:
        output = <p style={{ margin: 0, ...customStyle}} className={'text-regular'}>{children}</p>;
        break;
    }

    return output;

  }

  return <>{getOutput(textType as string)}</>;
};