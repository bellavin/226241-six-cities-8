import HomePlaces from '../home-places';
import HomeMap from '../home-map';
import { City } from '../../types';

type Props = {
  data:City[],
  children: React.ReactNode
}

function Home({data, children}:Props): JSX.Element {
  const activeIndex = 3;

  return (
    <div className="page page--gray page--main">
      {children}

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {data.map((item, i) => {
                const className = (i === activeIndex) ? 'locations__item-link tabs__item tabs__item--active' : 'locations__item-link tabs__item';
                return(
                  <li key={item.id} className="locations__item">
                    <a className={className} href="#">
                      <span>{item.name}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <HomePlaces data={data[activeIndex].places}>
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{data[activeIndex].places.length} places to stay in {data[activeIndex].name}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
            </HomePlaces>
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
