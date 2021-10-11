export type User = {
  img :string,
  name :string,
  isPro : boolean,
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
};

export type CityPlaceDetail = {
  id: number,
  img: string,
  gallery: string[],
  price: number,
  stars: number,
  name: string,
  type: string,
  isFeature?: boolean,
  isPremium?: boolean,
  desc: CityPlaceDetailDesc,
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


export type ItemDetail = {
  bedrooms :number,
  maxAdults :number,
  includes :string[],
  user: User,
  description :string,
}

export type Item = {
  id :number,
  city :string,
  img :string,
  gallery :string[],
  price :number,
  stars :number,
  name :string,
  type :string,
  isFeature :boolean,
  isPremium :boolean,
  detail :ItemDetail,
}
