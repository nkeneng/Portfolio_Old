import * as React from 'react';
import logo from "../../../../images/logo.jpg.png";


export function Education(props) {
    return (
        <div id="3" className="content">
            <h2 className="title">Education &nbsp; </h2>
            {/*<img src="../Images/nav-icons/nav-icon-2-light.png" alt=""/></h2>*/}
            <div className="columns services">
                <div className="column has-text-centered">
                    <p className="title is-4">2019 - present</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Asperiores eligendi esse expedita incidunt nihil. Aliquid
                        maxime minima natus officia reiciendis.</p>
                    <img src={logo} />
                </div>
                <div className="column has-text-centered">
                    <p className="title is-4">2019 - present</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Asperiores eligendi esse expedita incidunt nihil. Aliquid
                        maxime minima natus officia reiciendis.</p>
                    <img src={logo} />
                </div>
                <div className="column has-text-centered">
                    <p className="title is-4">2019 - present</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Asperiores eligendi esse expedita incidunt nihil. Aliquid
                        maxime minima natus officia reiciendis.</p>
                    <img src={logo} />
                </div>
            </div>
        </div>
    );
};