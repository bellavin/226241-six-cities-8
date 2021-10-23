import {ActionType} from '../types/action';

export const checkCity = (city: string | undefined) => ({
  type: ActionType.CheckCity,
  payload: city
} as const);
