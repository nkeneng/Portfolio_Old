import * as React from 'react';
import logo from "../../../../images/logo.jpg.png";


export function Education(props) {
    return (
        <div id="3" className="content">
            <h2 className="title">Education</h2>
            {/*<img src="../Images/nav-icons/nav-icon-2-light.png" alt=""/></h2>*/}
            <div className="columns services">
                <div className="column has-text-centered">
                    <h3 className="has-text-black title ">2019 - present</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Asperiores eligendi esse expedita incidunt nihil. Aliquid
                        maxime minima natus officia reiciendis.</p>
                    <img src={logo} />
                </div>
                <div className="column has-text-centered">
                    <h3 className="has-text-black title ">2019 - present</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Asperiores eligendi esse expedita incidunt nihil. Aliquid
                        maxime minima natus officia reiciendis.</p>
                    <img src={logo} />
                </div>
                <div className="column has-text-centered">
                    <h3 className="has-text-black title ">2019 - present</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Asperiores eligendi esse expedita incidunt nihil. Aliquid
                        maxime minima natus officia reiciendis.</p>
                    <img src={logo} />
                </div>
            </div>
        </div>
    );
};