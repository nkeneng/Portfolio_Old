import React from 'react';
import {Component} from "react";
import ThemeContext from './../Context/ThemeContext';
import {switchTheme} from "../CommonFunctions/Nav_Lang";
import DropdownContext from "../Context/DropdownContext";
import LanguageContext from "../Context/LanguageContext";


class ThemeSwitcher extends Component {
    static contextType = ThemeContext;

    constructor(props) {
        super(props);
    }


    render() {
        const {theme, setTheme} = this.context;
        switchTheme(theme);
        return (
            <LanguageContext.Consumer>{(languageContext) => (
                <DropdownContext.Consumer>{(dropdownContext) => {
                    const {language,setLanguage} = languageContext;
                    const {active,setActive} = dropdownContext;
                    let activeDropdown = 'navbar-item has-dropdown ' + (active ? 'is-active' : '');
                    let themeClass = "fa theme-switch " + (theme ? 'fa-toggle-on' : 'fa-toggle-off');
                    return (
                        <nav ref="navigation"
                             className="navbar desktop-theme-switcher is-hidden-mobile"
                             role="navigation" aria-label="dropdown navigation">
                            <div className="navbar-menu">
                                <div className="navbar-end">
                                    <a onClick={setTheme} className="navbar-item">
                                        <span>Theme &nbsp;</span> <i id="theme-switch"
                                                                     className={themeClass}/>
                                    </a>
                                    <div className={activeDropdown}>
                                        <a onClick={setActive}
                                           className="navbar-item">
                                            <span>Language &nbsp;</span> <i
                                            className="fa fa-globe"/>
                                        </a>
                                        <div className="navbar-dropdown  is-right">
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
                            </div>
                        </nav>
                    )
                }}
                </DropdownContext.Consumer>
            )}
            </LanguageContext.Consumer>
        );
    }
}

export default ThemeSwitcher;