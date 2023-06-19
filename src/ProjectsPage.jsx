import React from 'react';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import PageComponent from './Components/PageComponent';
import Form from './Components/Form';
import Slider from './Components/Slider/Slider';

export default function ProjectPage() {

    return (
        <div>
            <Navbar />
            <Slider />
            <PageComponent />
            <Form />
            <Footer />
        </div>

    )

}