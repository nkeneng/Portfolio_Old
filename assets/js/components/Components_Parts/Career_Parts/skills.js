import bootstrap from '../../../../images/skills/icons8-bootstrap-48.png'
import html from '../../../../images/skills/icons8-html-5-48.png'
import javascript from '../../../../images/skills/icons8-javascript-48.png'
import php from '../../../../images/skills/icons8-logo-php-40.png'
import mysql from '../../../../images/skills/icons8-mysql-48.png'
import react_image from '../../../../images/skills/icons8-react-native-48.png'
import symfony from '../../../../images/skills/icons8-symfony-48.png'
import wordpress from '../../../../images/skills/icons8-wordpress-48.png'
import css from '../../../../images/skills/icons8-css3-48.png'
import bulma_image from '../../../../images/skills/bulma-logo.png'
import * as React from 'react';

export function Skills(props) {
    return (
        <div id="3" className="content">
            <h2 className="title">Skills</h2>
            <div className="skills">
                <div className="columns is-mobile">
                    <div className="column  is-3-mobile">
                        <img src={symfony}/>
                    </div>
                    <div className="column is-3-mobile">
                        <img src={html}/></div>
                    <div className="column is-3-mobile">
                        <img src={bootstrap}/>
                    </div>
                    <div className="column is-3-mobile">
                        <img src={javascript}/>
                    </div>
                    <div className="column is-3-mobile">
                        <img src={wordpress}/>
                    </div>
                    <div className="column  is-3-mobile">
                        <img src={mysql}/>
                    </div>
                    <div className="column is-3-mobile">
                        <img src={php}/>
                    </div>
                    <div className="column  is-3-mobile">
                        <img src={css}/>
                    </div>
                    <div className="column  is-3-mobile">
                        <img src={bulma_image}/>
                    </div>
                    <div className="column  is-3-mobile">
                        <img src={react_image}/>
                    </div>
                </div>
            </div>
        </div>
    );
};