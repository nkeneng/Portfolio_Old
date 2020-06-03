import * as React from 'react';
import Switch from "react-router-dom/es/Switch";
import Home from "../Home";
import Contact from "../Contact";
import {Route,NavLink} from 'react-router-dom'
import {Link} from "react-router-dom";

export default function RightNav() {
    return (
        <div className="is-hidden-mobile right-navbar">
            <div className="columns menu-right has-text-centered is-multiline">
                <div className="column">
                    <NavLink exact to="/" activeClassName="active">
                        {/*<a className="is-active" href="../index.php">*/}
                        <img id="icon1" alt=""/>
                        <p>About</p>
                        {/*</a>*/}
                    </NavLink>
                </div>
                <div className="column">
                    <NavLink exact to="/contact" activeClassName="active">
                        {/*<a className="is-active" href="../index.php">*/}
                        <img id="icon2" alt=""/>
                        <p>Contact</p>
                        {/*</a>*/}
                    </NavLink>
                </div>
            </div>
            <Route render={({location}) => (
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/contact" component={Contact}/>
                </Switch>
            )}/>
        </div>
    );
};