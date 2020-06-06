import * as React from 'react';
import {Component} from "react";
import {NavLink} from "react-router-dom";
import ThemeContext from "../Context/ThemeContext";
import {switchTheme} from "../CommonFunctions/Nav_Lang";
import DropdownContext from "../Context/DropdownContext";
import LanguageContext from "../Context/LanguageContext";

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
            <LanguageContext.Consumer>{(languageContext) => (
                <DropdownContext.Consumer>{(dropdownContext) => {
                    const {language, setLanguage} = languageContext;
                    const {active, setActive} = dropdownContext;
                    let dropdownClass = "navbar-dropdown " + (!active ? 'is-hidden' : '');
                    return (
                        <div className=" is-mobile-only column">
                            <div className=" is-mobile-only is-hidden header-nav">
                                <nav className="navbar is-fixed-top nav " role="navigation"
                                     aria-label="main navigation">
                                    <div className="navbar-menu is-active ">
                                        <NavLink activeClassName="active" exact to="/">
                                            <img className="is-block m-auto"
                                                 src="../Images/nav-icons/nav-icon-1-light.png"
                                                 alt=""/>
                                            <img id="icon2" alt=""/>
                                            <span className="black-mobile">About</span>
                                        </NavLink>
                                        <NavLink activeClassName="active" exact to="/career">
                                            <img className="is-block m-auto"
                                                 src="../Images/nav-icons/nav-icon-1-light.png"
                                                 alt=""/>
                                            <img id="icon2" alt=""/>
                                            <span className="black-mobile">Career</span>
                                        </NavLink>
                                        <NavLink activeClassName="active" exact to="/portfolio">
                                            <img className="is-block m-auto"
                                                 src="../Images/nav-icons/nav-icon-1-light.png"
                                                 alt=""/>
                                            <img id="icon2" alt=""/>
                                            <span className="black-mobile">Portfolio</span>
                                        </NavLink>
                                        <NavLink activeClassName="active" exact to="/contact">
                                            <img className="is-block m-auto"
                                                 src="../Images/nav-icons/nav-icon-1-light.png"
                                                 alt=""/>
                                            <img id="icon2" alt=""/>
                                            <span className="black-mobile">Contact</span>
                                        </NavLink>
                                        <a onClick={setTheme}
                                           className="navbar-item  has-text-centered">
                                            <i className={themeClass}/>
                                            <span className="black-mobile">Theme</span>
                                        </a>
                                        <div onClick={setActive}>
                                            <a className="navbar-item  has-text-centered">
                                                <i className="fa fa-globe"/>
                                                <span className="black-mobile">Language</span>
                                            </a>
                                            <div id="language-list-mobile"
                                                 className={dropdownClass}>
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
                    )
                }}
                </DropdownContext.Consumer>
            )}
            </LanguageContext.Consumer>
        );
    }
}

export default MobileNav;