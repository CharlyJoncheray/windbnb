import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { FilterEnum, openMenu, RootState, search, setFilter } from "@store";

import "./SearchBar.scss";
import content from "./logo.svg";

export const SearchBar = (): JSX.Element => {
  const { displayedStays, location, guests } = useSelector(
    (state: RootState) => state.stays
  );
  const dispatch = useDispatch();

  return (
    <header className="header">
      <nav className="nav container">
        <div className="nav__brand">
          <img src={content} alt="logo" />
          <a href="/" className="nav__title">
            windbnb
          </a>
        </div>
        <div className="nav__buttons nav__buttons--bordered">
          <button
            name={FilterEnum.LOCATION}
            className={`nav__buttons nav__buttons--location${
              location !== "" ? " nav__buttons--setted" : ""
            }`}
            onClick={() => {
              dispatch(openMenu());
              dispatch(setFilter(FilterEnum.LOCATION));
            }}
          >
            {location !== "" ? `${location}, Finland` : "Add a location"}
          </button>
          <button
            name={FilterEnum.GUESTS}
            className={`nav__buttons nav__buttons--guests${
              guests.adults !== 0 || guests.childrens !== 0
                ? " nav__buttons--setted"
                : ""
            }`}
            onClick={() => {
              dispatch(openMenu());
              dispatch(setFilter(FilterEnum.GUESTS));
            }}
          >
            {guests.adults !== 0 || guests.childrens !== 0
              ? `${guests.adults + guests.childrens} guest${
                  guests.adults + guests.childrens > 1 ? "s" : ""
                }`
              : "Add guests"}
          </button>
          <button
            className="nav__buttons nav__buttons--search"
            onClick={() => dispatch(search())}
          >
            <i className="bx bx-search-alt-2"></i>
          </button>
        </div>
      </nav>
      <section className="navinfo container">
        <h1 className="navinfo__location">Stays in Finland</h1>
        <span className="nav__number">{`${displayedStays.length} stay${
          displayedStays.length > 1 ? "s" : ""
        }`}</span>
      </section>
    </header>
  );
};
