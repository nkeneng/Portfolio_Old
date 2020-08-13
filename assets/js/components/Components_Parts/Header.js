import light_profil from '../../../images/photo-profil.jpg'
import dark_profil from '../../../images/profil-black.jpg'
import facebook_image from '../../../images/social-icons/icons8-facebook-48.png'
import git_image from '../../../images/social-icons/icons8-git-48.png'
import instagram_image from '../../../images/social-icons/icons8-instagram-48.png'
import linkedin_image from '../../../images/social-icons/icons8-linkedin-48.png'
import xing_image from '../../../images/social-icons/icons8-xing-48.png'
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
            <div className="column is-12-touch blur">
                <div className=" Header">
                </div>
               <div className="themeSwitch">
                   <ThemeSwitcher/>
               </div>
                <div className="columns header-content is-absolute-bottom is-multiline ">
                    <div
                        className="column  social-network  is-two-fifths  is-full-mobile is-relative">
                        <div className="columns is-mobile is-absolute-centered-desktop">
                            <div className="column">
                                <img className="gray"
                                     src={facebook_image} alt="facebook icon"/>
                            </div>
                            <div className="column">
                                <img className="gray"
                                     src={instagram_image} alt="instagram icon"/>

                            </div>
                            <div className="column">
                                <img className="gray"
                                     src={linkedin_image} alt="linkedin icon"/>

                            </div>
                            <div className="column">
                                <img className="gray"
                                     src={git_image} alt="git icon"/>
                            </div>
                            <div className="column">
                                <img className="gray"
                                     src={xing_image} alt="xing icon"/>
                            </div>
                        </div>
                    </div>
                    <div
                        className="column profil-image is-hidden-touch is-hidden-tablet-only  is-one-fifth no-padding ">
                        <div className="circular--landscape">
                            <img
                                src={theme ? dark_profil : light_profil}/>
                        </div>
                    </div>
                    <div
                        className="column my-info-column is-absolute-centered-mobile is-one-fifth-tablet  is-two-fifths is-full-mobile">
                        <div className="my-info has-text-centered">
                            <div className="author-name ">
                                <h3 className="title is-2">Steven Nkeneng</h3>
                            </div>
                            <div className="profession mt-4 ">
                                <h4 id="change" className="title blue"></h4>
                            </div>
                        </div>
                        <div
                            className="button mt-14 download-mobile send  is-mobile-only is-medium">Download
                            CV
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Header;
