import React, {Component} from 'react';
import {FetchPortfolio} from "../../Api/Api";
import Swiper from 'swiper';
import "swiper/css/swiper.css";
import LanguageContext from "../../Context/LanguageContext";

export const ApiLanguages = {
    'Francais': 'fr',
    'English': 'en',
    'Deutsch': 'de'
};

class Feedback extends Component {
    static contextType = LanguageContext;
    state = {
        feedback: [],
        loading: true,
        active: 1
    };

    async componentDidMount() {
        const feedback = await FetchPortfolio('feedbacks');
        this.setState({feedback});
        const mySwiper = new Swiper('.swiper-container', {
            updateOnWindowResize: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
            },
        });
    }

    render() {
        const {language} = this.context;
        const {feedback} = this.state;
        const feedBackElements = feedback ? feedback.map((feedback, key) => (
            <div key={key} className={"m-auto feedback swiper-slide "}>
                <p className="has-text-centered">
                    {feedback.content[ApiLanguages[language]]}
                </p>
                <p className={"has-text-black has-text-centered"}>{feedback.title}</p>
                <img className="is-block m-auto" src={'../images/' + feedback.image} alt=""/>
            </div>
        )): null;
        return (
            <div className="content">
                <h2 className="title">Feedback</h2>
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        {feedBackElements}
                    </div>
                    <div className="swiper-pagination"/>
                    <div className="swiper-button-prev"/>
                    <div className="swiper-button-next"/>
                </div>
            </div>
        );
    }
}

export default Feedback;
