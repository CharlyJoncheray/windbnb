import React, { useEffect, useState } from "react";
import { Menu } from "./components/Menu/Menu";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { Stays } from "./components/Stays/Stays";
import { Stay } from "./interfaces";
import { getData } from "./services";

export enum FilterEnum {
  LOCATION = "location",
  GUESTS = "guests",
}

function App() {
  const [displayMenu, setDisplayMenu] = useState<boolean>(false);
  const [filter, setFilter] = useState<FilterEnum>(FilterEnum.LOCATION);
  const [data, setData] = useState<Stay[]>([]);

  useEffect(() => {
    getData().then(setData);
  }, []);

  const props = {
    displayMenu: displayMenu,
    setDisplayMenu: setDisplayMenu,
    filter: filter,
    setFilter: setFilter,
  };

  return (
    <>
      <SearchBar {...props} />
      <Menu {...props} />
      <main>
        <Stays stays={data} />
      </main>
    </>
  );
}

export default App;
