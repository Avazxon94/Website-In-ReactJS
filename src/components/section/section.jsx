import './section.css';
import Author from '../../images/author.jpg';

export default function section() {
    return(
        <div className="section">
            <div className="section-title">Добро пожаловать в академию!</div>
            <div className="section-blocks">
                <div className="section-left">
                    <img src={Author} alt="" className='my-photo'/>
                </div>
                <div className="section-right">
                    <div className="my-name-block">
                        <div className="my-name">Авазхон Акрамов</div>
                        <div className="my-birth-day">16.05.1994</div>
                    </div>
                    <div className="my-town-block">
                        <div className="my-town"><b>Город: </b>Фергана</div>
                        <div className="my-sex"><b>Пол: </b>Мужчина</div>
                        <div className="my-age"><b>Возраст: </b>27</div>
                    </div>
                    <div className="about-me-block">
                        <b>О себе:</b> Всем привет! Меня зовут Авазхон, мне 27 лет, я студент. 
                        Сейчас учусь на магистратуру в ТПУ по направлении "Data science and software engineering", и хочу стать программистом. 2016 - 2020гг я училься Ташкенского Университета Информационных Технологий Ферганский Филиал по направлении "Компьютерный инжиниринг"  
                        Опыт работы почти год 2018 - 2019гг. Работал в компании МегаГрупп - Верстальщиком , Навыки: HTML5, CSS3, JS. Сейчас изучаю React JS самостоятельно , хочу стать Senior Frontend разработчиком !!! ! 
                    </div>
                    {/* <div className="comment">  BTW: И да, у меня нет никакого животное</div> */}

                    <div className="my-pet"><b>Домашнее животное: </b> нет</div>
                </div>
            </div>
        </div>
    )
}