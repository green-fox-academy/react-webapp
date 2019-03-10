import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HelloWorldRedux from '../Containers/HelloWorldRedux/HelloWorldRedux';
import HelloWorldSaga from '../Containers/HelloWorldSaga/HelloWorldSaga';
import '../stylesheets/App.css';

const App = () => (
  <Switch>
    <Route exact path="/" component={HelloWorldRedux} />
    <Route exact path="/saga" component={HelloWorldSaga} />
  </Switch>
);

export default App;
