import nav_icon_1_dark from '../../../images/nav-icons/nav-icon-1-dark.png'
import nav_icon_1_light from '../../../images/nav-icons/nav-icon-1-light.png'
import nav_icon_2_dark from '../../../images/nav-icons/nav-icon-2-dark.png'
import nav_icon_2_light from '../../../images/nav-icons/nav-icon-2-light.png'
import nav_icon_3_dark from '../../../images/nav-icons/nav-icon-3-dark.png'
import nav_icon_3_light from '../../../images/nav-icons/nav-icon-3-light.png'
import nav_icon_4_dark from '../../../images/nav-icons/nav-icon-4-dark.png'
import nav_icon_4_light from '../../../images/nav-icons/nav-icon-4-light.png'

import * as React from 'react';
import {NavLink} from "react-router-dom";
import {useContext} from "react";
import ThemeContext from "../Context/ThemeContext";

export default function RightNav() {
    const {theme} = useContext(ThemeContext);
    return (
        <div className="is-hidden-mobile right-navbar">
            <div className="columns menu-right has-text-centered is-multiline">
                <NavLink activeClassName="active" exact to="/">
                    <div className="column">
                        <img id="icon1" src={theme ? nav_icon_1_dark : nav_icon_1_light} alt=""/>
                        <p>About</p>
                    </div>
                </NavLink>
                <NavLink activeClassName="active" exact to="/contact">
                    <div className="column">
                        <img id="icon2" src={theme ? nav_icon_2_dark : nav_icon_2_light} alt=""/>
                        <p>Contact</p>
                    </div>
                </NavLink>
                <NavLink activeClassName="active" exact to="/career">
                    <div className="column">
                        <img id="icon3" src={theme ? nav_icon_3_dark : nav_icon_3_light} alt=""/>
                        <p>Career</p>
                    </div>
                </NavLink>
                <NavLink activeClassName="active" exact to="/portfolio">
                    <div className="column">
                        <img id="icon4" src={theme ? nav_icon_4_dark : nav_icon_4_light} alt=""/>
                        <p>Portfolio</p>
                    </div>
                </NavLink>
            </div>
        </div>
    );
};