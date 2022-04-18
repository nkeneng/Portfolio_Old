import React, {Component} from 'react';
import {FetchPortfolio} from "../../Api/Api";
import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import LanguageContext from "../../Context/LanguageContext";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
    }

    render() {
        const {language} = this.context;
        const {feedback} = this.state;
        const feedBackElements = feedback ? feedback.map((feedback, key) => (
            <SwiperSlide key={key}>
                <div  className={"m-auto feedback swiper-slide "}>
                    <p className="has-text-centered">
                        {feedback.content[ApiLanguages[language]]}
                    </p>
                    <p className={"has-text-black has-text-centered"}>{feedback.title}</p>
                    <img className="is-block m-auto" src={'../images/' + feedback.image} alt=""/>
                </div>
            </SwiperSlide>
        )) : null;
        return (
            <div className="content">
                <h2 className="title">Feedback</h2>
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={50}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                            onSwiper={(swiper) => console.log(swiper)}
                        >
                            {feedBackElements}
                        </Swiper>
                    </div>
                </div>
            </div>
        );
    }
}

export default Feedback;
