import './slider.css';
import React, { Component } from "react";
import "../../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default class Testimonials extends Component {
  render() {
    return (
      <Carousel>
        <div className="slide-item">
                <div className="review-clients">
                    <div className="review-clients-top">
                        <div className="review-clients-top-in">
                            <div className="review-clients-photo"></div>
                            <div className="review-clients-name">Буба Бубенцов</div>
                        </div>
                        <div className="review-clients-date">08.01.2022</div>
                    </div>
                    <div className="review-clients-text">Отличный коллектив, руководители понимают сам процесс работы каждого сотрудника и помогают всем без исключения. Система KPI позволяет реально хорошо зарабатывать по простому принципу - чем больше и лучше ты работаешь, тем больше денег получаешь. Соцпакет - отличная страховка ДМС, организовали курсы английского языка бесплатно, оплачивают тренажерный зал. Зарплату выплачивают всегда вовремя.
                    </div>
                </div>
                <div className="review-clients">
                    <div className="review-clients-top">
                        <div className="review-clients-top-in">
                            <div className="review-clients-photo"></div>
                            <div className="review-clients-name">Илья Анташкевич</div>
                        </div>
                        <div className="review-clients-date">08.01.2022</div>
                    </div>
                    <div className="review-clients-text">Год назад попытал счастье, откликнулся на вакансию, прошел собес и попал в компанию. Долго переживал что будет тяжело влиться, но тут прям классные ребята работают, все на одной волне. Всегда готовы помочь с любым вопросом. Для эффективной работы здесь нужно хорошо знать иностранные языки.
                    </div>
                </div>
        </div>
        <div className="slide-item">
                  <div className="review-clients">
                    <div className="review-clients-top">
                        <div className="review-clients-top-in">
                            <div className="review-clients-photo"></div>
                            <div className="review-clients-name">Буба Бубенцов</div>
                        </div>
                        <div className="review-clients-date">08.01.2022</div>
                    </div>
                    <div className="review-clients-text">Отличный коллектив, руководители понимают сам процесс работы каждого сотрудника и помогают всем без исключения. Система KPI позволяет реально хорошо зарабатывать по простому принципу - чем больше и лучше ты работаешь, тем больше денег получаешь. Соцпакет - отличная страховка ДМС, организовали курсы английского языка бесплатно, оплачивают тренажерный зал. Зарплату выплачивают всегда вовремя.
                    </div>
                </div>
                <div className="review-clients">
                    <div className="review-clients-top">
                        <div className="review-clients-top-in">
                            <div className="review-clients-photo"></div>
                            <div className="review-clients-name">Юрина Маргарита</div>
                        </div>
                        <div className="review-clients-date">26.12.2021</div>
                    </div>
                    <div className="review-clients-text">Наша компания благодарна фирме ilink за сотрудничество. Хотелось бы отметить отличную работу сотрудников: все было выполнено качественно, со знанием дела, в установленные сроки. За время работы с компанией значительно увеличилась аудитория, сайт приносит стабильный доход, контент уникальный, грамотный и качественный. Будет продолжать работу и дальше. Мы довольны, что доверили создание сайта компании ilink.
                    </div>
                </div> 
        </div>
        <div className="slide-item">
                  <div className="review-clients">
                    <div className="review-clients-top">
                        <div className="review-clients-top-in">
                            <div className="review-clients-photo"></div>
                            <div className="review-clients-name">Дмитрий Иванов</div>
                        </div>
                        <div className="review-clients-date">08.01.2022</div>
                    </div>
                    <div className="review-clients-text">Отвечала за найм и адаптацию сотрудников в компании, за поддержание на нужном уровне HR-бренда и трудового настроя коллектива. В компанию пришла без опыта работы HR-ом. Всему научилась здесь. Как теории, так и практике. Набрала опыт достаточно быстро. Есть программа обучения, поощряются различные курсы, и это большой плюс. В коллективе очень дружная атмосфера. Все дружелюбные, амбициозные.
                    </div>
                </div>
                <div className="review-clients">
                    <div className="review-clients-top">
                        <div className="review-clients-top-in">
                            <div className="review-clients-photo"></div>
                            <div className="review-clients-name">Илья Анташкевич</div>
                        </div>
                        <div className="review-clients-date">08.01.2022</div>
                    </div>
                    <div className="review-clients-text">Год назад попытал счастье, откликнулся на вакансию, прошел собес и попал в компанию. Долго переживал что будет тяжело влиться, но тут прям классные ребята работают, все на одной волне. Всегда готовы помочь с любым вопросом. Для эффективной работы здесь нужно хорошо знать иностранные языки.
                    </div>
                </div>
        </div>
      </Carousel>
    );
  }
}