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
        <div className={"column is-2"}>
                <NavLink
                    className={(navData) => (navData.isActive ? "active-mobile navbar-item mobile-navitem m-auto" : 'navbar-item mobile-navitem m-auto')}
                    exact="true" to={destination}>
                    <RenderImage id={id} isMobile={true}/>
                </NavLink>
        </div>
    );
}
