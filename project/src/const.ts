export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Property = '/offer/:id'
}

export enum AuthStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const Cities = [
  {
    name: 'Paris',
    lat: 48.85661,
    lng: 2.351499,
  },
  {
    name: 'Cologne',
    lat: 50.938361,
    lng: 6.959974,
  },
  {
    name: 'Brussels',
    lat: 53.550341,
    lng: 10.000654,
  },
  {
    name: 'Amsterdam',
    lat: 52.37454,
    lng: 4.897976,
  },
  {
    name: 'Hamburg',
    lat: 53.550341,
    lng: 10.000654,
  },
  {
    name: 'Dusseldorf',
    lat: 51.225402,
    lng: 6.776314,
  },
]

export const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';
