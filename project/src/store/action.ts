import { createAction } from '@reduxjs/toolkit';
import { ActionType } from '../types/action';
import { Offer, Review } from '../types/types';
import { AuthStatus, AppRoute } from '../const';

export const filterOffersAction = createAction(
  ActionType.FilterOffers,
  (filterOffersType: string) => ({
    payload: {
      filterOffersType,
    },
  })
);

export const sortOffersAction = createAction(
  ActionType.SortOffers,
  (sortOffersType: string) => ({
    payload: {
      sortOffersType,
    },
  })
);

export const loadOfferList = createAction(
  ActionType.LoadOfferList,
  (offerList: Offer[]) => ({
    payload: {
      offerList,
    },
  })
);

export const loadOfferItem = createAction(
  ActionType.LoadOfferItem,
  (offerItem: Offer) => ({
    payload: {
      offerItem,
    },
  })
);

export const loadNearList = createAction(
  ActionType.LoadNearList,
  (nearList: Offer[]) => ({
    payload: {
      nearList,
    },
  })
);

export const loadReviewList = createAction(
  ActionType.LoadReviewList,
  (reviewList: Review[]) => ({
    payload: {
      reviewList,
    },
  })
);

export const loadFavoriteList = createAction(
  ActionType.LoadFavoriteList,
  (favoriteList: Offer[]) => ({
    payload: {
      favoriteList,
    },
  })
);

export const requireAuth = createAction(
  ActionType.RequireAuth,
  (authStatus: AuthStatus) => ({
    payload: authStatus,
  })
);

export const requireLogout = createAction(ActionType.RequireLogout);

export const redirectToRoute = createAction(
  ActionType.RedirectToRoute,
  (url: AppRoute) => ({
    payload: url,
  })
);
