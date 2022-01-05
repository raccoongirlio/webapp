import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './NotFound';
import HomePage from './pages/Home';
import TokenPage from './pages/Token';
import MysteryPage from './pages/Mystery';


//---------------------------------------------------------------------------------//
function App() {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/mystery" exact component={MysteryPage} />
        <Route path="/token" exact component={TokenPage} />
        <noindex><Route component={NotFound} /></noindex>
      </Switch>
    </Router>
  );
}
//----------------------------------------------------------------------------------//
export default App;
