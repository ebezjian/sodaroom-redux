import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';

import {Provider} from 'react-redux';
import rootReducer from './reducers/index';

const store = createStore(rootReducer);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
