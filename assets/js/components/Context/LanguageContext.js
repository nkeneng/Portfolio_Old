import React, {createContext, Component} from "react";

const LanguageContext = createContext();

const languages = {
    "English" : 'en',
    "Deutsch" : 'de',
    "Francais" :'fr'
};

export default LanguageContext

class LanguageProvider extends Component {
    state = {
        language: languages['English']
    };

    setLanguage = (term) => {
        this.setState({language: languages[term]});
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
