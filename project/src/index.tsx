import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { reducer } from './store/reducer';
import { requireAuth } from './store/action';
import { checkAuthAction } from './store/api-actions';
import { redirect } from './store/middlewares/redirect';
import { ThunkAppDispatch } from './types/action';
import { createAPI } from './services/api';
import { AuthStatus } from './const';
import App from './components/app/app';

const api = createAPI(() => store.dispatch(requireAuth(AuthStatus.NoAuth)));

const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});

(store.dispatch as ThunkAppDispatch)(checkAuthAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
