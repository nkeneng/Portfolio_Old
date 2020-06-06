import * as React from 'react';
import {NavLink} from "react-router-dom";
import {RenderImage} from "./Render_Image";
import {useContext} from "react";
import LanguageContext from "../../Context/LanguageContext";

const links = [
    {
        'English': "About",
        "Deutsch": 'Über mich',
        "Francais": 'A propos'
    },
    {
        'English': "Career",
        "Deutsch": 'Karriere',
        "Francais": 'Carrière'
    },
    {
        'English': "Portfolio",
        "Deutsch": 'Portfolio',
        "Francais": 'Portfolio'
    },
    {
        'English': "Contact",
        "Deutsch": 'Kontakt',
        "Francais": 'Contact'
    }
];

export default function NavLinks({dest, active, id}) {
    const {language} = useContext(LanguageContext);
    const destination = '/' + dest.toLowerCase();
    return (
        <NavLink activeClassName={active ? 'active' : ''} exact to={destination}>
            <div className="column">
                <RenderImage id={id}/>
                <p>{links[id-1][language]}</p>
            </div>
        </NavLink>
    );
}