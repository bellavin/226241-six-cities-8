import {createReducer} from '@reduxjs/toolkit';
import { AuthStatus, CITY_LIST, SORT_TYPES } from '../const';
import {
  filterOffersAction,
  sortOffersAction,
  loadOfferList,
  loadOfferItem,
  loadNearList,
  loadReviewList,
  loadFavoriteList,
  requireAuth
} from './action';
import { State } from '../types/types';

const initialState: State = {
  authStatus: AuthStatus.Unknown,
  isDataLoaded: false,
  filterOffersType: CITY_LIST[0],
  sortOffersType: SORT_TYPES[0],
  offerList: [],
  offerItem: null,
  nearList: [],
  reviewList: [],
  favoriteList: [],
  user: {
    login: '',
    password: '',
  },
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(filterOffersAction, (state, action) => {
      const {filterOffersType} = action.payload;
      state.filterOffersType = filterOffersType;
    })
    .addCase(sortOffersAction, (state, action) => {
      const {sortOffersType} = action.payload;
      state.sortOffersType = sortOffersType;
    })
    .addCase(loadOfferList, (state, action) => {
      const {offerList} = action.payload;
      state.offerList = offerList;
    })
    .addCase(loadOfferItem, (state, action) => {
      const {offerItem} = action.payload;
      state.offerItem = offerItem;
    })
    .addCase(loadNearList, (state, action) => {
      const {nearList} = action.payload;
      state.nearList = nearList;
    })
    .addCase(loadReviewList, (state, action) => {
      const {reviewList} = action.payload;
      state.reviewList = reviewList;
    })
    .addCase(loadFavoriteList, (state, action) => {
      const {favoriteList} = action.payload;
      state.favoriteList = favoriteList;
    })
    .addCase(requireAuth, (state, action) => {
      state.authStatus = action.payload;
      state.isDataLoaded = true;
    });
});

export {reducer};
