import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import ComponentFrame from './pages/FrameBuilder';

const App = () => (

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<ComponentFrame view="home" />} />
      <Route path="/roadmap" element={<ComponentFrame view="roadmap" />} />
      <Route path="/pills" element={<ComponentFrame view="pills" />} />
      <Route path="/faqs" element={<ComponentFrame view="faqs" />} />
      <Route path="/contacts" element={<ComponentFrame view="contacts" />} />
    </Routes>
  </BrowserRouter>
);

export default App;