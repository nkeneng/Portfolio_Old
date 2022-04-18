import * as React from 'react';
import LanguageContext,{common}
    from "../../Context/LanguageContext";
import {useContext} from "react";


export function LeftInfo(props) {
    const {language} = useContext(LanguageContext);
    return (
        <div className="column is-6 has-text-left">
            <h1 className="title is-2">{common[language].contact.title}</h1>
            <p className={"mb-4"}>{common[language].contact.sideText}</p>
            <div className="social-media">
                <a href="https://facebook.com" target="_blank"
                   className="button is-light is-medium mr-3">
                    <i className="fa fa-facebook-square" aria-hidden="true"/>
                </a>
                <a href="https://instagram.com" target="_blank"
                   className="button is-light is-medium mr-3">
                    <i className="fa fa-instagram" aria-hidden="true"/>
                </a>
                <a href="https://twitter.com" target="_blank"
                   className="button is-light is-medium mr-3">
                    <i className="fa fa-linkedin" aria-hidden="true"/>
                </a>
                <a href="https://twitter.com" target="_blank"
                   className="button is-light is-medium">
                    <i className="fa fa-xing" aria-hidden="true"/>
                </a>
            </div>
        </div>
    );
}
