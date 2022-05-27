import { FC, lazy } from 'react';

const lazyComponent = (name: string) => {
  let Component: FC;
  switch (name) {
    case 'home':
      Component = lazy(() => import('../pages/Home'));
      return Component;

    case 'roadmap':
      Component = lazy(() => import('../pages/Roadmap'));
      return Component;

    default:
      Component = lazy(() => import('../pages/Home'));
      return Component;
  }
};

export default lazyComponent;