import AboutUs from "./components/AboutUs/AboutUs";
import BestSellingPlants from "./components/BestSellingPlants/BestSellingPlants";
import Categories from "./components/Categories/Categories";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar"
import 'bootstrap/dist/css/bootstrap.css';
import ReviewsCarousel from "./components/ReviewsCarousel/ReviewsCarousel";

function App() {

  return (
    <>
     <div>
      <Navbar />
      <Header />
      <BestSellingPlants />
      <AboutUs />
      <Categories />
      <ReviewsCarousel />
      <Footer />
     </div>
       
    </>
  )
}

export default App
