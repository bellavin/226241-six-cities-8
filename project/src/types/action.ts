import {
  setCity,
  filterOffers
} from '../store/action';

export enum ActionType {
  SetCity = 'City',
  FilterOffers = 'FilterOffers'
}

export type Actions =
  | ReturnType<typeof setCity>
  | ReturnType<typeof filterOffers>;
