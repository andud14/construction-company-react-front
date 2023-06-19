import React from 'react';
import Navbar from './Components/Navbar';
import Slider from './Components/Slider/Slider';
import Footer from './Components/Footer';
import ProjectsComponent from './Components/ProjectsComponent';

export default function Projects() {

  return (

    <div className="Projects">
      <Navbar />
      <Slider />
      <ProjectsComponent />
      <Footer />
    </div>

  )
}
