import { ActionType } from '../types/action';
import { Offer, Review } from '../types/types';

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
