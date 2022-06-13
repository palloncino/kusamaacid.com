import './Section.css';
import { IContainerProps } from '../../interfaces';
import { useWhatDevice } from '../../hooks/useWhatDevice';
import './Section.css';
import { useEffect, useState } from 'react';

export const Section = ({ children, className }: IContainerProps) => {

  const { isMobile } = useWhatDevice();

  useEffect(() => {
    const nodeList = document.querySelectorAll('.section-child__first-row');
    const childs = Array.from(nodeList);
    const num = childs.reduce((acc: Element, curr: Element): Element => acc.clientHeight > curr.clientHeight ? acc : curr).clientHeight;
    setChildrenHeight(Number(num));
  }, []);

  const [childrenHeight, setChildrenHeight] = useState(0);

  return (
    <>
      <div className={`section-wrapper ${className}`} >
        <div className="section-container" style={{ height: childrenHeight }}>
          {children}
        </div>
      </div>
    </>
  );
};
