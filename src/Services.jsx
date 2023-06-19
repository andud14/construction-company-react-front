import React from 'react'
import Navbar from './Components/Navbar';
import ServicesComponent from './Components/ServicesComponent';
import Slider from './Components/Slider/Slider';
import Footer from './Components/Footer';
import Form from './Components/Form';

export default function Services() {
  return (
    <div className="services">
      <Navbar/>
      <Slider/>
      <ServicesComponent/>
      <Form/>
      <Footer/>
    </div>
  )
}
