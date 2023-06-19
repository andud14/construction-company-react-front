import React from 'react'
import about1 from '../Img/Main/img1.png';
import about2 from '../Img/Main/img2.png';
import '../Styles/Components/MainComponent.css';
import icon1 from '../Img/icons/icon1.png';
import icon2 from '../Img/icons/icon2.png';
import icon3 from '../Img/icons/icon3.png';
import icon4 from '../Img/icons/icon4.png';

export default function MainAbout() {
  return (

    <div className="main">

      {/* О КОМПАНИИ */}
      <div className="about">
        {/* Заголовок */}
        <div className="title">
          О КОМПАНИИ
        </div>

        <div className="mn-ab">
          <div className="ab-img" data-aos="fade-up-right" data-aos-duration="1000">
            <img src={about1} alt='изображение 1' />
          </div>
          <div className="ab-text" data-aos="fade-up-left" data-aos-duration="1000">
            <div className="ab-title">
              ЗАГОЛОВОК 1
            </div>
            <hr />
            <div className="ab-dsc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>
        </div>
        <div className="mn-ab">
          <div className="ab-text" data-aos="fade-up-right" data-aos-duration="1000">
            <div className="ab-title">
              ЗАГОЛОВОК 2
            </div>
            <hr />
            <div className="ab-dsc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>
          <div className="ab-img" data-aos="fade-up-left" data-aos-duration="1000">
            <img className='about-img' src={about2} alt='info2' />
          </div>
        </div>
      </div>

      {/* СВЯЗАТЬСЯ С НАМИ */}
      <div className="title">СВЯЗАТЬСЯ С НАМИ</div>
      <div className="contactsMain">
        <div className="cnt-text" data-aos="fade-right" data-aos-duration="1000">
          <div className="text-title">
            НАШИ КОНТАКТЫ:
          </div>
          <hr />
            <div>
              <div className="cnt" >
                <img src={icon1} alt="icon1" />
                <p>Адрес:</p>
                <p className='txt-dsc'>Your address</p>
              </div>

              <div className="cnt" >
                <img src={icon4} alt="icon1" />
                <p>Часы работы:</p>
                <p className='txt-dsc'>Your Hours</p>
              </div>

              <div className="cnt">
                <img src={icon2} alt="2" />
                <p>Почта:</p>
                <p className='txt-dsc'>Your Email</p>
              </div>

              <div className="cnt">
                <img src={icon3} alt="3" />
                <p>Телефон:</p>
                <p className='txt-dsc'>Your phone</p>
              </div>
            </div>
        </div>

        <div className="cnt-form" data-aos="fade-left" data-aos-duration="1000">
          <div className="form-bg">

              <form>
                <label>
                  Имя:<br />
                  <input type="text" name="name" required />
                </label>
                <label>
                  Фамилия:<br />
                  <input type="text" name="surname" required />
                </label>
                <label>
                  Телефон:<br />
                  <input
                    type="tel"
                    name="phone_number"
                    pattern="^\+?[0-9]{11,12}$" // Регулярное выражение для проверки телефонного номера
                    required
                  />
                </label>
                <label>
                  Почта:<br />
                  <input type="email" name="email" required />
                </label>
                <label>
                  Тема:<br />
                  <select>
                    <option value="Дом">Тема 1</option>
                    <option value="Инженерное сооружение">Тема 2</option>
                    <option value="Отделка">Тема 3</option>
                    <option value="Вопрос">Тема 4</option>
                  </select>
                </label>
                <label>
                  Комментарий:<br />
                  <textarea name="note" />
                </label>

                <input className='checkbox' type="checkbox" id="personal" name="personal" required />
                <label className='cb-text' htmlFor="personal">Я согласен с политикой обработки персональных данных.</label>
                <input className='btn' type="submit" value="Send" />
              </form>

          </div>
        </div>
      </div>

    </div>
  )
}
