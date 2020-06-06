import React from 'react';
import {Component} from "react";
import ThemeContext from './../Context/ThemeContext';
import {switchTheme} from "../CommonFunctions/Nav_Lang";
import LanguageContext from "../Context/LanguageContext";
import {languages} from "../Context/LanguageContext"

class ThemeSwitcher extends Component {
    static contextType = ThemeContext;

    constructor(props) {
        super(props);
    }


    render() {
        const {theme, setTheme} = this.context;
        switchTheme(theme);
        return (
            <LanguageContext.Consumer>{(languageContext) => {
                const {language, setLanguage} = languageContext;
                const fields = Object.entries(languages).map(([key, value]) => (
                    <option data-key={key} key={key}>{value}</option>
                ));
                let themeClass = "fa theme-switch " + (theme ? 'fa-toggle-on' : 'fa-toggle-off');
                return (
                    <nav className="navbar desktop-theme-switcher is-hidden-mobile"
                         role="navigation" aria-label="dropdown navigation">
                        <div className="navbar-menu">
                            <div className="navbar-end">
                                <div>
                                    <a onClick={setTheme} className="navbar-item">
                                        <span>Theme &nbsp;</span> <i id="theme-switch"
                                                                     className={themeClass}/>
                                    </a>
                                </div>
                                <div className="control columns">
                                    <div className="select column is-small">
                                        <select value={language}
                                                onChange={(e) => setLanguage(e.target.options[e.target.selectedIndex].getAttribute('data-key'))}>{fields}</select>
                                    </div>
                                    <div className="column globe-icon">
                                        <i className="fa fa-globe"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                )}}
            </LanguageContext.Consumer>
        );
    }
}

export default ThemeSwitcher;