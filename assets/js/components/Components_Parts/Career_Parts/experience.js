import React, {Component} from 'react';
import logo from "../../../../images/logo.jpg.png";
import {FetchPortfolio} from "../../Api/Fetch_Portfolio";

class Experience extends Component {

    state = {
        experiences: [],
        loading:true
    };

    async componentDidMount() {
        const experiences = await FetchPortfolio('experience');
        this.setState({experiences});
    }


    render() {
        const {experiences} = this.state;
        const experiencesElements = experiences.map((experience, key) => (
            <div className="column has-text-centered">
                <p className="title is-4">{experience.startDate} - {experience.endDate}</p>
                <p className="has-text-black">{experience.title}</p>
                <p>{experience.content}</p>
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