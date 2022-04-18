import * as React from 'react';
import LanguageContext, {
    common
} from "../../Context/LanguageContext";
import {useContext} from "react";

import {Chrono} from "react-chrono";
import ThemeContext from "../../Context/ThemeContext";

export function Education(props) {
    const {language} = useContext(LanguageContext);
    const {theme} = useContext(ThemeContext)
    let output = [];
    // convert the json data to object
    const data = JSON.parse(JSON.stringify(common[language].education.elements))
    // merge all the object data to the empty array
    Object.keys(data).forEach(item => {
        output.push({
            title: data[item].year,
            cardTitle: "Dunkirk",
            url: "http://www.history.com",
            cardSubtitle: "Men of the British Expeditionary Force (BEF) wade out to..",
            cardDetailedText: data[item].text,
        })
    })

    const chronoTheme = theme ? {
        primary: "#FED700",
        secondary: "#212529",
        cardBgColor: "#000",
        cardForeColor: "#fff",
        titleColor: "#fff"
    } : {
        primary: "red",
        secondary: "blue",
        cardBgColor: "yellow",
        cardForeColor: "violet",
        titleColor: "red"
    };

    return (
        <div id="3" className="content">
            <h2 className="title">{common[language].education.title}</h2>
            <div className="columns services">
                <Chrono
                    hideControls={true}
                    slideShow
                    scrollable
                    mode="VERTICAL"
                    cardHeight={10}
                    useReadMore={true}
                    items={output}
                    theme={chronoTheme}
                />
            </div>
        </div>
    );
}
