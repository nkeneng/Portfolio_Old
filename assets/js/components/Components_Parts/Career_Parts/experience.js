import React, {Component} from 'react';
import {FetchPortfolio} from "../../Api/Api";
import LanguageContext,{ApiLanguages}
    from "../../Context/LanguageContext";

class Experience extends Component {
    static contextType = LanguageContext;
    state = {
        experiences: [],
        loading:true,
        active: 1
    };

    async componentDidMount() {
        const experiences = await FetchPortfolio('experience');
        this.setState({experiences});
    }


    render() {
        const {language} = this.context;
        const {experiences} = this.state;
        const experiencesElements = experiences.map((experience, key) => (
            <div key={key} className="column has-text-centered">
                <p className="title is-4">{experience.startDate} - {experience.endDate}</p>
                <p className="has-text-black">{experience.title[ApiLanguages[language]]}</p>
                <p>{experience.content[ApiLanguages[language]]}</p>
                <img src={'../images/'+ experience.image} />
            </div>
        ));
        return (
            <div id="1" className="content">
                <h2 className="title">Experience
                </h2>
                <div className="columns">
                    {experiencesElements}
                </div>
            </div>
        );
    }
}

export default Experience;
