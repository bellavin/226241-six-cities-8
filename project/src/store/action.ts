import { ActionType } from '../types/action';
import { Offer, Review } from '../types/types';
import { AuthStatus, AppRoute } from '../const';


export const sortOffersAction = (sortOffersType: string) => ({
  type: ActionType.SortOffers,
  payload: {
    sortOffersType,
  },
} as const);

export const filterOffersAction = (filterOffersType: string) => ({
  type: ActionType.FilterOffers,
  payload: {
    filterOffersType,
  },
} as const);

export const loadOfferList = (offerList: Offer[]) => ({
  type: ActionType.LoadOfferList,
  payload: {
    offerList,
  },
} as const);

export const loadNearList = (nearList: Offer[]) => ({
  type: ActionType.LoadNearList,
  payload: {
    nearList,
  },
} as const);

export const loadReviewList = (reviewList: Review[]) => ({
  type: ActionType.LoadReviewList,
  payload: {
    reviewList,
  },
} as const);

export const requireAuth = (authStatus: AuthStatus) => ({
  type: ActionType.RequireAuth,
  payload: authStatus,
} as const);

export const requireLogout = () => ({
  type: ActionType.RequireLogout,
} as const);

export const redirectToRoute = (url: AppRoute) => ({
  type: ActionType.RedirectToRoute,
  payload: url,
} as const);
