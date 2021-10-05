export type User = {
  img: string,
  name: string,
  isPro?: boolean
};

export type Review = {
  id: number,
  stars: number,
  text: string,
  date: string | number,
  user: User,
};

export type CityPlaceDetailDesc = {
  bedrooms: number,
  maxAdults: number,
  includes: string[],
  title: string,
  user: User,
  text: string[],
  reviews: Review[],
};

export type CityPlaceDetail = {
  id: number,
  img: string[],
  price: number,
  stars: number,
  name: string,
  type: string,
  isFeature?: boolean,
  isPremium?: boolean,
  desc: CityPlaceDetailDesc,
  near: CityPlace[],
};

export type CityPlace = {
  id: number,
  img: string,
  price: number,
  stars: number,
  name: string,
  type: string,
  isFeature?: boolean,
  isPremium?: boolean,
};

export type City = {
  id: number,
  name: string,
  places: CityPlace[],
};
