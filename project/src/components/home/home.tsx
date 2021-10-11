import { AuthStatus } from '../../const';
import { Item } from '../../types/types';

import Header from '../header/header';
import HomeMap from '../home-map/home-map';
import HomePlaces from '../home-places/home-places';


type Props = {
  authStatus :AuthStatus;
  data :Item[];
}

function Home({authStatus, data} :Props) :JSX.Element {
  const activeIndex = 1;

  const cities = new Set('');
  data.forEach((item)=>{
    cities.add(item.city);
  });

  return (
    <div className="page page--gray page--main">
      <Header authStatus={authStatus} />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {[...cities].map((item, i) => {
                const activeClassName = (i === activeIndex) ? ' tabs__item--active' : '';

                return(
                  <li key={item} className="locations__item">
                    <a className={`locations__item-link tabs__item${activeClassName}`} href="#">
                      <span>{item}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <HomePlaces data={data} />
            <div className="cities__right-section">
              <HomeMap />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
