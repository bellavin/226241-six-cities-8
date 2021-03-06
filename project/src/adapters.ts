import { Offer, Review, User } from './types/types';
import { capitalizeFirstLetter } from './utils';

const getOffer = (item: any) => {
  const offer = {
    id: item.id.toString() || '',
    city: {
      name: item.city.name || '',
      lat: item.city.location.latitude,
      lng: item.city.location.longitude,
      zoom: item.city.location.zoom,
    },
    location: {
      lat: item.location.latitude,
      lng: item.location.longitude,
      zoom: item.location.zoom,
    },
    img: item.preview_image || '',
    gallery: item.images || [],
    price: item.price,
    stars: item.rating,
    name: item.title || '',
    type: capitalizeFirstLetter(item.type) || '',
    isFeature: item.is_favorite || false,
    isPremium: item.is_premium || false,
    detail: {
      bedrooms: item.bedrooms,
      maxAdults: item.max_adults,
      includes: item.goods,
      user: {
        img: item.host.avatar_url || '',
        name: item.host.name || '',
        isPro: item.host.is_pro || false,
      },
      description: item.description || '',
    },
  };

  return offer;
};

export const adaptOfferItem = (item: any): Offer => getOffer(item);

export const adaptOfferList = (offerList: any[]): Offer[] => offerList.map((item) => getOffer(item));

export const adaptReview = (reviewList: any[]): Review[] => reviewList.map((item) => {
  const review = {
    id: item.id,
    stars: item.rating,
    text: item.comment,
    date: item.date,
    user: {
      img: item.user.avatar_url,
      name: item.user.name,
      isPro: item.user.is_pro,
    },
  };

  return review;
});

export const adaptUser = (item: any): User => {
  const user = {
    img: item.avatar_url,
    name: item.name,
    isPro: item.is_pro,
  };
  return user;
};
