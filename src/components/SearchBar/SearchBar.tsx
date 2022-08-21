import React from "react";
import "./SearchBar.scss";

export const SearchBar = (): JSX.Element => {
  return (
    <header className="header">
      <nav className="nav container">
        <div className="nav__brand">
          <a href="/" className="nav__title">
            windbnb
          </a>
        </div>
        <div className="nav__buttons nav__buttons--bordered">
          <button className="nav__buttons nav__buttons--location">
            Helsinki, Finland
          </button>
          <button className="nav__buttons nav__buttons--guests">
            Add guests
          </button>
          <button className="nav__buttons nav__buttons--search">
            <i className="bx bx-search-alt-2"></i>
          </button>
        </div>
      </nav>
    </header>
  );
};
