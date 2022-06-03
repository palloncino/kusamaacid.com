import { lazy, Suspense } from 'react';
import { Container, Header, Navbar } from '../../components';
import { Spinner } from '../../components/Spinner';
import { IComponentFrame } from '../../interfaces';
import { useWhatDevice } from '../../hooks/useWhatDevice';

import './Layout.css';

const ComponentFrame = ({ view }: IComponentFrame) => {

  const { device } = useWhatDevice();

  const getViewPath = () => {
    switch (view) {
      case 'home':
        return 'Home';

      case 'roadmap':
        return 'Roadmap';

      case 'pills':
        return 'Pills';

      default:
        return 'Home';
    }
  };

  const Component = lazy(() => import(`../${getViewPath()}`));

  return (
    <div className={`${device} layout-wrapper`}>
      <Navbar />
      <Header />
      <div className="page-content-wrapper">
        <Container>
          <Suspense fallback={<Spinner />}>
            <Component />
          </Suspense>
        </Container>
      </div>
    </div>
  );
};

export default ComponentFrame;