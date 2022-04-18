import nav_icon_1_dark from '../../../../images/nav-icons/nav-icon-1-dark.png'
import nav_icon_1_light from '../../../../images/nav-icons/nav-icon-1-light.png'
import nav_icon_2_dark from '../../../../images/nav-icons/nav-icon-2-dark.png'
import nav_icon_2_light from '../../../../images/nav-icons/nav-icon-2-light.png'
import nav_icon_3_dark from '../../../../images/nav-icons/nav-icon-3-dark.png'
import nav_icon_3_light from '../../../../images/nav-icons/nav-icon-3-light.png'
import nav_icon_4_dark from '../../../../images/nav-icons/nav-icon-4-dark.png'
import nav_icon_4_light from '../../../../images/nav-icons/nav-icon-4-light.png'

import * as React from 'react';
import {useContext} from "react";
import ThemeContext from "../../Context/ThemeContext";

export function RenderImage({id, isMobile}) {

    switch (id) {
        case 1: {
            return <i className="fa fa-user"></i>
        }
        case 2: {
            return <i className="fa fa-user"></i>
        }
        case 3: {
            return <i className="fa fa-user"></i>
        }
        case 4: {
            return <i className="fa fa-user"></i>
        }
    }
}
