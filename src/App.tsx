import {
  BrowserRouter, Route, Routes
} from 'react-router-dom';
import { ViewType } from './interfaces';
import ComponentFrame from './pages/FrameBuilder';
import json from './settings.json';

const { routes } = json;

const App = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({name, path}) => 
          <Route 
            key={name} 
            path={path} 
            element={
              <ComponentFrame 
                view={name as ViewType} />
            } />
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default App;