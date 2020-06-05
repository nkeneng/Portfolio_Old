// @flow
import * as React from 'react';
import {Component} from "react";
import {NavLink} from "react-router-dom";

class MobileNav extends Component {

    constructor(props) {
        super(props);
        this.state = {
            theme: this.props.theme,
        };
    }

    switchTheme() {
        this.setState({theme: this.state.theme==='dark-mode' ? 'light-mode':'dark-mode'});
        document.getElementsByTagName('body')[0].classList.toggle("dark-mode");
        document.getElementsByTagName('body')[0].classList.toggle("light-mode");
    }

    render() {
        let themeClass = "fa " + (this.props.theme === 'dark-mode' ? 'fa-toggle-on': 'fa-toggle-off');
        return (
            <div className=" is-mobile-only column">
                <div className=" is-mobile-only is-hidden header-nav">
                    <nav className="navbar is-fixed-top nav " role="navigation"
                         aria-label="main navigation">
                        <div className="navbar-menu is-active ">
                            <NavLink activeClassName="active" exact to="/" >
                                <img className="is-block m-auto"
                                     src="../Images/nav-icons/nav-icon-1-light.png" alt=""/>
                                    <img id="icon2" alt=""/>
                                <span className="black-mobile">About</span>
                            </NavLink>
                            <NavLink activeClassName="active" exact to="/career" >
                                <img className="is-block m-auto"
                                     src="../Images/nav-icons/nav-icon-1-light.png" alt=""/>
                                <img id="icon2" alt=""/>
                                <span className="black-mobile">Career</span>
                            </NavLink>
                            <NavLink activeClassName="active" exact to="/portfolio" >
                                <img className="is-block m-auto"
                                     src="../Images/nav-icons/nav-icon-1-light.png" alt=""/>
                                <img id="icon2" alt=""/>
                                <span className="black-mobile">Portfolio</span>
                            </NavLink>
                            <NavLink activeClassName="active" exact to="/contact" >
                                <img className="is-block m-auto"
                                     src="../Images/nav-icons/nav-icon-1-light.png" alt=""/>
                                <img id="icon2" alt=""/>
                                <span className="black-mobile">Contact</span>
                            </NavLink>
                            <a onClick={() => this.switchTheme()}
                               id="theme-switch-mobile" className="navbar-item  has-text-centered">
                                <i className={themeClass}/>
                                <span className="black-mobile">Theme</span>
                            </a>
                            <div>
                                <a className="navbar-item  has-text-centered">
                                    <i className="fa fa-globe"/>
                                    <span className="black-mobile">Language</span>
                                </a>
                                <div id="language-list-mobile" className="navbar-dropdown is-hidden">
                                    <a className="navbar-item">
                                        English
                                    </a>
                                    <a className="navbar-item">
                                        Francais
                                    </a>
                                    <a className="navbar-item">
                                        Deutsch
                                    </a>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        );
    }
}

export default MobileNav;