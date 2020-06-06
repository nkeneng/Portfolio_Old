import hobby_1_dark from '../../../images/hobbys/hobby-1-dark.png'
import hobby_1_light from '../../../images/hobbys/hobby-1-light.png'
import hobby_2_dark from '../../../images/hobbys/hobby-2-dark.png'
import hobby_2_light from '../../../images/hobbys/hobby-2-light.png'
import hobby_3_dark from '../../../images/hobbys/hobby-3-dark.png'
import hobby_3_light from '../../../images/hobbys/hobby-3-light.png'
import hobby_4_dark from '../../../images/hobbys/hobby-4-dark.png'
import hobby_4_light from '../../../images/hobbys/hobby-4-light.png'
import hobby_5_dark from '../../../images/hobbys/hobby-5-dark.png'
import hobby_5_light from '../../../images/hobbys/hobby-5-light.png'


import * as React from 'react';
import {useContext} from "react";
import ThemeContext from "../Context/ThemeContext";

export function Hobby() {
    const {theme} = useContext(ThemeContext);
    return (
        <div id="2" className="content">
            <h2 className="title"> Hobbys </h2>
            <div className="columns is-mobile hobby is-multiline">
                <div className="column is-6-mobile ">
                    <p className="has-text-centered">Gaming</p>
                    <img src={theme ? hobby_1_dark : hobby_1_light} id="hobby-1" className="is-block m-auto"
                         alt=""/>
                </div>
                <div className="column is-6-mobile ">
                    <p className="has-text-centered">Movies</p>
                    <img id="hobby-2" src={theme ? hobby_2_dark : hobby_2_light} className="is-block m-auto"
                         alt=""/>
                </div>
                <div className="column is-6-mobile ">
                    <p className="has-text-centered">Music</p>
                    <img id="hobby-3" src={theme ? hobby_3_dark : hobby_3_light} className="is-block m-auto"
                         alt=""/>
                </div>
                <div className="column is-6-mobile ">
                    <p className="has-text-centered">Coding</p>
                    <img id="hobby-4" src={theme ? hobby_4_dark : hobby_4_light} className="is-block m-auto"
                         alt=""/>
                </div>
                <div className="column is-6-mobile ">
                    <p className="has-text-centered">Sport</p>
                    <img id="hobby-5" src={theme ? hobby_5_dark : hobby_5_light} className="is-block m-auto"
                         alt=""/>
                </div>
            </div>
        </div>
    );
};