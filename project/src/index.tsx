import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer } from './store/reducer';
import { requireAuth } from './store/action';
import { fetchOfferListAction, checkAuthAction } from './store/api-actions';
import { redirect } from './store/middlewares/redirect';
import { ThunkAppDispatch } from './types/action';
import { createAPI } from './services/api';
import { AuthStatus } from './const';
import App from './components/app/app';

import { offerList } from './mocks/offers';

const api = createAPI(() => store.dispatch(requireAuth(AuthStatus.NoAuth)));

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
    applyMiddleware(redirect),
  ),
);

(store.dispatch as ThunkAppDispatch)(checkAuthAction());
(store.dispatch as ThunkAppDispatch)(fetchOfferListAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App offerList={offerList} />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
