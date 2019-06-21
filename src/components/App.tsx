import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { LoadingOverlay } from './Loading';

const Home = lazy(() => import('../pages/Home'));

const App: React.FC = () => {
  return (
    <main>
      <Router>
        <Suspense fallback={<LoadingOverlay />}>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Suspense>
      </Router>
    </main>
  );
}

export default App;
