import React from 'react'
import '../Styles/Footer.css'
import logo from '../Img/logo-ft.png';

export default function Footer() {
    return (
        <div>
            <footer>
                <a href="/">ГЛАВНАЯ</a>
                <a href="/projects">ПРОЕКТЫ</a>
                <a href="/services">УСЛУГИ</a>
                <a href="/contacts">КОНТАКТЫ</a>
                <div>
                    <a href="/"><img src={logo} alt='2' /></a>
                </div>
                <p>2023 AnDuD Project</p>
            </footer>
        </div>
    )
}
