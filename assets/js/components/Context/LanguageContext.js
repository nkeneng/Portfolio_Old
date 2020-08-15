import React, {
    createContext,
    Component
} from "react";
import common_en
    from "../../translation/en.common.json";
import common_fr
    from "../../translation/fr.common.json";
import common_de
    from "../../translation/de.common.json";

const LanguageContext = createContext();

export const languages = {
    en: "English",
    de: 'Deutsch',
    fr: 'Francais'
};
export const ApiLanguages = {
    Francais: 'fr',
    English: 'en',
    Deutsch: 'de'
};

export const common = {
    English: common_en,
    Francais: common_fr,
    Deutsch: common_de
}

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
            <LanguageContext.Provider value={{
                ...this.state,
                setLanguage: this.setLanguage
            }}>
                {children}
            </LanguageContext.Provider>
        );
    }
}

export {LanguageProvider};
