import React, {Component} from 'react';
import {LeftInfo} from "./Components_Parts/Contact_Parts/Left_Info";
import Form from "./Components_Parts/Contact_Parts/Form";
import LanguageContext, {common} from "./Context/LanguageContext";

class Contact extends Component {
    static contextType = LanguageContext;
    render() {
        const {language} = this.context;
        return (
            <div className="column page is-full">
                <section className="hero">
                    <div className="container has-text-centered">
                        <div className={"columns is- is-hidden-desktop  my-6"}>
                        </div>
                        <div className="columns is-8 is-variable ">
                            <LeftInfo  />
                            <Form />
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Contact;
