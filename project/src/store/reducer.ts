import { ActionType, Actions } from '../types/action';
import { State } from '../types/types';
import { offerList } from '../mocks/offers';

const CITY_LIST = [...new Set(offerList.map((item) => item.city.name))];
const ACTIVE_CITY = CITY_LIST[0];
const INITIAL_OFFERS = offerList.filter((item) => item.city.name === ACTIVE_CITY);

const initialState = {
  activeCity: ACTIVE_CITY,
  cityList: CITY_LIST,
  offerList: INITIAL_OFFERS,
};

export const setCity = () => ({
  type: ActionType.SetCity,
} as const);
export const filterOffers = () => ({
  type: ActionType.FilterOffers,
} as const);

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.SetCity:
      return {
        ...state,
        activeCity: action.payload,
      };
    case ActionType.FilterOffers:
      return {
        ...state,
        offerList: offerList.filter((item) => item.city.name === action.payload),
      };
    default:
      return state;
  }
};

export {reducer};
