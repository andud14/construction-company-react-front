import React from 'react'
import '../Styles/Components/ContactsComponent.css';

export default function AboutComponent() {
    return (
        <div>
            <div className="title">КОНТАКТЫ</div>
                <div className="contacts">
                    <div className="cnt-info">
                        <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" className="cnt-block">
                            <h3>Адрес</h3>
                            <hr />
                            <p>Your Address</p>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" className="cnt-block">
                            <h3>Часы работы</h3>
                            <hr />
                            <p>Your Hours</p>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100" className="cnt-block">
                            <h3>Почта</h3>
                            <hr />
                            <p>Your Email</p>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000" className="cnt-block">
                            <h3>Телефон</h3>
                            <hr />
                            <p>Your Phone</p>
                        </div>
                    </div>
                    <iframe data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" title='1' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25604313.096555077!2d-160.5026156!3d38.429306100000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ac8cfc2edfa57%3A0x2add320a81f3a192!2sApple%20Inc!5e0!3m2!1sru!2sru!4v1687204909156!5m2!1sru!2sru" />
                </div>

        </div>
    )
}
