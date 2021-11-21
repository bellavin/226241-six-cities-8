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


export const updateOfferList = (offerId: string, isFeature: boolean, offerList: Offer[]) => {
  const newOfferId = offerList.findIndex((item) => item.id === offerId);
  const newOfferItem = [...offerList][newOfferId];
  const totalItem = {
    ...newOfferItem,
    isFeature: isFeature,
  };
  return [...offerList.slice(0, newOfferId), totalItem, ...offerList.slice(newOfferId + 1)];
};

export const capitalizeFirstLetter = (string: string) => string.charAt(0).toUpperCase() + string.slice(1);
