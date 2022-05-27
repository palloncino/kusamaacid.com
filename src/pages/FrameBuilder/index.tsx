import { lazy, Suspense } from 'react';
import { Header } from '../../components';

interface IComponentFrame {
  view: 'home' | 'roadmap' | 'pills' | 'faqs' | 'contacts';
}

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
      <div className="page-content-wrapper">
        <Suspense fallback={'TODO: error getting the selected view'}>
          <Component />
        </Suspense>
      </div>
    </div>
  );
};

export default ComponentFrame;