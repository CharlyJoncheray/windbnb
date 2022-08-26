import React from "react";
import { FilterEnum } from "../../App";
import "./Menu.scss";

type MenuProps = {
  displayMenu: boolean;
  setDisplayMenu: React.Dispatch<React.SetStateAction<boolean>>;
  filter: FilterEnum;
  setFilter: React.Dispatch<React.SetStateAction<FilterEnum>>;
};

export const Menu = ({
  displayMenu,
  setDisplayMenu,
  filter,
  setFilter,
}: MenuProps): JSX.Element => {
  const handleClick = (e: any) => {
    e.preventDefault();
    setFilter(e.target.name);
  };

  return (
    <>
      <aside className={displayMenu ? "aside show-aside" : "aside"}>
        <div className="menu container">
          <div className="menu__header">
            <h1>Edit your search</h1>
            <button onClick={() => setDisplayMenu(!displayMenu)}>
              <i className="bx bx-x"></i>
            </button>
          </div>
          <div className="menu__buttons menu__buttons--bordered">
            <button
              className={`button button--location ${
                filter === FilterEnum.LOCATION ? "selected" : ""
              }`}
              name={FilterEnum.LOCATION}
              onClick={handleClick}
            >
              <span>LOCATION</span>
              <span>Helsinki, Finland</span>
            </button>
            <button
              className={`button button--guests ${
                filter === FilterEnum.GUESTS ? "selected" : ""
              }`}
              name={FilterEnum.GUESTS}
              onClick={handleClick}
            >
              <span>GUESTS</span>
              <span>Add guests</span>
            </button>
          </div>
          <div className="menu__filter">
            {filter === FilterEnum.LOCATION ? <>Location</> : <>Guests</>}
          </div>
          <button className="menu__search">
            <i className="bx bx-search-alt-2"></i>
            <span>Search</span>
          </button>
        </div>
      </aside>
      <div
        className={displayMenu ? "outside show-aside" : "outside"}
        onClick={() => setDisplayMenu(!displayMenu)}
      ></div>
    </>
  );
};
