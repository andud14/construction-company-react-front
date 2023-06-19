import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Components/ProjectsComponents.css'
import image from '../Img/prj1.png'


export default function ProjectsComponents() {

    return (
        <div className="prj-cmp">
            <div className="title">НАШИ ПРОЕКТЫ</div>
            <div className="prj-sl">
                <p className='prj-srt'>Сортировать по:</p>
                <select>
                    <option value="id">Дате</option>
                    <option value="name_project">Названию</option>
                    <option value="project_area">Плошади</option>
                </select>
                <select>
                    <option value="asc">По возрастанию</option>
                    <option value="desc">По убыванию</option>
                </select>
            </div>
                <div className="prj-block">
                    {/* Название проекта */}
                    <h2 data-aos="fade-right" data-aos-duration="1000">Дом <div className='h-clr'>Название дома</div></h2>
                    {/* Площадь проекта */}
                    <p data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">Размер дома: 145 м²</p>
                    {/* Изображения проекта */}
                            <img
                                data-aos="fade-right"
                                data-aos-duration="1000"
                                data-aos-delay="200"
                                src={image}
                                alt='1'
                            />
                    {/* Кнопка перехода на страницу проекта */}
                    <Link to={`/projects/1`}><button data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">Перейти</button></Link>
                </div>
        </div>
    )
}
