// any CSS you import will output into a single css file (app.css in this case)
import '../css/app.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from "react-router-dom";
import Index from "./components";
import {ThemeProvider} from "./components/Context/ThemeContext";
import {LanguageProvider} from "./components/Context/LanguageContext";

ReactDOM.render(
    <BrowserRouter>
        <ThemeProvider>
            <LanguageProvider>
                <Route path="/" component={Index}/>
            </LanguageProvider>
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById('root')
);

require('./components/scripts/type_effect.js');
