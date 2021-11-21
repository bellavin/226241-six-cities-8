import { AuthStatus } from '../const';

export type User = {
  img: string,
  name: string,
  isPro: boolean,
};

export type Review = {
  id: string,
  stars: number,
  text: string,
  date: string | number,
  user: User,
};

export type City = {
  name: string;
  lat: number;
  lng: number;
  zoom: number;
};

export type OfferDetail = {
  bedrooms: number,
  maxAdults: number,
  includes: string[],
  user: User,
  description: string,
}

export type Offer = {
  id: string,
  city: City,
  location: {
    lat: number;
    lng: number;
    zoom: number;
  },
  img: string,
  gallery: string[],
  price: number,
  stars: number,
  name: string,
  type: string,
  isFeature: boolean,
  isPremium: boolean,
  detail: OfferDetail,
};

export type AuthData = {
  login: string;
  password: string;
};

export type PostReview = {
  comment: string;
  rating: number;
}

export type State = {
  authStatus: AuthStatus,
  isDataLoaded: boolean,
  reviewMessage: string,
  reviewRating: number,
  reviewFormIsBlocked: boolean,
  sortOffersType: string,
  filterOffersType: string,
  offerItem: Offer | null,
  offerList: Offer[] | [],
  nearList: Offer[] | [],
  reviewList: Review[] | [],
  favoriteList: Offer[] | [],
  user: User,
};
