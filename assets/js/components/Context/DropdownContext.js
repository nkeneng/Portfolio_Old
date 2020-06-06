import React, {createContext, Component} from "react";

const DropdownContext = createContext();

export default DropdownContext

class DropdownProvider extends Component {
    state = {
        active: false
    };

    setActive = () => {
        this.setState({active: !this.state.active});
    };

    render() {
        const {children} = this.props;
        return (
            <DropdownContext.Provider value={{...this.state, setActive: this.setActive}}>
                {children}
            </DropdownContext.Provider>
        );
    }
}

export {DropdownProvider};
