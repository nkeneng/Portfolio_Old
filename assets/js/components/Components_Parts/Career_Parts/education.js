import * as React from 'react';
import logo
    from "../../../../images/logo.jpg.png";
import LanguageContext, {
    ApiLanguages,
    common
} from "../../Context/LanguageContext";
import {useContext} from "react";

export function Education(props) {
    const {language} = useContext(LanguageContext);
    let output = [];
    // convert the json data to object
    const data = JSON.parse(JSON.stringify(common[language].education.elements))
    // merge all the object data to the empty array
    Object.keys(data).forEach(item => {
        output.push({
            year: data[item].year,
            text: data[item].text
        })
    })
    const educationElements = output.map((item, key) => (
        <div key={key}
             className="column has-text-centered">
            <h3 className="has-text-black title ">{item.year}</h3>
            <p>{item.text}</p>
            <img src={logo}/>
        </div>
    ));
    return (
        <div id="3" className="content">
            <h2 className="title">{common[language].education.title}</h2>
            <div className="columns services">
                {educationElements}
            </div>
        </div>
    );
}
