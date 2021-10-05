/* eslint-disable */
import Header from '../header';
import Home from '../home';
import Login from '../login';
import Favorites from '../favorites';
import Property from '../property';
/* eslint-enable */

import { CityPlaceDetail, City } from '../../types';

function App(): JSX.Element {
  return (
    <>
      <Home data={homeData}>
        <Header authorized hasNavigation />
      </Home>
      {/* <Property data={propertyData}>
        <Header authorized hasNavigation />
      </Property> */}
      {/* <Favorites data={favoritesData}>
        <Header authorized hasNavigation />
      </Favorites> */}
      {/* <Login>
        <Header authorized hasNavigation />
      </Login> */}
    </>
  );
}

export default App;

/* eslint-disable */

const homeData = [
  {
    id: 1,
    name: 'Paris',
    places: [],
  },
  {
    id: 2,
    name: 'Cologne',
    places: [],
  },
  {
    id: 3,
    name: 'Brussels',
    places: [],
  },
  {
    id: 4,
    name: 'Amsterdam',
    places: [
      {
        id: 1,
        img: 'img/apartment-01.jpg',
        price: 120,
        stars: 4,
        name: 'Beautiful & luxurious apartment at great location',
        type: 'Apartment',
        isFeature: false,
        isPremium: true,
      },
      {
        id: 2,
        img: 'img/room.jpg',
        price: 80,
        stars: 4,
        name: 'Wood and stone place',
        type: 'Private room',
        isFeature: true,
        isPremium: false,
      },
      {
        id: 3,
        img: 'img/apartment-02.jpg',
        price: 132,
        stars: 4,
        name: 'Canal View Prinsengracht',
        type: 'Apartment',
        isFeature: true,
        isPremium: false,
      },
      {
        id: 4,
        img: 'img/apartment-03.jpg',
        price: 180,
        stars: 4,
        name: 'Nice, cozy, warm big bed apartment',
        type: 'Apartment',
        isFeature: false,
        isPremium: true,
      },
      {
        id: 5,
        img: 'img/room.jpg',
        price: 80,
        stars: 4,
        name: 'Wood and stone place',
        type: 'Private room',
        isFeature: true,
        isPremium: false,
      },
    ],
  },
  {
    id: 5,
    name: 'Hamburg',
    places: []
  },
  {
    id: 6,
    name: 'Dusseldorf',
    places: []
  },
]

const propertyData:CityPlaceDetail = {
  id: 1,
  img: [
    'img/room.jpg',
    'img/apartment-01.jpg',
    'img/apartment-02.jpg',
    'img/apartment-03.jpg',
    'img/studio-01.jpg',
    'img/apartment-01.jpg',
  ],
  price: 120,
  stars: 4.8,
  name: 'Beautiful & luxurious studio at great location',
  type: 'Apartment',
  isFeature: false,
  isPremium: true,
  desc: {
    bedrooms: 3,
    maxAdults: 4,
    includes: [
      'Wi-Fi',
      'Washing machine',
      'Towels',
      'Heating',
      'Coffee machine',
      'Baby seat',
      'Kitchen',
      'Dishwasher',
      'Cabel TV',
      'Fridge',
    ],
    title: 'Meet the host',
    user: {
      img: 'img/avatar-angelina.jpg',
      name: 'Angelina',
      isPro: true,
    },
    text: [
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
      'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    ],
    reviews: [
      {
        id: 1,
        stars: 4,
        text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
        date: '2021-05-29T07:47:01.121Z',
        user: {
          img: 'img/avatar-max.jpg',
          name: 'Max',
          isPro: false,
        },
      },
    ],
  },
  near: [
    {
      id: 1,
      img: 'img/room.jpg',
      price: 80,
      stars: 4,
      name: 'Wood and stone place',
      type: 'Private room',
      isFeature: true,
    },
    {
      id: 2,
      img: 'img/apartment-02.jpg',
      price: 132,
      stars: 4,
      name: 'Canal View Prinsengracht',
      type: 'Apartment',
      isFeature: false,
    },
    {
      id: 3,
      img: 'img/apartment-03.jpg',
      price: 180,
      stars: 4,
      name: 'Nice, cozy, warm big bed apartment',
      type: 'Apartment',
      isFeature: false,
    },
  ],
};

const favoritesData:City[] = [
  {
    id: 1,
    name: 'Amsterdam',
    places: [
      {
        id: 1,
        img: 'img/apartment-small-03.jpg',
        price: 180,
        stars: 5,
        name: 'Nice, cozy, warm big bed apartment',
        type: 'Apartment',
      },
      {
        id: 2,
        img: 'img/room-small.jpg',
        price: 80,
        stars: 4,
        name: 'Wood and stone place',
        type: 'Private room',
      },
    ],
  },
  {
    id: 2,
    name: 'Cologne',
    places: [
      {
        id: 1,
        img: 'img/apartment-small-04.jpg',
        price: 180,
        stars: 5,
        name: 'White castle',
        type: 'Apartment',
      },
    ],
  },
];
/* eslint-enable */
