import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Footer } from "./components/Footer";
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
      <Footer />
    </>
  );
}

export default App;
