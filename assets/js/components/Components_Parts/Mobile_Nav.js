import nav_icon_1_light from '../../../images/nav-icons/nav-icon-1-light.png'
import nav_icon_2_light from '../../../images/nav-icons/nav-icon-2-light.png'
import nav_icon_3_light from '../../../images/nav-icons/nav-icon-3-light.png'
import nav_icon_4_light from '../../../images/nav-icons/nav-icon-4-light.png'

import * as React from 'react';
import {Component} from "react";
import {NavLink} from "react-router-dom";
import ThemeContext from "../Context/ThemeContext";
import {switchTheme} from "../CommonFunctions/Nav_Lang";
import LanguageContext, {languages} from "../Context/LanguageContext";

class MobileNav extends Component {
    static contextType = ThemeContext;

    constructor(props) {
        super(props);
    }

    render() {
        const {theme, setTheme} = this.context;
        switchTheme(theme);
        let themeClass = "fa " + (theme ? 'fa-toggle-on' : 'fa-toggle-off');
        return (
            <LanguageContext.Consumer>{(languageContext) => {
                const {language, setLanguage} = languageContext;
                const fields = Object.entries(languages).map(([key, value]) => (
                    <option data-key={key} key={key}>{value}</option>
                ));
                return (
                    <div className=" is-mobile-only column">
                        <div className=" is-mobile-only is-hidden header-nav">
                            <nav className="navbar is-fixed-top nav " role="navigation"
                                 aria-label="main navigation">
                                <div className="navbar-menu is-active ">
                                    <NavLink className="navbar-item" exact to="/">
                                        <img className="is-block m-auto"
                                             src={nav_icon_1_light}
                                             alt=""/>
                                        <span className="black-mobile">About</span>
                                    </NavLink>
                                    <NavLink className="navbar-item" exact to="/career">
                                        <img className="is-block m-auto"
                                             src={nav_icon_2_light}
                                             alt=""/>
                                        <span className="black-mobile">Career</span>
                                    </NavLink>
                                    <NavLink className="navbar-item" exact to="/portfolio">
                                        <img className="is-block m-auto"
                                             src={nav_icon_3_light}
                                             alt=""/>
                                        <span className="black-mobile">Portfolio</span>
                                    </NavLink>
                                    <NavLink className="navbar-item" exact to="/contact">
                                        <img className="is-block m-auto"
                                             src={nav_icon_4_light}
                                             alt=""/>
                                        <span className="black-mobile">Contact</span>
                                    </NavLink>
                                    <a onClick={setTheme}
                                       className="has-text-centered navbar-item">
                                        <div><i className={themeClass}/></div>
                                        <span className="black-mobile">Theme</span>
                                    </a>
                                       <a className="has-text-centered navbar-item">
                                           <div><i className="fa fa-globe"/></div>
                                           <div className="select is-small">
                                               <select value={language}
                                                       onChange={(e) => setLanguage(e.target.options[e.target.selectedIndex].getAttribute('data-key'))}>{fields}</select>
                                           </div>
                                       </a>
                                </div>
                            </nav>
                        </div>
                    </div>
                )
            }}</LanguageContext.Consumer>
        );
    }
}

export default MobileNav;