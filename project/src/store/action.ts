import {ActionType} from '../types/action';

export const setCity = (city: string | undefined) => ({
  type: ActionType.SetCity,
  payload: city,
} as const);

export const filterOffers = (city: string | undefined) => ({
  type: ActionType.FilterOffers,
  payload: city,
} as const);
