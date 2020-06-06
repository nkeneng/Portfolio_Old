import * as React from 'react';
import {useContext} from "react";
import ThemeContext from "../Context/ThemeContext";
import NavLinks from "./Navigation/NavLinks";

const dest = ['About', 'Career', 'Portfolio', 'Contact'];
export default function RightNav() {
    const {theme} = useContext(ThemeContext);
    const NavElements = dest.map((item, key) => (
        <NavLinks key={key} dest={item} active={true} id={key + 1}/>
    ));
    return (
        <div className="is-hidden-mobile right-navbar">
            <div className="columns menu-right has-text-centered is-multiline">
                {NavElements}
            </div>
        </div>
    );
};