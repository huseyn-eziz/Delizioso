import Cards from "../components/Cards/Cards";
import Header from "../components/Header/Header";
import Restauran from "../components/Restauran/Restauran";
import Welcome from "../components/Welcome/Welcome";

const HomePage = () => {
  return (
    <>

      <Header />
      <Restauran />
      <Welcome />
      <Cards />
    </>
  );
};

export default HomePage;
