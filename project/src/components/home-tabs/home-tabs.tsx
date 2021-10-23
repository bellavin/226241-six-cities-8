import { MouseEventHandler } from 'react';


type Props = {
  activeCity: string | undefined;
  cityList: string[],
  setCityHandler: MouseEventHandler<HTMLAnchorElement>;
}

function HomeTabs({activeCity, cityList, setCityHandler}: Props): JSX.Element {

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cityList.map((item) => {
            const activeClassName = (item === activeCity) ? ' tabs__item--active' : '';

            return(
              <li key={item} className="locations__item">
                <a
                  onClick={setCityHandler}
                  data-city={item}
                  className={`locations__item-link tabs__item${activeClassName}`}
                  href="#"
                >
                  <span>{item}</span>
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
