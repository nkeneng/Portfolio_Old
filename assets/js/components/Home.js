import React, {Component} from 'react';
import {AboutMe} from "./Components_Parts/Home_Components/About_Me";
import {Hobby} from "./Components_Parts/Hobby";
import LanguageContext from "./Context/LanguageContext";
import Feedback from "./Components_Parts/Home_Components/Feedback";
import Services from "./Components_Parts/Home_Components/Services";

class Home extends Component {
    static contextType = LanguageContext;
    render() {
        const language = this.context;
        return (
            <div className=" page is-12 column mt-4">
                <AboutMe lang={language}/>
                <Feedback/>
                <Services/>
                <Hobby lang={language}/>
            </div>
        )
    }
}

export default Home;