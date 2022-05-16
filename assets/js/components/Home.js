import React, {Component} from 'react';
import {AboutMe} from "./Components_Parts/Home_Components/About_Me";
import LanguageContext from "./Context/LanguageContext";
import Feedback from "./Components_Parts/Home_Components/Feedback";
import Services from "./Components_Parts/Home_Components/Services";
import dark_profil from "../../images/profil-black.png";
import NameProfession from "./Components_Parts/NameProfession";

class Home extends Component {
    static contextType = LanguageContext;
    render() {
        const language = this.context;
        return (
            <div className="page is-12 is-12-touch  column mt-4">
                <div className="demo-sticker">
                    <a>
                        <i className="fa fa-lightbulb-o" aria-hidden="true"></i>
                    </a>
                </div>
                <div className={"columns is- is-hidden-desktop  my-6"}>
                    <div className="column is-full profil-image  ">
                        <div className="circular--landscape m-auto d-block">
                            <img src={dark_profil}/>
                        </div>
                    </div>
                    <div className={"column is-full"}>
                        <NameProfession/>
                    </div>
                </div>
                <AboutMe lang={language}/>
                <Feedback/>
                <Services/>
            </div>
        )
    }
}

export default Home;
