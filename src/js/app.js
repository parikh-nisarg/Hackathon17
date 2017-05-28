import React from 'react';
import ReactDOM from 'react-dom';

import {HashRouter as Router, NavLink, Route, Switch, Link, Redirect} from 'react-router-dom';

import LoginForm from './components/LoginForm';
import EmployManagement from './components/EmployeeManagement';
import HrManagement from './components/HrManagement';
import CandidateDetails from './components/CandidateDetails';
import TaskDetails from './components/TaskDetails';
import AboutUs from './components/AboutUs';

const Career = () => (<h2>Careers</h2>);
const Contact = () => (<h2>Contact Us</h2>);


const Links = () => (<ul className="nav navbar-nav">
    <li><NavLink exact={true} to="/" activeClassName="active">Home</NavLink></li>
    <li><NavLink to="/career" activeClassName="active">Career</NavLink></li>
    <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
</ul>);

const Routes = () => (
    <Router>
        <div>
            <nav className="navbar navbar-default headerBackground">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link className="navbar-brand" to="/">Cakewalk</Link>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <Links/>

                        <button className="btn btn-danger navbar-btn navbar-right">
                            <Link to="/login">
                                Login / Sign Up
                            </Link>
                        </button>
                    </div>
                </div>
            </nav>

            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div>
                            <Switch>
                                <Route exact={true} path="/" component={AboutUs}/>
                                <Route path="/login" component={LoginForm}/>
                                <Route path="/career" component={Career}/>
                                <Route path="/contact" component={Contact}/>
                                <Route path="/emp/:id" component={EmployManagement}/>
                                <Route path="/hr/:id" component={HrManagement}/>
                                <Route path="/teamld/:id" component={TaskDetails}/>
                                <Route path="/candidate/:id" component={CandidateDetails}/>
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Router>
);

ReactDOM.render(
    <Routes/>
    ,
    document.getElementById('main')
);
