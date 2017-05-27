
import React from 'react';
import ReactDOM from 'react-dom';
import Second from './components/Second';

import { BrowserRouter, Route, Link, Redirect, withRouter } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import CandidateReg from './components/CandidateRegister';
import CandidateDetails from './components/CandidateDetails';

import JobCreate from './components/JobCreate';

// import from './componentes/';
// import from './componentes/';

const history = createHistory();

ReactDOM.render((
    <BrowserRouter>
        <div>
            <Route exact path="/" component={CandidateDetails} />
        </div>
    </BrowserRouter>
),
    document.getElementById('main')
);