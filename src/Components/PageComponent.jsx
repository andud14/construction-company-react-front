import React from 'react';
import '../Styles/Components/PageComponent.css';
import tx1 from '../Img/icons/tx1.png';
import tx2 from '../Img/icons/tx2.png';
import tx3 from '../Img/icons/tx3.png';
import tx4 from '../Img/icons/tx4.png';
import image from '../Img/prj1.png'

export default function PageComponent() {

    return (
        <div className='pagecomponent'>

            {/* Заголовок */}
            <div className="title" style={{ color: '#6da825' }}>Название дома</div>

            {/* Блок 1 */}
            <div className="pg-bl1">
                <div className="bl1-bl">
                    <div className="bl-img">
                        <img src={image} alt="img" data-aos="fade-right" data-aos-duration="1000" />

                    </div>
                    <div className="bl-info" data-aos="fade-left" data-aos-duration="1000">

                        <div className="bl-info-tx">
                            <hr />
                            <div className="tx-logo">
                                <img src={tx1} alt='1' />
                            </div>
                            <div className="tx-title">Тип дома:</div>
                            <div className="tx-info">Кирпичный</div>
                        </div>

                        <div className="bl-info-tx">
                            <hr />
                            <div className="tx-logo">
                                <img src={tx2} alt='2' />
                            </div>
                            <div className="tx-title">Площадь:</div>
                            <div className="tx-info">124 м²</div>
                        </div>

                        <div className="bl-info-tx">
                            <hr />
                            <div className="tx-logo">
                                <img src={tx3} alt='3' />
                            </div>
                            <div className="tx-title">Количество этажей:</div>
                            <div className="tx-info">1</div>
                        </div>

                        <div className="bl-info-tx">
                            <hr />
                            <div className="tx-logo">
                                <img src={tx4} alt='4' />
                            </div>
                            <div className="tx-title">Количество спален:</div>
                            <div className="tx-info">2</div>
                            <hr className='hr-cs' />
                        </div>
                    </div>
                </div>
            </div>

            {/* Заголовок */}
            <div className="title">ХАРАКТЕРИСТИКИ ДОМА</div>

            {/* Блок 2 */}
            <div className="pg-bl2">
                <div className="bl2-info">
                    <hr />
                    <div className="bl2-title">
                        Описание:
                    </div>
                    <div className="bl2-descr">
                        Описание дома
                    </div>
                </div>

                <div className="bl2-info">
                    <hr />
                    <div className="bl2-title">
                        Тип дома:
                    </div>
                    <div className="bl2-descr">
                        Кирпичный
                    </div>
                </div>

                <div className="bl2-info">
                    <hr />
                    <div className="bl2-title">
                        Плошадь:
                    </div>
                    <div className="bl2-descr">
                        124 м²
                    </div>
                </div>

                <div className="bl2-info">
                    <hr />
                    <div className="bl2-title">
                        Количество комнат:
                    </div>
                    <div className="bl2-descr">
                        3
                    </div>
                </div>

                <div className="bl2-info">
                    <hr />
                    <div className="bl2-title">
                        Количество спален:
                    </div>
                    <div className="bl2-descr">
                        2
                    </div>
                </div>

                <div className="bl2-info">
                    <hr />
                    <div className="bl2-title">
                        Количество сан. узлов:
                    </div>
                    <div className="bl2-descr">
                        1
                    </div>
                </div>


                <div className="bl2-info">
                    <hr />
                    <div className="bl2-title">
                        Количество этажей:
                    </div>
                    <div className="bl2-descr">
                        1
                    </div>
                </div>

                <div className="bl2-info">
                    <hr />
                    <div className="bl2-title">
                        Высота одного этажа:
                    </div>
                    <div className="bl2-descr">
                        2м.
                    </div>
                    <hr style={{ margin: '2vw 0' }} />
                </div>

            </div>

        </div>

    )

}