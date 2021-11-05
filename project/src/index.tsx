import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer } from './store/reducer';
import { fetchOfferListAction } from './store/api-actions';
import { ThunkAppDispatch } from './types/action';
import {createAPI} from './services/api';
import App from './components/app/app';

import { offerList } from './mocks/offers';
import { reviews } from './mocks/reviews';

const api = createAPI();

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
  ),
);

(store.dispatch as ThunkAppDispatch)(fetchOfferListAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App offerList={offerList} reviews={reviews} />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
