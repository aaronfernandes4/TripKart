import Featured from "../../components/featured/Featured";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/PropertyList";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header/>
      <div className="homeContainer">
        <Featured/>
        <img src = "https://blog.magezon.com/wp-content/uploads/2020/08/fashion-promotion-banner-sample.png"/>

        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList/>
        <img src="https://img.freepik.com/free-vector/big-diwali-sale-promotional-banner-design_1017-15833.jpg?1&w=826&t=st=1668183820~exp=1668184420~hmac=60139b3be2a48c5f10ed68e5e2bba9f27bf3db86e6ff32be99a42ad91667312b"></img>
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperties/>
        <MailList/>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
