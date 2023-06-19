import Navbar from './Components/Navbar';
import Slider from './Components/Slider/Slider';
import Footer from './Components/Footer';
import Form from './Components/Form';
import ContactsComponent from './Components/ContactsComponent';

function About() {
  return (
    <div className="About">
      <Navbar />
      <Slider/>
      <ContactsComponent/>
      <Form/>
      <Footer/>
    </div>
  );
}

export default About;
