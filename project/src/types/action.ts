import {
  checkCity
} from '../store/action';

export enum ActionType {
  CheckCity = 'City',
}

export type Actions =
  | ReturnType<typeof checkCity>;
