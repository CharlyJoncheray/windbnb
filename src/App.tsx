import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { SearchBar, Menu, Stays, Footer } from "@components";
import { setDisplayStays, setstays } from "@store";
import { getData } from "@services";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    getData().then((data) => {
      dispatch(setstays(data));
      dispatch(setDisplayStays(data));
    });
  }, [dispatch]);

  return (
    <>
      <SearchBar />
      <Menu />
      <main>
        <Stays />
      </main>
      <Footer />
    </>
  );
}

export default App;
