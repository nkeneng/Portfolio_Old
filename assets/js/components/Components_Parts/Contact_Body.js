import * as React from 'react';

export default function Contact_Body() {
    return (
        <div className="column page is-full">
            <section className="hero">
                <div className="container has-text-centered">
                    <div className="columns is-8 is-variable ">
                        <div className="column is-6 has-text-left">
                            <h1 className="title is-2">Contact Me</h1>
                            <p className="is-size-4">Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Nulla eligendi soluta
                                voluptate facere molestiae consequatur.</p>
                            <div className="social-media">
                                <a href="https://facebook.com" target="_blank"
                                   className="button is-light is-medium">
                                    <i className="fa fa-facebook-square" aria-hidden="true"></i>
                                </a>
                                <a href="https://instagram.com" target="_blank"
                                   className="button is-light is-medium">
                                    <i className="fa fa-instagram" aria-hidden="true"></i>
                                </a>
                                <a href="https://twitter.com" target="_blank"
                                   className="button is-light is-medium">
                                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                                </a>
                                <a href="https://twitter.com" target="_blank"
                                   className="button is-light is-medium">
                                    <i className="fa fa-xing" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                        <div className="column is-6 has-text-left">
                            <div className="field">
                                <p className="control is-expanded has-icons-left">
                                    <input className="input is-medium" type="text"
                                           placeholder="Name"/>
                                    <span className="icon is-small is-left">
                                            <i className="fa fa-user"></i>
                                        </span>
                                </p>
                            </div>
                            <div className="field">
                                <p className="control is-expanded has-icons-left has-icons-right">
                                    <input className="input is-medium" type="email"
                                           placeholder="Email"/>
                                    <span className="icon is-small is-left">
                                            <i className="fa fa-envelope"></i>
                                        </span>
                                </p>
                            </div>
                            <div className="field">
                                <div className="control">
                                    <textarea className="textarea is-medium"
                                              placeholder="Explain how I can help you"/>
                                </div>
                            </div>
                            <div className="field">
                                <div className="control">
                                    <button className="button is-medium send">
                                        Send message
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};