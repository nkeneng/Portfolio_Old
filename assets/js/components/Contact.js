import React, {Component} from 'react';
import {LeftInfo} from "./Components_Parts/Contact_Parts/Left_Info";
import Form from "./Components_Parts/Contact_Parts/Form";


class Contact extends Component {
    render() {
        return (
            <div className="column page is-full">
                <section className="hero">
                    <div className="container has-text-centered">
                        <div className="columns is-8 is-variable ">
                            <LeftInfo/>
                            <Form/>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Contact;