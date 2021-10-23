import { ActionType, Actions } from '../types/action';
import { State } from '../types/types';
import { offers } from '../mocks/offers';
import { Cities } from '../const';

const ACTIVE_CITY = Cities[0].name;

const initialState = {
  activeCity: ACTIVE_CITY,
  offers: offers.filter(item => item.city.name === ACTIVE_CITY),
};

export const checkCity = () => ({
  type: ActionType.CheckCity,
} as const);

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.CheckCity:
      return {
        ...state,
        activeCity: action.payload,
        offers: offers.filter(item => item.city.name === action.payload),
      }
    default:
      return state;
  }
};

export {reducer};
