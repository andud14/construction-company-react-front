import React from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import './Styles/ErrorPage.css'

export default function ErrorPage (){

    return(
        <div className='errorpage'>
                    <Navbar/>
                    <div className="error-pg"><div className="error-sm">☹</div>
                        Такой страницы не существет. <a href='/'>Перейти на Главную</a></div>
                    <Footer className="footer-err" />


        </div>

    )

}