import * as React from 'react';
import {NavLink} from "react-router-dom";
import {RenderImage} from "./Render_Image";
import {useContext} from "react";
import LanguageContext from "../../Context/LanguageContext";
import {NavLabels} from "./Nav_Utilities";


export default function NavLinks({dest, active, id}) {
    const {language} = useContext(LanguageContext);
    const destination = '/' + dest.toLowerCase();
    return (
        <NavLink
            className={(navData) => (navData.isActive ? "active" : '')}
            exact="true" to={destination}>
            <div className="column icons">
                <RenderImage id={id} isMobile={false}/>
                <p>{NavLabels[id - 1][language]}</p>
            </div>
        </NavLink>
    );
}
