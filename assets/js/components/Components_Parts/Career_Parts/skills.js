import bootstrap from '../../../../images/skills/icons8-bootstrap-48.png'
import html from '../../../../images/skills/icons8-html-5-48.png'
import javascript from '../../../../images/skills/icons8-javascript-48.png'
import php from '../../../../images/skills/icons8-logo-php-40.png'
import mysql from '../../../../images/skills/icons8-mysql-48.png'
import react_image from '../../../../images/skills/icons8-react-native-48.png'
import symfony from '../../../../images/skills/icons8-symfony-48.png'
import wordpress from '../../../../images/skills/icons8-wordpress-48.png'
import css from '../../../../images/skills/icons8-css3-48.png'
import bulma_image from '../../../../images/skills/bulma-logo.png'
import * as React from 'react';
import LanguageContext, {common} from "../../Context/LanguageContext";
import {useContext} from "react";

import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function Skills(props) {
    const {language} = useContext(LanguageContext);
    return (
        <div id="3" className="content">
            <h2 className="title">{common[language].skill}</h2>
            <div className="skills">
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
                            spaceBetween={2}
                            slidesPerView={6}
                            loop={true}
                            autoplay={{ delay: 1000 }}
                            pagination={{clickable: true}}
                        >
                            <SwiperSlide>
                                <div className="">
                                    <img src={symfony}/>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <img src={html}/>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div>
                                    <img src={bootstrap}/>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div>
                                    <img src={javascript}/>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div>
                                    <img src={wordpress}/>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="">
                                    <img src={mysql}/>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <img src={php}/>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="">
                                    <img src={css}/>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="">
                                    <img src={bulma_image}/>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="">
                                    <img src={react_image}/>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};
