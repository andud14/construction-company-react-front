import Navbar from './Components/Navbar';
import MainComponent from './Components/MainComponent';
import Footer from './Components/Footer';
import Slider from './Components/Slider/Slider';

function Main() {
  return (
    <div className="Main">
      <Navbar/>
      <Slider/>
      <MainComponent/>
      <Footer/>
    </div>

  );
}

export default Main;
