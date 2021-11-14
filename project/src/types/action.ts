import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AxiosInstance } from 'axios';
import { State } from './types';
import {
  sortOffersAction,
  filterOffersAction,
  loadOfferList,
  loadOfferItem,
  loadNearList,
  loadReviewList,
  loadFavoriteList,
  redirectToRoute,
  requireAuth,
  requireLogout
} from '../store/action';

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

export type Actions =
  | ReturnType<typeof sortOffersAction>
  | ReturnType<typeof filterOffersAction>
  | ReturnType<typeof loadOfferList>
  | ReturnType<typeof loadOfferItem>
  | ReturnType<typeof loadNearList>
  | ReturnType<typeof loadReviewList>
  | ReturnType<typeof loadFavoriteList>
  | ReturnType<typeof requireAuth>
  | ReturnType<typeof requireLogout>
  | ReturnType<typeof redirectToRoute>;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;
export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;
