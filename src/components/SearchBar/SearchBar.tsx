import React from "react";
import { FilterEnum } from "../../App";
import "./SearchBar.scss";

type SearchBarType = {
  displayMenu: boolean;
  setDisplayMenu: React.Dispatch<React.SetStateAction<boolean>>;
  setFilter: React.Dispatch<React.SetStateAction<FilterEnum>>;
};

export const SearchBar = ({
  displayMenu,
  setDisplayMenu,
  setFilter,
}: SearchBarType): JSX.Element => {
  const handleClick = (e: any) => {
    e.preventDefault();
    setDisplayMenu(!displayMenu);
    setFilter(e.target.name);
  };

  return (
    <header className="header">
      <nav className="nav container">
        <div className="nav__brand">
          <a href="/" className="nav__title">
            windbnb
          </a>
        </div>
        <div className="nav__buttons nav__buttons--bordered">
          <button
            name={FilterEnum.LOCATION}
            className="nav__buttons nav__buttons--location"
            onClick={handleClick}
          >
            Helsinki, Finland
          </button>
          <button
            name={FilterEnum.GUESTS}
            className="nav__buttons nav__buttons--guests"
            onClick={handleClick}
          >
            Add guests
          </button>
          <button className="nav__buttons nav__buttons--search">
            <i className="bx bx-search-alt-2"></i>
          </button>
        </div>
      </nav>
      <section className="navinfo container">
        <h1 className="navinfo__location">Stays in Finland</h1>
        <span className="nav__number">12+ stays</span>
      </section>
    </header>
  );
};
