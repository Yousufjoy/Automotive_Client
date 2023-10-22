import Banner from "../../components/Banner/Banner";
import Brands from "../../components/Brands/Brands";
import Ceo from "../../components/CEO/Ceo";
import News from "../../components/News/News";
import Navbar from "../../shared/Navbar/Navbar";
import Footer from "../../shared/footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Brands></Brands>
      <News></News>
      <Ceo></Ceo>
      <Footer></Footer>
    </div>
  );
};

export default Home;
