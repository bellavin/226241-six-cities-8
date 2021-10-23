import { Cities } from '../../const';


type Props = {
  activeCity: string | undefined;
  checkCityHandler: any;
}

function HomeTabs({activeCity, checkCityHandler}: Props): JSX.Element {

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {Cities.map((item) => {
            const {name} = item;
            const activeClassName = (name === activeCity) ? ' tabs__item--active' : '';

            return(
              <li key={name} className="locations__item">
                <a
                  onClick={checkCityHandler}
                  data-city={name}
                  className={`locations__item-link tabs__item${activeClassName}`}
                  href="#"
                >
                  <span>{name}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}

export default HomeTabs;
