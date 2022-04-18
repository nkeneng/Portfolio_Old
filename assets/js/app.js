// any CSS you import will output into a single css file (app.css in this case)
import '../css/app.scss';

import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Index from "./components";
import {ThemeProvider} from "./components/Context/ThemeContext";
import {LanguageProvider} from "./components/Context/LanguageContext";
import {createRoot} from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <BrowserRouter>
        <ThemeProvider>
            <LanguageProvider>
                <Routes>
                    <Route path="*" element={<Index/>}/>
                </Routes>
            </LanguageProvider>
        </ThemeProvider>
    </BrowserRouter>
);

require('./components/scripts/type_effect.js');

