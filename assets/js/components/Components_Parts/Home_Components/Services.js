import React, {Component} from 'react';
import {FetchPortfolio} from "../../Api/Api";
import LanguageContext from "../../Context/LanguageContext";
import {ApiLanguages} from "./Feedback";


class Services extends Component {
    static contextType = LanguageContext;
    state = {
        services: [],
        loading:true
    };

    async componentDidMount() {
        const services = await FetchPortfolio('services');
        this.setState({services});
    }

    render() {
        const {language} = this.context;
        const {services} = this.state;
        const servicesElements = services.map((service, key) => (
            <div className="column has-text-centered">
                <h3 className="has-text-black">{service.title[ApiLanguages[language]]}</h3>
                <p>
                    {service.content[ApiLanguages[language]]}
                </p>
            </div>
        ));
        return (
            <div className="content">
                <h2 className="title">My Services</h2>
                <div className="columns">
                    {servicesElements}
                </div>
            </div>
        );
    }
}

export default Services;