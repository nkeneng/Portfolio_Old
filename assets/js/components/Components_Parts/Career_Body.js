import * as React from 'react';
import logo from '../../../Images/logo.jpg.png'

export default function Career_Body() {
    return (
        <div className="page is-12 column mt-4">
            <div id="1" className="content">
                <h2 className="title">Experience &nbsp; <i className="fa fa-briefcase"></i>
                </h2>
                <div className="columns">
                    <div className="column has-text-centered">
                        <p className="title is-4">2019 - present</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Asperiores eligendi esse expedita incidunt nihil. Aliquid
                            maxime minima natus officia reiciendis.</p>
                        <img src={logo} />
                    </div>
                    <div className="column has-text-centered">
                        <p className="title is-4">2019 - present</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Asperiores eligendi esse expedita incidunt nihil. Aliquid
                            maxime minima natus officia reiciendis.</p>
                        <img src={logo} />
                    </div>
                </div>
            </div>
            <div id="3" className="content">
                <h2 className="title">Education &nbsp; </h2>
                    {/*<img src="../Images/nav-icons/nav-icon-2-light.png" alt=""/></h2>*/}
                <div className="columns services">
                    <div className="column has-text-centered">
                        <p className="title is-4">2019 - present</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Asperiores eligendi esse expedita incidunt nihil. Aliquid
                            maxime minima natus officia reiciendis.</p>
                        <img src={logo} />
                    </div>
                    <div className="column has-text-centered">
                        <p className="title is-4">2019 - present</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Asperiores eligendi esse expedita incidunt nihil. Aliquid
                            maxime minima natus officia reiciendis.</p>
                        <img src={logo} />
                    </div>
                    <div className="column has-text-centered">
                        <p className="title is-4">2019 - present</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Asperiores eligendi esse expedita incidunt nihil. Aliquid
                            maxime minima natus officia reiciendis.</p>
                        <img src={logo} />
                    </div>
                </div>
            </div>
            <div id="3" className="content">
                <h2 className="title">Languages</h2>
                <div>
                    <div className="columns">
                        <div className="column">
                            <img src="https://img.icons8.com/cute-clipart/48/000000/usa.png"/>
                            <progress className="progress is-success" value="60" max="100">
                                60%
                            </progress>
                        </div>
                        <div className="column">
                            <img src="https://img.icons8.com/officel/48/000000/germany.png"/>
                            <progress className="progress is-warning" value="75" max="100">
                                75%
                            </progress>
                        </div>
                        <div className="column">
                            <img src="https://img.icons8.com/color/48/000000/france.png"/>
                            <progress className="progress is-danger" value="90" max="100">
                                90%
                            </progress>
                        </div>
                    </div>
                </div>
            </div>
            <div id="3" className="content">
                <h2 className="title">Skills</h2>
                <div className="skills">
                    <div className=" is-relative">
                        <div className="columns slide-track is-mobile">
                            <div className="column slide1 is-3-mobile">
                                <img src="https://img.icons8.com/color/48/000000/symfony.png"/>
                            </div>
                            <div className="column slide2 is-3-mobile">
                                <img src="https://img.icons8.com/color/48/000000/bootstrap.png"/>
                            </div>
                            <div className="column slide3 is-3-mobile">
                                <img src="https://img.icons8.com/color/48/000000/react-native.png"/>
                            </div>
                            <div className="column slide4 is-3-mobile">
                                {/*<img src="../Images/icons8-logo-php.svg" alt=""/>*/}
                            </div>
                            <div className="column slide5 is-3-mobile">
                                <img src="https://img.icons8.com/color/48/000000/html-5.png"/>
                            </div>
                            <div className="column slide6 is-3-mobile">
                                <img
                                    src="https://img.icons8.com/ios-filled/50/000000/mysql-logo.png"/>
                            </div>
                            <div className="column slide7 is-3-mobile">
                                <img
                                    src="https://img.icons8.com/ios-filled/50/000000/mysql-logo.png"/>
                            </div>
                            <div className="column slide8 is-3-mobile">
                                <img src="https://img.icons8.com/color/48/000000/css3.png"/>
                            </div>
                            <div className="column slide8 is-3-mobile">
                                <img src="https://img.icons8.com/color/48/000000/css3.png"/>
                            </div>
                            <div className="column slide8 is-3-mobile">
                                <img src="https://img.icons8.com/color/48/000000/css3.png"/>
                            </div>
                            <div className="column slide8 is-3-mobile">
                                <img src="https://img.icons8.com/color/48/000000/css3.png"/>
                            </div>
                            <div className="column slide8 is-3-mobile">
                                <img src="https://img.icons8.com/color/48/000000/css3.png"/>
                            </div>
                            <div className="column slide8 is-3-mobile">
                                <img src="https://img.icons8.com/color/48/000000/css3.png"/>
                            </div>
                            <div className="column slide8 is-3-mobile">
                                <img src="https://img.icons8.com/color/48/000000/css3.png"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};