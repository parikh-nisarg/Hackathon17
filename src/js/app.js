import React from 'react';
import ReactDOM from 'react-dom';
import Second from './components/Second';

import {BrowserRouter, Route, Link, Redirect, Switch, withRouter} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import App from './components/DesignApp';
import TaskDetails from './components/TaskDetails';
import CandidateReg from './components/CandidateRegister';
import CandidateDetails from './components/CandidateDetails';
import JobCreate from './components/JobCreate';


const history = createHistory();

ReactDOM.render((
        <BrowserRouter>
            <Switch>
                <Route exact={true} path="/" component={CandidateDetails}/>
            </Switch>
        </BrowserRouter>
    ),
    document.getElementById('main')
);