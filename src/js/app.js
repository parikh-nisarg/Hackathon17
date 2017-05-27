import React from 'react';
import ReactDOM from 'react-dom';
import Second from './components/Second';

import {BrowserRouter, Route, Link, Redirect, Switch, withRouter} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import App from './components/DesignApp';
import CandidateDetails from './components/CandidateDetails';
import TaskDetails from './components/TaskDetails';

const history = createHistory();

ReactDOM.render((
        <BrowserRouter>
            <Switch>
                <Route exact={true} path="/" component={TaskDetails}/>
            </Switch>
        </BrowserRouter>
    ),
    document.getElementById('main')
);