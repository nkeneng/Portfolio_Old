import * as React from 'react';
import NavLinks from "./NavLinks";
import {dest} from "./Nav_Utilities";

export default function RightNav() {
    const NavElements = dest.map((item, key) => (
        <NavLinks key={key} dest={item} id={key + 1}/>
    ));
    return (
        <div className="is-hidden-mobile right-navbar">
            <div className="columns menu-right has-text-centered is-multiline">
                {NavElements}
            </div>
        </div>
    );
};