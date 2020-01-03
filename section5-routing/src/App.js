import React from 'react';
import { Route, Link } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';

const HomePage2 = props => {
  console.log(props);
  return (
  <div>
    <Link to='/topics'>Topics</Link>
    <h1>HATS PAGE</h1>
  </div>
);
  };

const HatsPage = props => {
  console.log(props);
  return (
  <div>
    <Link to='/topics'>Topics</Link>
    <h1>HATS PAGE</h1>
  </div>
);
  };

  const HatsDetail = props => {
    console.log(props);
    return (
    <div>
      <Link to='/topics'>Topics</Link>
      <h1>HATS DETAILS</h1>
    </div>
  );
    };

function App() {
  return(
  <div>
    <Route exact path='/' component={HomePage2} />
    <Route exact path='/hats' component={HatsPage} />
    <Route path='/hats/:id' component={HatsDetail} />
  </div>
  );
}

export default App;
