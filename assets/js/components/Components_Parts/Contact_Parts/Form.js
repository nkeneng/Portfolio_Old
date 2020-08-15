import * as React from 'react';
import {Component} from "react";
import {SendData} from "../../Api/Api";
import LanguageContext, {common}
    from "../../Context/LanguageContext";

class Form extends Component {
    static contextType = LanguageContext;
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            status: 0,
            nameIsValid: undefined,
            emailIsValid: undefined,
            messageIsValid: undefined,
        };
    }

    handleNameChange = event => {
        const value = event.currentTarget.value;
        if (value.length < 10) {
            this.setState({nameIsValid: false, name: value})
        } else this.setState({nameIsValid: true, name: value})
    };
    handleEmailChange = event => {
        const emailRegex = RegExp('^[\\w-\\\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$');
        const value = event.currentTarget.value;
        if (emailRegex.test(value)) {
            this.setState({emailIsValid: true, email: value})
        } else {
            this.setState({emailIsValid: false, email: value})
        }
    };
    handleMessageChange = event => {
        //@TODO i wanted to put a message text security but not sure if it's necessary
        // const messageRegex = RegExp('^[ .a-zA-Z0-9]$');
        const value = event.currentTarget.value;
        if (value.length > 20) {
            this.setState({messageIsValid: true, message: value})
        } else {
            this.setState({messageIsValid: false, message: value})
        }
    };

    OnFailure(r) {
        //@TODO optional : capture errors
        console.log(r.json());
        this.setState({status: r.status})
    }

    OnSuccessful() {
        console.log('ok');
        this.setState({
            name: '',
            email: '',
            message: '',
            status: 201,
            nameIsValid: undefined,
            emailIsValid: undefined
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        const {name, email, message,nameIsValid,emailIsValid,messageIsValid} = this.state;
        if (nameIsValid && emailIsValid && messageIsValid){
            SendData(name, email, message).then(r =>
                r.status === 201 ? this.OnSuccessful() : this.OnFailure(r)
            );
        }else{
            //@TODO optional : display error message
        }
    };

    resetAll = () => {
        this.setState({status: 0})
    };

    render() {
        const {language} = this.context;
        const {name, email, message, status, nameIsValid, emailIsValid, messageIsValid} = this.state;
        let display;
        switch (status) {
            case 0:
                display = 'is-hidden';
                break;
            case 201:
                display = 'is-success'
                break;
            default:
                display = 'is-danger'
        }
        return (
            <div className="column is-6 has-text-left">
                <div className={"notification " + display}>
                    <button onClick={this.resetAll} className="delete"/>
                    {common[language].contact.form.success}
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div className="field">
                        <p className="control is-expanded has-icons-left has-icons-right">
                            <input required
                                   className={"input is-medium " + (nameIsValid !== undefined ? (!nameIsValid ? 'is-danger' : 'is-success') : '')}
                                   type="text"
                                   placeholder={common[language].contact.form.name}
                                   value={name}
                                   onChange={this.handleNameChange}
                            />
                            <span className="icon is-small is-left">
                                <i className="fa fa-user"/>
                            </span>
                            <span className="icon is-small is-right">
                            <i className={"fa " + (nameIsValid !== undefined ? (!nameIsValid ? 'fa-exclamation-triangle failure' : 'fa-check checked') : '')}/>
                            </span>
                            <p className={"help " + (!nameIsValid && nameIsValid !== undefined ? '' : 'is-hidden')}>
                                {common[language].contact.form.nameError}
                            </p>
                        </p>
                    </div>
                    <div className="field">
                        <p className="control is-expanded has-icons-left has-icons-right">
                            <input required
                                   className={"input is-medium " + (emailIsValid !== undefined ? (!emailIsValid ? 'is-danger' : 'is-success') : '')}
                                   type="email"
                                   placeholder={common[language].contact.form.email}
                                   value={email}
                                   onChange={this.handleEmailChange}
                            />
                            <span className="icon is-small is-left">
                            <i className="fa fa-envelope"/>
                            </span>
                            <span className="icon is-small is-right">
                            <i className={"fa " + (emailIsValid !== undefined ? (!emailIsValid ? 'fa-exclamation-triangle failure' : 'fa-check checked') : '')}/>
                            </span>
                            <p className={"help " + (!emailIsValid && emailIsValid !== undefined ? '' : 'is-hidden')}>
                                {common[language].contact.form.emailError}
                            </p>
                        </p>
                    </div>
                    <div className="field">
                        <div className="control">
                        <textarea required
                                  className={"textarea is-medium "+(messageIsValid !== undefined ? (!messageIsValid ? 'is-danger' : 'is-success') : '')}
                                  placeholder={common[language].contact.form.message}
                                  value={message}
                                  onChange={this.handleMessageChange}
                        />
                        </div>
                        <p className={"help " + (!messageIsValid && messageIsValid !== undefined ? '' : 'is-hidden')}>
                            {common[language].contact.form.messageError}
                        </p>
                    </div>
                    <div className="field">
                        <div className="control">
                            <button disabled={(nameIsValid && emailIsValid && messageIsValid )? '': true} className="button is-medium send">
                                {common[language].contact.form.send}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Form;
