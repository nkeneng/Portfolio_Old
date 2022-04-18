import * as React from 'react';
import {Component} from "react";
import ThemeContext from "../../Context/ThemeContext";
import {switchTheme} from "../../CommonFunctions/Nav_Lang";
import LanguageContext, {languages} from "../../Context/LanguageContext";
import {dest} from "./Nav_Utilities";
import NavLinksMobile from "./NavLinks_Mobile";

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
                const NavElements = dest.map((item, key) => (
                    <NavLinksMobile key={key} dest={item} active={true} id={key + 1}/>
                ));
                return (
                    <div className=" is-mobile-only column">
                        <div className=" is-mobile-only is-hidden header-nav">
                            <nav className="navbar is-fixed-top nav " role="navigation"
                                 aria-label="main navigation">
                                <div className="navbar-menu is-active columns mb-0 justify-content-around  ">
                                    {NavElements}
                                    {/*<div className={"column is-2"}>*/}
                                    {/*    <a onClick={setTheme} className="has-text-centered navbar-item">*/}
                                    {/*        <div><i className={themeClass + ' nav-icons'}/></div>*/}
                                    {/*        <span className="black-mobile">Theme</span>*/}
                                    {/*    </a>*/}
                                    {/*</div>*/}
                                    {/*<div className={"column is-2"}>*/}
                                    {/*    <a className="has-text-centered navbar-item">*/}
                                    {/*        <div><i className="fa fa-globe nav-icons"/></div>*/}
                                    {/*        <div className="select is-small">*/}
                                    {/*            <select value={language}*/}
                                    {/*                    onChange={(e) => setLanguage(e.target.options[e.target.selectedIndex].getAttribute('data-key'))}>{fields}</select>*/}
                                    {/*        </div>*/}
                                    {/*    </a>*/}
                                    {/*</div>*/}
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
