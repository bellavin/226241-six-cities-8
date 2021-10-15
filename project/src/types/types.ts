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

export type CityPlaceDetailDesc = {
  bedrooms: number,
  maxAdults: number,
  includes: string[],
  title: string,
  user: User,
  text: string[],
};

export type CityPlace = {
  id: string,
  img: string,
  gallery: string[],
  price: number,
  stars: number,
  name: string,
  type: string,
  isFeature: boolean,
  isPremium: boolean,
  detail: ItemDetail,
};

export type City = {
  id: string,
  name: string,
  places: CityPlace[],
};


export type ItemDetail = {
  bedrooms: number,
  maxAdults: number,
  includes: string[],
  user: User,
  description: string,
}

export type Item = {
  id: string,
  city: string,
  img: string,
  gallery: string[],
  price: number,
  stars: number,
  name: string,
  type: string,
  isFeature: boolean,
  isPremium: boolean,
  detail: ItemDetail,
}
