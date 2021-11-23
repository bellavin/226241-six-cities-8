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

export const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const USER_DATA = 'user-data';
export const getUserData = (): string => {
  const data = localStorage.getItem(USER_DATA);
  return data ?? '';
};
export const setUserData = (data: string): void => {
  localStorage.setItem(USER_DATA, data);
};
export const removeUserData = (): void => {
  localStorage.removeItem(USER_DATA);
};

export const validatePass = (text: string) => {
  const letters = /[A-Za-z]/g;
  const hasLetters = text.match(letters);

  const numbers = /[0-9]/g;
  const hasNumbers = text.match(numbers);

  const whiteSpace = /[\s]/g;
  const hasNoWhiteSpace = !text.match(whiteSpace);

  const isLong = text.length >= 2;

  return hasLetters && hasNumbers && hasNoWhiteSpace && isLong;
};

export const validateMail = (email: string) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};
