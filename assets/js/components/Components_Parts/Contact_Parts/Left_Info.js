import * as React from 'react';


export function LeftInfo(props) {
    return (
        <div className="column is-6 has-text-left">
            <h1 className="title is-2">Contact Me</h1>
            <p className="is-size-4">Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Nulla eligendi soluta
                voluptate facere molestiae consequatur.</p>
            <div className="social-media">
                <a href="https://facebook.com" target="_blank"
                   className="button is-light is-medium">
                    <i className="fa fa-facebook-square" aria-hidden="true"/>
                </a>
                <a href="https://instagram.com" target="_blank"
                   className="button is-light is-medium">
                    <i className="fa fa-instagram" aria-hidden="true"/>
                </a>
                <a href="https://twitter.com" target="_blank"
                   className="button is-light is-medium">
                    <i className="fa fa-linkedin" aria-hidden="true"/>
                </a>
                <a href="https://twitter.com" target="_blank"
                   className="button is-light is-medium">
                    <i className="fa fa-xing" aria-hidden="true"/>
                </a>
            </div>
        </div>
    );
}