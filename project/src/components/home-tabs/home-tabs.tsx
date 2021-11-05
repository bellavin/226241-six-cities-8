import { useDispatch, useSelector } from 'react-redux';
import { filterOffersAction, sortOffersAction} from '../../store/action';
import { State } from '../../types/types';
import { CITY_LIST, SORT_TYPES } from '../../const';


function HomeTabs(): JSX.Element {
  const dispatch = useDispatch();
  const {filterOffersType} = useSelector((state: State) => state);

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITY_LIST.map((item) => {
            const activeClassName = (item === filterOffersType) ? ' tabs__item--active' : '';

            return(
              <li key={item} className="locations__item">
                <a
                  onClick={(evt) => {
                    evt.preventDefault();
                    dispatch(filterOffersAction(item));
                    dispatch(sortOffersAction(SORT_TYPES[0]));
                  }}
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
