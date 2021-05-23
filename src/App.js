import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import './App.css';

function App() {
  return (
    <Router>
        <Route key={'home'} path='/' exact component={Home} />
      {/* footer */}
      <div className={'text-center bg-dark text-white'}>
        react-website-sample
      </div>
    </Router>
  );
}

export default App;
