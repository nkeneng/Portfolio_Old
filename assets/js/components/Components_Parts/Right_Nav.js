import * as React from 'react';
import {NavLink} from "react-router-dom";

export default function RightNav() {
    return (
            <div className="is-hidden-mobile right-navbar">
                <div className="columns menu-right has-text-centered is-multiline">
                    <NavLink activeClassName="active"  exact to="/" >
                        <div className="column">
                            {/*<a className="is-active" href="../index.php">*/}
                            <img id="icon1" alt=""/>
                            <p>About</p>
                            {/*</a>*/}
                        </div>
                    </NavLink>
                    <NavLink activeClassName="active" exact to="/contact" >
                        <div className="column">
                            {/*<a className="is-active" href="../index.php">*/}
                            <img id="icon2" alt=""/>
                            <p>Contact</p>
                            {/*</a>*/}
                        </div>
                    </NavLink>
                    <NavLink activeClassName="active" exact to="/career" >
                        <div className="column">
                            {/*<a className="is-active" href="../index.php">*/}
                            <img id="icon2" alt=""/>

                            <p>Career</p>
                            {/*</a>*/}
                        </div>
                    </NavLink>
                    <NavLink activeClassName="active" exact to="/portfolio" >
                        <div className="column">
                            {/*<a className="is-active" href="../index.php">*/}
                            <img id="icon2" alt=""/>
                            <p>Portfolio</p>
                            {/*</a>*/}
                        </div>
                    </NavLink>
                </div>
            </div>
    );
};