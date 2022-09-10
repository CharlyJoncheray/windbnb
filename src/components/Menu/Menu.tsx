import { useDispatch, useSelector } from "react-redux";

import { closeMenu, FilterEnum, RootState, search, setFilter } from "@store";
import { Guests, Locations } from "@components";

import "./Menu.scss";

export const Menu = (): JSX.Element => {
  const displayMenu = useSelector((state: RootState) => state.menu.display);
  const filter = useSelector((state: RootState) => state.filter.filter);
  const { stays, location, guests } = useSelector(
    (state: RootState) => state.stays
  );

  const dispatch = useDispatch();

  return (
    <>
      <aside className={displayMenu ? "aside show-aside" : "aside"}>
        <div className="menu container">
          <div className="menu__header">
            <h1>Edit your search</h1>
            <button onClick={() => dispatch(closeMenu())}>
              <i className="bx bx-x"></i>
            </button>
          </div>
          <div className="menu__buttons menu__buttons--bordered">
            <button
              className={`button button--location ${
                filter === FilterEnum.LOCATION ? "selected" : ""
              }`}
              name={FilterEnum.LOCATION}
              onClick={() => dispatch(setFilter(FilterEnum.LOCATION))}
            >
              <span>LOCATION</span>
              <span>
                {location !== "" ? `${location}, Finland` : "Add location"}
              </span>
            </button>
            <button
              className={`button button--guests ${
                filter === FilterEnum.GUESTS ? "selected" : ""
              }`}
              name={FilterEnum.GUESTS}
              onClick={() => dispatch(setFilter(FilterEnum.GUESTS))}
            >
              <span>GUESTS</span>
              <span>
                {guests.adults !== 0 || guests.childrens !== 0
                  ? `${guests.adults + guests.childrens} guest${
                      guests.adults + guests.childrens > 1 ? "s" : ""
                    }`
                  : "Add guests"}
              </span>
            </button>
            <div className="button button__search button__search--desktop">
              <button
                onClick={() => {
                  dispatch(search());
                  dispatch(closeMenu());
                }}
              >
                <i className="bx bx-search-alt-2"></i>
                <span>Search</span>
              </button>
            </div>
          </div>
          <div className="menu__filter">
            {filter === FilterEnum.LOCATION ? (
              <Locations stays={stays} />
            ) : (
              <Guests />
            )}
          </div>
          <button
            className="menu__search menu__search--mobile"
            onClick={() => {
              dispatch(search());
              dispatch(closeMenu());
            }}
          >
            <i className="bx bx-search-alt-2"></i>
            <span>Search</span>
          </button>
        </div>
      </aside>
      <div
        className={displayMenu ? "outside show-aside" : "outside"}
        onClick={() => dispatch(closeMenu())}
      ></div>
    </>
  );
};
