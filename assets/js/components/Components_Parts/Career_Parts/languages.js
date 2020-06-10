import * as React from 'react';
import logo from "../../../../images/logo.jpg.png";


export function Languages(props) {
    return (
        <div id="3" className="content">
            <h2 className="title">Languages</h2>
            <div>
                <div className="columns">
                    <div className="column">
                        <img src="https://img.icons8.com/cute-clipart/48/000000/usa.png"/>
                        <progress className="progress is-success" value="60" max="100">
                            60%
                        </progress>
                    </div>
                    <div className="column">
                        <img src="https://img.icons8.com/officel/48/000000/germany.png"/>
                        <progress className="progress is-warning" value="75" max="100">
                            75%
                        </progress>
                    </div>
                    <div className="column">
                        <img src="https://img.icons8.com/color/48/000000/france.png"/>
                        <progress className="progress is-danger" value="90" max="100">
                            90%
                        </progress>
                    </div>
                </div>
            </div>
        </div>
    );
};