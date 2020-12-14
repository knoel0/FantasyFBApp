import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Players from './pages/players/players';
import Landing from './pages/landing/landing';

const STYLE = {
  backgroundColor: '#125740',
  height: '100%',
  gridArea: '2 / 2 / 7 / 7'
}

export default function App() {
  
  return (
    <div style={STYLE}>
      <Switch>
        <Route exact path = '/' component={Landing} />
        <Route exact path = '/Players' component={Players} />
      </Switch>
    </div>
  );  
}