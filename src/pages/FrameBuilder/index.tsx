import { lazy, Suspense } from 'react';
import { Container, Header, Navbar } from '../../components';
import { Spinner } from '../../components/Spinner';
import { IComponentFrame } from '../../interfaces';
import { useWhatDevice } from '../../hooks/useWhatDevice';

import './Layout.css';
import { CustomSection } from '../../style';

const ComponentFrame = ({ view }: IComponentFrame) => {

  const { device } = useWhatDevice();

  const getViewPath = () => {
    switch (view) {
      case 'home':
        return 'Home';

      case 'pills':
        return 'Pills';

      default:
        return 'Home';
    }
  };

  const Component = lazy(() => import(`../${getViewPath()}`));

  return (
    <div className={`${device} layout-wrapper`}>
      <CustomSection width="100%" mb={'0rem'}>
        <CustomSection width="100%" mb={'1rem'}>
          <Header />
        </CustomSection>
        <CustomSection width="100%" mb={'4rem'}>
          <Navbar />
        </CustomSection>
      </CustomSection>
      <div className="page-content-wrapper">
        <Suspense fallback={<Spinner />}>
          <Component />
        </Suspense>
      </div>
    </div>
  );
};

export default ComponentFrame;