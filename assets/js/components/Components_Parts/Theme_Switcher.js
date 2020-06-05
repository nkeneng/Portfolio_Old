// @flow
import * as React from 'react';
import {Component} from "react";

class ThemeSwitcher extends Component {

    constructor(props) {
        super(props);
        this.state = {
            active: false,
            theme: this.props.theme,
        };
    }

    // componentDidMount() {
    //     console.log(this.context)
    // }

    switchTheme() {
        this.setState({theme: this.state.theme === 'dark-mode' ? 'light-mode' : 'dark-mode'});
        document.getElementsByTagName('body')[0].classList.toggle("dark-mode");
        document.getElementsByTagName('body')[0].classList.toggle("light-mode");
    }

    render() {
        let activeDropdown = 'navbar-item has-dropdown ' + (this.state.active ? 'is-active' : '');
        let themeClass = "fa theme-switch " + (this.state.theme === 'dark-mode' ? 'fa-toggle-on' : 'fa-toggle-off');
        return (
            <nav ref="navigation" className="navbar desktop-theme-switcher is-hidden-mobile"
                 role="navigation" aria-label="dropdown navigation">
                <div className="navbar-menu">
                    <div className="navbar-end">
                        <a onClick={() => this.switchTheme()} className="navbar-item">
                            <span>Theme &nbsp;</span> <i id="theme-switch" className={themeClass}/>
                        </a>
                        <div className={activeDropdown}>
                            <a onClick={() => this.setState({active: !this.state.active})}
                               className="navbar-item">
                                <span>Language &nbsp;</span> <i className="fa fa-globe"/>
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
        );
    }

}

export default ThemeSwitcher;