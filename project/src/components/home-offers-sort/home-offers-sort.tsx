import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sortOffersAction } from '../../store/action';
import { SORT_TYPES } from '../../const';
import { State } from '../../types/types';


function HomeOffersSort(): JSX.Element {
  const {sortOffersType} = useSelector((state: State) => state);
  const dispatch = useDispatch();
  const [activeId, setActiveId] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const activeClassName = (id: number) => `places__option${(activeId === id) ? ' places__option--active' : ''}`;
  const openClassName = `places__options places__options--custom${(isOpen) ? ' places__options--opened' : ''}`;

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={() => {setIsOpen(!isOpen);}}
      >
        {sortOffersType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={openClassName}>
        {SORT_TYPES.map((item, i) =>
          (
            <li
              key={item}
              className={activeClassName(i)}
              tabIndex={0}
              onClick={() => {
                dispatch(sortOffersAction(item));
                setIsOpen(false);
              }}
              onMouseEnter={() => {setActiveId(i);}}
              onMouseLeave={() => {setActiveId(null);}}
            >
              {item}
            </li>
          ),
        )}
      </ul>
    </form>
  );
}

export default HomeOffersSort;
