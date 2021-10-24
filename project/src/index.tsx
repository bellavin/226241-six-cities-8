import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {reducer} from './store/reducer';

import App from './components/app/app';
import { offerList } from './mocks/offers';
import { reviews } from './mocks/reviews';

const store = createStore(
  reducer,
  composeWithDevTools(),
);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App offerList={offerList} reviews={reviews} />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
