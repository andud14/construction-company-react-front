import React from 'react';
import '../Styles/Form.css';

export default function Form() {

    return (
        <div className="mform">
            <div className="title">ОСТАВИТЬ ЗАЯВКУ</div>
            <p>Описание заявки</p>
                <div className="form" data-aos="zoom-in" data-aos-duration="1000">
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
                                <option value='Дом'>Тема 1</option>
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

                        <input className='btn' type="submit" value="Отправить" />
                    </form>
                </div>
        </div>
    );
}