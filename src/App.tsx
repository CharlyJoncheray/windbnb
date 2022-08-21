import React, { useEffect, useState } from "react";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { Stays } from "./components/Stays/Stays";
import { Stay } from "./interfaces";
import { getData } from "./services";

function App() {
  const [data, setData] = useState<Stay[]>([]);

  useEffect(() => {
    getData().then(setData);
  }, []);

  return (
    <>
      <SearchBar />
      <main>
        <Stays stays={data} />
      </main>
    </>
  );
}

export default App;
