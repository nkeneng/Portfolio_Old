import React, {createContext, Component} from "react";

const ThemeContext = createContext();

export default ThemeContext

class ThemeProvider extends Component {
    state = {
        theme: window.matchMedia('(prefers-color-scheme: dark)').matches
    };

    setTheme = () => {
        this.setState({theme: !this.state.theme});
    };

    render() {
        const {children} = this.props;
        return (
            <ThemeContext.Provider value={{...this.state, setTheme: this.setTheme}}>
                {children}
            </ThemeContext.Provider>
        );
    }
}

export {ThemeProvider};
