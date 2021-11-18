import { Action } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AxiosInstance } from 'axios';
import { State } from './types';

export enum ActionType {
  SortOffers = 'main/sortOffers',
  FilterOffers = 'main/filterOffers',
  LoadOfferList = 'main/loadOfferList',
  LoadOfferItem = 'detail/loadOfferItem',
  LoadNearList = 'detail/loadNearList',
  LoadReviewList = 'detail/loadReviewList',
  LoadFavoriteList = 'favorite/loadFavoriteList',
  RequireAuth = 'user/requireAuth',
  RequireLogout = 'user/RequireLogout',
  RedirectToRoute = 'redirectToRoute'
}

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Action>;
export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Action>;
