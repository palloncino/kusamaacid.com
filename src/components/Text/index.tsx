import { ReactNode, MouseEvent } from 'react';
import './Text.css';

enum EnumTextType {
  h1 = 'h1',
  h3 = 'h3',
  h4 = 'h4',
  regular = 'regular',
  small = 'small',
  tooltip = 'tooltip',
  link = 'link'
}
interface ITextProps {
  children?: ReactNode;
  textType?: string;
  onClick?: (event?: MouseEvent<HTMLElement>) => void;
}

export const Text = ({ children, textType, onClick }: ITextProps) => {

  function getOutput(type: string) {

    let output: ReactNode;

    switch (type) {
      case EnumTextType.h1:
        output = <h1 className={`text text-${type}`}>{children}</h1>;
        break;

      case EnumTextType.h3:
        output = <h3 className={`text text-${type}`}>{children}</h3>;
        break;

      case EnumTextType.h4:
        output = <h4 className={`text text-${type}`}>{children}</h4>;
        break;

      case EnumTextType.regular:
        output = <p className={`text text-${type}`}>{children}</p>;
        break;

      case EnumTextType.small:
        output = <p className={`text text-${type}`}>{children}</p>;
        break;

      case EnumTextType.tooltip:
        output = <p className={`text text-${type}`}>{children}</p>;
        break;

      case EnumTextType.link:
        output = (
          <div className={`${type}-container`} onClick={onClick}>
            <span className={`text text-${type}`}>
              {children}
            </span>
          </div>
        );
        break;

      default:
        output = <p className={'text-regular'}>{children}</p>;
        break;
    }

    return output;

  }

  return <>{getOutput(textType as string)}</>;
};