import { Offer } from './types/types';

export const getSortOffers = (data: Offer[], type: string) => {
  switch (type) {
    case 'Price: low to high':
      return data.slice().sort((a: Offer, b: Offer) => a.price - b.price);
    case 'Price: high to low':
      return data.slice().sort((a: Offer, b: Offer) => b.price - a.price);
    case 'Top rated first':
      return data.slice().sort((a: Offer, b: Offer) => b.stars - a.stars);
    default:
      return data;
  }
};
