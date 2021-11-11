import { AuthStatus, CITY_LIST, SORT_TYPES } from '../const';
import { ActionType, Actions } from '../types/action';
import { State } from '../types/types';

const initialState: State = {
  authStatus: AuthStatus.Unknown,
  isDataLoaded: false,
  filterOffersType: CITY_LIST[0],
  sortOffersType: SORT_TYPES[0],
  offerList: [],
  nearList: [],
  reviewList: [],
  user: {
    login: '',
    password: '',
  },
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.FilterOffers:
      return {
        ...state,
        filterOffersType: action.payload.filterOffersType,
      };
    case ActionType.SortOffers:
      return {
        ...state,
        sortOffersType: action.payload.sortOffersType,
      };
    case ActionType.LoadOfferList:
      return {
        ...state,
        offerList: action.payload.offerList,
      };
    case ActionType.LoadNearList:
      return {
        ...state,
        nearList: action.payload.nearList,
      };
    case ActionType.LoadReviewList:
      return {
        ...state,
        reviewList: action.payload.reviewList,
      };
    case ActionType.RequireAuth:
      return {
        ...state,
        authStatus: action.payload,
        isDataLoaded: true,
      };
    default:
      return state;
  }
};

export {reducer};
