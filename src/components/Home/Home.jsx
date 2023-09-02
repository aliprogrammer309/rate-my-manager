import SearchManager from "../search/SearchManager";
import Contact from "../contact/Contact";
import Navbar from "../navbar/Navbar";

const Home = () => {
  return (
    <>
      <Navbar showLinks={true} showSearchBar={false} />
      <SearchManager />
      <Contact />
    </>
  );
};

export default Home;
