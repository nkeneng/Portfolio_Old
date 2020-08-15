import * as React from 'react';
import {common} from "../../Context/LanguageContext"

export function AboutMe({lang}) {
    const{language} = lang;
    return (
        <div className="content">
            <h2 className="title">{common[language].about.title}</h2>
            <h4 className="has-text-black">{common[language].about.subtitle}</h4>
            <div className="mt-2">
                <p>
                    {common[language].about.text}
                </p>
            </div>
        </div>
    );
}
