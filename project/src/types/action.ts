import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AxiosInstance } from 'axios';
import { State } from './types';
import { sortOffersAction, filterOffersAction, loadOfferList, loadNearList, loadReviewList } from '../store/action';

export enum ActionType {
  SortOffers = 'sortOffers',
  FilterOffers = 'filterOffers',
  LoadOfferList = 'LoadOfferList',
  LoadNearList = 'LoadNearList',
  LoadReviewList = 'LoadReviewList',
}

export type Actions =
  | ReturnType<typeof sortOffersAction>
  | ReturnType<typeof filterOffersAction>
  | ReturnType<typeof loadOfferList>
  | ReturnType<typeof loadNearList>
  | ReturnType<typeof loadReviewList>;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;
export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;
