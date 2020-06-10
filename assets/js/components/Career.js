import React, {Component} from 'react';
import Experience from "./Components_Parts/Career_Parts/experience";
import {Education} from "./Components_Parts/Career_Parts/education";
import {Languages} from "./Components_Parts/Career_Parts/languages";
import {Skills} from "./Components_Parts/Career_Parts/skills";


class Career extends Component {
    render() {
        return (
            <div className="page is-12 column mt-4">
                <Experience/>
                <Education/>
                <Languages/>
                <Skills/>
            </div>
        )
    }
}

export default Career;