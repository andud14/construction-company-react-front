import '../Styles/Components/ServicesComponent.css'
import React from 'react'
import image1_1 from '../Img/service/hs1.png'
import image1_2 from '../Img/service/hs2.png'
import image2_1 from '../Img/service/hs3.png'
import image2_2 from '../Img/service/hs4.png'
import image3_1 from '../Img/service/hs5.png'
import image3_2 from '../Img/service/hs6.png'
import image4_1 from '../Img/service/hs7.png'
import image4_2 from '../Img/service/hs8.png'

export default function ServicesComponent() {

    return (
        <div className='service'>
            <div className="title">УСЛУГИ</div>

            <div className="service-block">
                <div className="service-bl1">
                    <img data-aos="fade-right" data-aos-duration="1000" className='main-img' src={image1_1} alt="" />
                    <img data-aos="fade-right" data-aos-duration="1000" data-aos-delay="400" className='sec-img' src={image1_2} alt="" />
                </div>

                <div className="service-bl2" data-aos="fade-left" data-aos-duration="1000">
                    <h3>УСЛУГИ 1</h3>
                    <hr />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>

            <div className="service-block">
                <div data-aos="fade-right" data-aos-duration="1000" className="service-bl2">
                    <h3>УСЛУГИ 2</h3>
                    <hr />
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div className="service-bl1">
                    <img data-aos="fade-left" data-aos-duration="1000" className='main-img-2' src={image2_1} alt="" />
                    <img data-aos="fade-left" data-aos-duration="1000" data-aos-delay="400" className='sec-img-2' src={image2_2} alt="" />
                </div>
            </div>

            <div className="service-block">
                <div className="service-bl1">
                    <img data-aos="fade-right" data-aos-duration="1000" className='main-img' src={image3_1} alt="" />
                    <img data-aos="fade-right" data-aos-duration="1000" data-aos-delay="400" className='sec-img' src={image3_2} alt="" />
                </div>

                <div className="service-bl2" data-aos="fade-left" data-aos-duration="1000">
                    <h3>УСЛУГИ 3</h3>
                    <hr />
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>

            <div className="service-block">
                <div data-aos="fade-right" data-aos-duration="1000" className="service-bl2">
                    <h3>УСЛУГИ 4</h3>
                    <hr />
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div className="service-bl1">
                    <img data-aos="fade-left" data-aos-duration="1000" className='main-img-2' src={image4_1} alt="" />
                    <img data-aos="fade-left" data-aos-duration="1000" data-aos-delay="400" className='sec-img-2' src={image4_2} alt="" />
                </div>
            </div>

        </div>

    )

}
