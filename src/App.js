import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import BuildEnv from './BuildEnv';
import { cards } from './BuildEnvData';
import './App.css';

function App() {
  const build_params = {_title: 'How to build React', _bgcolor: 'azure', _sections: cards};
  return (
    <Router>
      <Switch>
        <Route key={'home'} path='/' exact component={Home} />
        <Route key={'build'} path='/how-to-build' render={() => <BuildEnv {...build_params} />} />
      </Switch>
      {/* footer */}
      <div className={'text-center bg-dark text-white'}>
        react-website-sample
      </div>
    </Router>
  );
}

export default App;
