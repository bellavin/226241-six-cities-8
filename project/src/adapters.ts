import { Offer, Review } from './types/types';

export const adaptOffer = (offerList: any[]): Offer[] => offerList.map((item) => {
  const obj = {
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
    type: item.type || '',
    isFeature: item.is_favorite || false,
    isPremium: item.is_premium || false,
    detail: {
      bedrooms: item.bedrooms,
      maxAdults: item.max_adults,
      includes: item.goods,
      user: {
        // id: item.host.id,
        img: item.host.avatar_url || '',
        name: item.host.name || '',
        isPro: item.host.is_pro || false,
      },
      description: item.description || '',
    },
  };

  return obj;
});


export const adaptReview = (reviewList: any[]): Review[] => reviewList.map((item) => {
  const obj = {
    id: item.id,
    stars: item.rating,
    text: item.comment,
    date: item.date,
    user: {
      // id: item.user.id
      img: item.user.avatar_url,
      name: item.user.name,
      isPro: item.user.is_pro,
    },
  };

  return obj;
});
