import { Item } from '../types/types';

export const offers: Item[] = [
  {
    id: '1',
    city: {
      name: 'Amsterdam',
      lat: 50.85045,
      lng: 4.34878,
      zoom: 13,
    },
    location: {
      lat: 52.3909553943508,
      lng: 4.85309666406198,
      zoom: 16,
    },
    img: 'img/apartment-01.jpg',
    gallery: [
      'img/apartment-03.jpg',
      'img/room.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
      'img/apartment-01.jpg',
      'img/room.jpg',
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
      'img/room.jpg',
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
      'img/room.jpg',
    ],
    price: 214,
    stars: 2.3,
    name: 'House in countryside',
    type: 'apartment',
    isFeature: true,
    isPremium: false,
    detail: {
      bedrooms: 4,
      maxAdults: 9,
      includes: [
        'Coffee machine',
        'Laptop friendly workspace',
        'Washer',
        'Air conditioning',
        'Dishwasher',
        'Fridge',
        'Baby seat',
        'Breakfast',
        'Towels',
      ],
      user: {
        img: 'img/avatar-angelina.jpg',
        name: 'Angelina',
        isPro: true,
      },
      description: 'Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.',
    },
  },
  {
    id: '2',
    city: {
      name: 'Amsterdam',
      lat: 50.85045,
      lng: 4.34878,
      zoom: 13,
    },
    location: {
      lat: 52.369553943508,
      lng: 4.85309666406198,
      zoom: 16,
    },
    img: 'img/apartment-01.jpg',
    gallery: [
      'img/room.jpg',
      'img/room.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
      'img/apartment-03.jpg',
      'img/apartment-03.jpg',
      'img/apartment-01.jpg',
      'img/room.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
      'img/apartment-01.jpg',
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/apartment-01.jpg',
    ],
    price: 340,
    stars: 4.6,
    name: 'Penthouse, 4-5 rooms + 5 balconies',
    type: 'apartment',
    isFeature: false,
    isPremium: true,
    detail: {
      bedrooms: 4,
      maxAdults: 9,
      includes: [
        'Air conditioning',
        'Towels',
        'Baby seat',
        'Washer',
        'Washing machine',
        'Laptop friendly workspace',
        'Dishwasher',
        'Fridge',
        'Coffee machine',
        'Breakfast',
      ],
      user: {
        img: 'img/avatar-angelina.jpg',
        name: 'Angelina',
        isPro: true,
      },
      description: 'I am happy to welcome you to my apartment in the city center! Three words: location, cosy and chic!',
    },
  },
  {
    id: '3',
    city: {
      name: 'Amsterdam',
      lat: 52.370216,
      lng: 4.895168,
      zoom: 13,
    },
    location: {
      lat: 52.3909553943508,
      lng: 4.929309666406198,
      zoom: 16,
    },
    img: 'img/apartment-01.jpg',
    gallery: [
      'img/apartment-02.jpg',
      'img/apartment-02.jpg',
      'img/apartment-01.jpg',
      'img/apartment-03.jpg',
      'img/apartment-03.jpg',
      'img/apartment-01.jpg',
      'img/apartment-03.jpg',
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/apartment-02.jpg',
      'img/apartment-01.jpg',
      'img/room.jpg',
      'img/room.jpg',
      'img/room.jpg',
    ],
    price: 115,
    stars: 4.4,
    name: 'Canal View Prinsengracht',
    type: 'room',
    isFeature: false,
    isPremium: false,
    detail: {
      bedrooms: 1,
      maxAdults: 1,
      includes: [
        'Air conditioning',
        'Laptop friendly workspace',
        'Washer',
        'Breakfast',
      ],
      user: {
        img: 'img/avatar-angelina.jpg',
        name: 'Angelina',
        isPro: true,
      },
      description: 'Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.',
    },
  },
  {
    id: '4',
    city: {
      name: 'Amsterdam',
      lat: 50.85045,
      lng: 4.34878,
      zoom: 13,
    },
    location: {
      lat: 52.3809553943508,
      lng: 4.939309666406198,
      zoom: 16,
    },
    img: 'img/room.jpg',
    gallery: [
      'img/apartment-01.jpg',
      'img/room.jpg',
      'img/apartment-02.jpg',
      'img/room.jpg',
      'img/apartment-03.jpg',
      'img/apartment-03.jpg',
      'img/apartment-02.jpg',
      'img/apartment-01.jpg',
      'img/apartment-03.jpg',
      'img/room.jpg',
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
      'img/apartment-01.jpg',
    ],
    price: 136,
    stars: 5,
    name: 'Perfectly located Castro',
    type: 'room',
    isFeature: false,
    isPremium: false,
    detail: {
      bedrooms: 1,
      maxAdults: 3,
      includes: [
        'Washer',
        'Laptop friendly workspace',
        'Towels',
        'Air conditioning',
        'Coffee machine',
        'Dishwasher',
        'Baby seat',
        'Breakfast',
        'Fridge',
      ],
      user: {
        img: 'img/avatar-angelina.jpg',
        name: 'Angelina',
        isPro: true,
      },
      description: 'Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.',
    },
  },
];
