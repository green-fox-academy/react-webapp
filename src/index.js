import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.css';
import App from './Components/App';
import { BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import configureStore from '../src/store/configureStore';

const store = configureStore();

ReactDOM.render((
  <Provider store={store}>
    <Router >
      <App />
    </Router >
  </Provider>
), document.getElementById('root'));

serviceWorker.unregister();
