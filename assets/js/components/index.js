import React, {Component} from 'react';
import Header from './Components_Parts/Header';
import RightNav from './Components_Parts/Navigation/Right_Nav';
import Downloader from './Components_Parts/Downloader';
import {Route, Switch} from "react-router-dom";
import Contact from "./Contact";
import Home from "./Home";
import MobileNav from "./Components_Parts/Navigation/Mobile_Nav";
import Career from "./Career";
import Portfolio from "./Portfolio";
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import ThemeContext from './Context/ThemeContext';


class Index extends Component {
    static contextType = ThemeContext;

    constructor(props) {
        super(props);
        this.state = {
            prevDepth: this.getDepth(this.props.location)
        };
    }

    getDepth(location) {
        let pathArray = location.pathname.split("/")
        pathArray = pathArray.filter(n => n !== "");
        return pathArray.length;
    }

    render() {

        const location = this.props.location;
        const timeout = {enter: 4500, exit: 1000};
        const currentKey = location.pathname.split("/")[1] || "/";
        return (
            <section className="Container is-relative is-relative">
                <RightNav/>
                <Downloader/>
                <div className="columns is-mobile container-1 is-multiline ">
                    <Header/>
                    <div className="column is-12-touch page-content">
                        <div className="columns is-multiline content-container">
                            <MobileNav/>
                            <div className="column is-12">
                                <Route  render={({location}) => (
                                    <TransitionGroup>
                                        <CSSTransition
                                            key={currentKey}
                                            timeout={timeout}
                                            classNames="fade"
                                            mountOnEnter={true}
                                            UnmountOnExit={false}
                                        >
                                            <div
                                                className={this.getDepth(location) - this.state.prevDepth >= 0 ? "left" : "right"}>
                                                <Switch location={location}>
                                                    <Route exact path="/"
                                                           component={Home}/>
                                                    <Route exact path="/about"
                                                           component={Home}/>
                                                    <Route path="/contact"
                                                           component={Contact}/>
                                                    <Route path="/career"
                                                           component={Career}/>
                                                    <Route path="/portfolio"
                                                           component={Portfolio}/>
                                                </Switch>
                                            </div>
                                        </CSSTransition>
                                    </TransitionGroup>
                                )}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Index;