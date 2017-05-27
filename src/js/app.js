import React from 'react';
import ReactDOM from 'react-dom';
import Second from './components/Second';

import {HashRouter as Router, Route, Link, Redirect, Switch, withRouter} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import App from './components/DesignApp';
import CandidateDetails from './components/CandidateDetails';
import TaskDetails from './components/TaskDetails';

const history = createHistory();

ReactDOM.render((
        <Router>
            <Switch>
                <Route exact={true} path="/" component={TaskDetails}/>
                <Route exact={true} path="/app" component={App}/>
                <Route exact={true} path="/reg" component={CandidateDetails}/>
            </Switch>
        </Router>
    ),
    document.getElementById('main')
);