import * as React from 'react';
import {NavLink} from "react-router-dom";
import {useContext} from "react";
import LanguageContext from "../../Context/LanguageContext";
import {NavLabels} from "./Nav_Utilities";
import {RenderImage} from "./Render_Image";


export default function NavLinksMobile({dest, active, id}) {
    const {language} = useContext(LanguageContext);
    const destination = '/' + dest.toLowerCase();
    return (
        <NavLink activeClassName='active-mobile' className="navbar-item" exact to={destination}>
            <RenderImage id={id} isMobile={true}/>
            <span className="black-mobile">{NavLabels[id - 1][language]}</span>
        </NavLink>
    );
}