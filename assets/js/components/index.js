import React, {element, useContext} from 'react';
import Header from "./Components_Parts/Header";
import RightNav from "./Components_Parts/Navigation/Right_Nav";
import Downloader from "./Components_Parts/Downloader";
import {Route, Routes} from "react-router-dom";
import Contact from "./Contact";
import Home from "./Home";
import MobileNav from "./Components_Parts/Navigation/Mobile_Nav";
import Career from "./Career";
import Portfolio from "./Portfolio";
import {
    CSSTransition,
    TransitionGroup
} from 'react-transition-group';
import {useLocation} from "react-router";
import themeContext from "./Context/ThemeContext";

export default function Index() {
    // static contextType = ThemeContext;

    const getDepth = (location) => {
        let pathArray = location.pathname.split("/")
        pathArray = pathArray.filter(n => n !== "");
        return pathArray.length;
    }

    const location = useLocation();
    const prevDepth = getDepth(location)

    const theme = useContext(themeContext);

    const timeout = {enter: 4500, exit: 1000};
    const currentKey = location.pathname.split("/")[1] || "/";
    return (
        <section
            className="Container is-relative is-relative">
            <RightNav/>
            {/*<Downloader/>*/}
            <div
                className="columns is-mobile container-1 is-multiline  ">
                <Header theme={theme}/>
                <div className="column is-12-touch page-content h-100">
                    <div
                        className="columns is-multiline content-container">
                        <MobileNav/>
                        <div className="column is-12">
                            <TransitionGroup>
                                <CSSTransition
                                    key={currentKey}
                                    timeout={timeout}
                                    classNames="fade"
                                    mountOnEnter={true}
                                >
                                    <div
                                        className={getDepth(location) - prevDepth >= 0 ? "left" : "right"}>
                                        <Routes location={location}>
                                            <Route
                                                exact="true"
                                                path="/"
                                                element={<Home/>}/>
                                            <Route
                                                exact="true"
                                                path="/about"
                                                element={<Home/>}/>
                                            <Route
                                                path="/contact"
                                                element={<Contact/>}/>
                                            <Route
                                                path="/career"
                                                element={<Career/>}/>
                                            <Route
                                                path="/portfolio"
                                                element={<Portfolio/>}/>
                                        </Routes>
                                    </div>
                                </CSSTransition>
                            </TransitionGroup>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
