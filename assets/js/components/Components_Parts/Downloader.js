// @flow
import * as React from 'react';
import LanguageContext, {common} from "../Context/LanguageContext";
import {useContext} from "react";

export default function Downloader() {
    const {language} = useContext(LanguageContext);
    return (
        <div className=" is-hidden-touch has-text-centered title is-4 downloader">
            <span>{common[language].downloader.first} &nbsp;</span>
            <span>{common[language].downloader.second}</span>
            <i className="fa fa-download"/>
        </div>

    );
};
