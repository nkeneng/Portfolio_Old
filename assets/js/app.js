// any CSS you import will output into a single css file (app.css in this case)
import '../css/app.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";
import Index from "./components";

ReactDOM.render(
    <BrowserRouter>
        <Route path="/" component={Index} />
    </BrowserRouter>,
    document.getElementById('root')
);