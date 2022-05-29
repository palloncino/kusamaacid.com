import { lazy, Suspense } from 'react';
import { Header, Navbar } from '../../components';
import { Spinner } from '../../components/Spinner';
import { IComponentFrame } from '../../interfaces';

const ComponentFrame = ({view}: IComponentFrame) => {

  const getViewPath = () => {
    switch (view) {
      case 'home':
        return 'Home';

      case 'roadmap':
        return 'Roadmap';

      case 'pills':
        return 'Pills';

      case 'faqs':
        return 'Faqs';

      case 'contacts':
        return 'Contacts';
    
      default:
        return 'Home';
    }
  };

  const Component = lazy(() => import(`../${getViewPath()}`));

  return (
    <div className="layout-wrapper">
      <Header />
      <Navbar />
      <div className="page-content-wrapper">
        <Suspense fallback={Spinner}>
          <Component />
        </Suspense>
      </div>
    </div>
  );
};

export default ComponentFrame;