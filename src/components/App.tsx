import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import { makeDepthDiv } from '../helpers/scrollBox';

makeDepthDiv([], 0, 1);

const App: React.FC = () => {
  return (
    <main>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </main>
  );
}

export default App;
