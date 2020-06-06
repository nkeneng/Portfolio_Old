import React, {createContext, Component} from "react";

const LanguageContext = createContext();

export const languages = {
    'en': "English",
    "de": 'Deutsch',
    "fr": 'Francais'
};

export default LanguageContext

class LanguageProvider extends Component {
    state = {
        language: languages['fr']
    };

    setLanguage = (key) => {
        this.setState({language: languages[key]});
    };

    render() {
        const {children} = this.props;
        return (
            <LanguageContext.Provider value={{...this.state, setLanguage: this.setLanguage}}>
                {children}
            </LanguageContext.Provider>
        );
    }
}

export {LanguageProvider};
