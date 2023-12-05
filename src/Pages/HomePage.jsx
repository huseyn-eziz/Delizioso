import Cards from "../components/Cards/Cards";
import CardsWithPagination from "../components/Cards/CardsWithPagination";
import Pagination from "../components/Cards/CardsWithPagination";
import Page from "../components/Cards/CardsWithPagination";
import Header from "../components/Header/Header";
import PageContainer from "../components/PageContainer/PageContainer";
import Restauran from "../components/Restauran/Restauran";
import Welcome from "../components/Welcome/Welcome";

const HomePage = () => {
  return (
    <>

      <Header />
      <Restauran />
      <Welcome />
      <CardsWithPagination />

    </>
  );
};

export default HomePage;
