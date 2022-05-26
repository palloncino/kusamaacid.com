import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import pageBuilder from './pages/PageBuilder';
// import Home from './pages/Home';
// import Roadmap from './pages/Roadmap';
// import { Pills } from './pages/Pills';
// import { Faq } from './pages/Faq';
// import { Contacts } from './pages/Contacts';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={() => pageBuilder('home')} />
      {/* <Route path="/roadmap" exact component={Roadmap} /> */}
      {/* TODO: complete pages */}
      {/* <Route path="/pills" exact component={Pills} /> */}
      {/* <Route path="/faqs" exact component={Faqs} /> */}
      {/* <Route path="/contacts" exact component={Contacts} /> */}
    </Switch>
  </BrowserRouter>
);

export default App;