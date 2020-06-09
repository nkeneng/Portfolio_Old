import React, {Component} from 'react';
import {FetchPortfolio} from "../../Api/Fetch_Portfolio";
import {PortfolioItem} from "../Portfolio_Components/Portfolio_Item";

class Feedback extends Component {

    state = {
        feedback: [],
        loading:true
    };

    async componentDidMount() {
        const feedback = await FetchPortfolio('feedback');
        this.setState({feedback});
    }

    render() {
        const {feedback} = this.state;
        const feedBackElements = feedback.map((feedback, key) => (
            <div key={key} id={"slide"+key+1} className="m-auto feedback ">
                <p className="has-text-centered">
                    {feedback.content}
                </p>
                <p className={"subtitle has-text-centered"}>{feedback.title}</p>
                <img className="is-block m-auto" src="../Images/logo.jpg.png" alt=""/>
            </div>
        ));
        return (
            <div className="content">
                <h2 className="title">Feedback</h2>
                {feedBackElements}
            </div>
        );
    }
}

export default Feedback;