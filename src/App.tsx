import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Menu } from "./components/Menu/Menu";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { Stays } from "./components/Stays/Stays";
import { setDisplayStays, setstays } from "./redux";
import { getData } from "./services";

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
    </>
  );
}

export default App;
