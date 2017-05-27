
import React from 'react';
import ReactDOM from 'react-dom';
import Second from './components/Second';

import { BrowserRouter, Route, Link, Redirect, withRouter } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import CandidateReg from './components/CandidateRegister';
// import from './componentes/';
// import from './componentes/';

const history = createHistory();

ReactDOM.render((
    <BrowserRouter>
        <div>
            <Route exact path="/" component={CandidateReg} />
        </div>
    </BrowserRouter>
),
    document.getElementById('main')
);