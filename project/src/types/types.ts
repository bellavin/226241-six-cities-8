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

export type Point = {
  title: string;
  lat: number;
  lng: number;
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
  detail: ItemDetail,
}
