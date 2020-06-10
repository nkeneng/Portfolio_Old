import light_profil from '../../../images/photo-profil.jpg'
import dark_profil from '../../../images/profil-black.jpg'
import ThemeSwitcher from "./Theme_Switcher";
import React, {Component} from 'react';
import ThemeContext from './../Context/ThemeContext';

class Header extends Component {
    static contextType = ThemeContext;

    constructor(props) {
        super(props);
    }

    render() {
        const {theme} = this.context;
        return (
            <div className="column Header">
                <ThemeSwitcher/>
                <div className="columns header-content is-absolute-bottom is-multiline ">
                    <div
                        className="column social-network is-two-fifths is-two-fifths-tablet is-full-mobile is-relative">
                        <div className="columns is-mobile is-absolute-centered-desktop">
                            <div className="column">
                                <img
                                    src="https://img.icons8.com/fluent/48/000000/facebook-new.png"/>
                            </div>
                            <div className="column">
                                <img src="https://img.icons8.com/color/48/000000/linkedin.png"/>

                            </div>
                            <div className="column">
                                <img src="https://img.icons8.com/color/48/000000/xing.png"/>

                            </div>
                            <div className="column">
                                <img src="https://img.icons8.com/color/48/000000/github-2.png"/>
                            </div>
                            <div className="column">
                                <img
                                    src="https://img.icons8.com/fluent/48/000000/instagram-new.png"/>
                            </div>
                        </div>
                    </div>
                    <div className="column profil-image is-hidden-mobile  is-one-fifth no-padding ">
                        <div className="circular--landscape">
                            <img
                                src={theme ? dark_profil : light_profil}/>
                        </div>
                    </div>
                    <div
                        className="column my-info-column is-absolute-centered-mobile is-one-fifth-tablet  is-two-fifths is-full-mobile">
                        <div className="my-info has-text-centered">
                            <div className="author-name ">
                                <h3 className="title is-2">About</h3>
                            </div>
                            <div className="profession mt-4 ">
                                <h4 id="change" className="title blue"></h4>
                            </div>
                            <div
                                className="button mt-14 download-mobile send  is-mobile-only is-medium">Download
                                CV
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;