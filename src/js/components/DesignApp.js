import React from 'react';
import {Link} from 'react-router-dom';

const styles = {
    title: {
        cursor: 'pointer'
    }
};

export default class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Link to="/reg">Demo</Link> <br/> <Link to="/task">Task</Link>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">

                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                    data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="#">Brand</a>
                        </div>


                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                <li className="active"><a href="#">Link <span className="sr-only">(current)</span></a>
                                </li>
                                <li><a href="#">Link</a></li>
                                <li className="dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button"
                                       aria-haspopup="true" aria-expanded="false">Dropdown <span
                                        className="caret"></span></a>
                                    <ul className="dropdown-menu">
                                        <li><a href="#">Action</a></li>
                                        <li><a href="#">Another action</a></li>
                                        <li><a href="#">Something else here</a></li>
                                        <li role="separator" className="divider"></li>
                                        <li><a href="#">Separated link</a></li>
                                        <li role="separator" className="divider"></li>
                                        <li><a href="#">One more separated link</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <form className="navbar-form navbar-left">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Search"/>
                                </div>
                                <button type="submit" className="btn btn-default">Submit</button>
                            </form>

                        </div>
                    </div>
                </nav>

                {/*navbar                     */}


                <div className="container-fluid">
                    {/*//floating text box*/}
                    <div className="row">
                        <div className="col-md-4">
                            <form className="go-bottom">

                                <div>
                                    <input id="name" name="name" type="text" required/>
                                    <label htmlFor="name">Your Name</label>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-4">
                            <form className="go-bottom">

                                <div>
                                    <input id="name" name="name" type="text" required/>
                                    <label htmlFor="name">Your Name</label>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-4">
                            <form className="go-bottom">

                                <div>
                                    <input id="name" name="name" type="text" required/>
                                    <label htmlFor="name">Your Name</label>
                                </div>
                            </form>
                        </div>


                    </div>


                    <div className="row-fluid">
                        <div className="col-md-12">

                            <div className="btn-group">
                                <button type="button" data-toggle="dropdown"
                                        className="btn btn-default dropdown-toggle">Action <span
                                    className="caret"></span></button>
                                <ul className="dropdown-menu">
                                    <li><a href="#">Action</a></li>
                                    <li><a href="#">Another action</a></li>
                                    <li className="divider"></li>
                                    <li><a href="#">Separated link</a></li>
                                </ul>
                            </div>
                            &nbsp;

                            <div className="btn-group">
                                <button type="button" data-toggle="dropdown"
                                        className="btn btn-primary dropdown-toggle">Action <span
                                    className="caret"></span></button>
                                <ul className="dropdown-menu">
                                    <li><a href="#">Action</a></li>
                                    <li><a href="#">Another action</a></li>
                                    <li className="divider"></li>
                                    <li><a href="#">Separated link</a></li>
                                </ul>
                            </div>
                            &nbsp;
                            <div className="btn-group">
                                <button type="button" data-toggle="dropdown"
                                        className="btn btn-warning dropdown-toggle">Action <span
                                    className="caret"></span></button>
                                <ul className="dropdown-menu">
                                    <li><a href="#">Action</a></li>
                                    <li><a href="#">Another action</a></li>
                                    <li className="divider"></li>
                                    <li><a href="#">Separated link</a></li>
                                </ul>
                            </div>
                            &nbsp;

                            <div className="btn-group">
                                <button type="button" data-toggle="dropdown" className="btn btn-danger dropdown-toggle">
                                    Action <span className="caret"></span></button>
                                <ul className="dropdown-menu">
                                    <li><a href="#">Action</a></li>
                                    <li><a href="#">Another action</a></li>
                                    <li className="divider"></li>
                                    <li><a href="#">Separated link</a></li>
                                </ul>
                            </div>
                            &nbsp;
                        </div>

                        <div className="row-fluid">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="exampleSelect1">Example select</label>
                                    <select className="form-control" id="exampleSelect1">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="exampleSelect1">Example select</label>
                                    <select className="form-control" id="exampleSelect1">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>
                            </div>
                        </div>


                        <div className="row-fluid">
                            <div className="col-md-4">
                                <label className="form-check-label">
                                    <input className="form-check-input" type="checkbox"/> Remember me
                                </label>
                            </div>
                            <div className="col-md-6">

                                <div className="checkbox">
                                    <label>
                                        <input type="checkbox" value=""/>
                                        <span className="cr"><i className="cr-icon glyphicon glyphicon-ok"></i></span>
                                        Option one is this and that — be sure to include why it's great
                                    </label>
                                </div>


                            </div>

                        </div>


                        <div className="row-fluid">
                            <div className="col-md-6">
                                <div className="checkbox">
                                    <label>
                                        <input type="checkbox" value=""/>
                                        <span className="cr"><i className="cr-icon glyphicon glyphicon-arrow-right"></i></span>
                                        Option one is this and that — be sure to include why it's great
                                    </label>
                                </div>
                                <div className="checkbox">
                                    <label>
                                        <input type="checkbox" value="" checked/>
                                        <span className="cr"><i className="cr-icon glyphicon glyphicon-arrow-right"></i></span>
                                        Option two is checked by default
                                    </label>
                                </div>
                                <div className="checkbox disabled">
                                    <label>
                                        <input type="checkbox" value="" disabled/>
                                        <span className="cr"><i className="cr-icon glyphicon glyphicon-arrow-right"></i></span>
                                        Option three is disabled
                                    </label>
                                </div>
                            </div>

                            <div className="col-md-6">

                                <div className="radio">
                                    <label>
                                        <input type="radio" name="o1" value=""/>
                                        <span className="cr"><i
                                            className="cr-icon glyphicon glyphicon-ok-sign"></i></span>
                                        Option one is this and that — be sure to include why it's great
                                    </label>
                                </div>

                                <div className="radio">
                                    <label>
                                        <input type="radio" name="o1" value=""/>
                                        <span className="cr"><i
                                            className="cr-icon glyphicon glyphicon-ok-sign"></i></span>
                                        Option one is this and that — be sure to include why it's great
                                    </label>
                                </div>

                                <div className="radio">
                                    <label>
                                        <input type="radio" name="o1" value=""/>
                                        <span className="cr"><i
                                            className="cr-icon glyphicon glyphicon-ok-sign"></i></span>
                                        Option one is this and that — be sure to include why it's great
                                    </label>
                                </div>


                            </div>
                        </div>
                        <div className="container-fluid">
                            <div className="row-fluid">
                                <div className="col-md-12">


                                    <div className="input-group" id="adv-search">
                                        <input type="text" className="form-control" placeholder="Search for snippets"/>
                                        <div className="input-group-btn">
                                            <div className="btn-group" role="group">
                                                <div className="dropdown dropdown-lg">
                                                    <button type="button" className="btn btn-default dropdown-toggle"
                                                            data-toggle="dropdown" aria-expanded="false"><span
                                                        className="caret"></span></button>
                                                    <div className="dropdown-menu dropdown-menu-right" role="menu">
                                                        <form className="form-horizontal" role="form">
                                                            <div className="form-group">
                                                                <label htmlFor="filter">Filter by</label>
                                                                <select className="form-control">
                                                                    <option value="0" selected>All Snippets</option>
                                                                    <option value="1">Featured</option>
                                                                    <option value="2">Most popular</option>
                                                                    <option value="3">Top rated</option>
                                                                    <option value="4">Most commented</option>
                                                                </select>
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="contain">Author</label>
                                                                <input className="form-control" type="text"/>
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="contain">Contains the words</label>
                                                                <input className="form-control" type="text"/>
                                                            </div>


                                                            <div className="form-group">
                                                                <label htmlFor="contain">Contains the words</label>
                                                                <input className="form-control" type="text"/>
                                                            </div>


                                                            <button type="submit" className="btn btn-primary"><span
                                                                className="glyphicon glyphicon-search"
                                                                aria-hidden="true"></span></button>
                                                        </form>
                                                    </div>
                                                </div>
                                                <button type="button" className="btn btn-primary"><span
                                                    className="glyphicon glyphicon-search" aria-hidden="true"></span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>


                                </div>

                                <div className="container-fluid">
                                    <div className="row-fluid">
                                        <div className="col-md-12">
                                            <ul className="nav nav-pills" role="tablist">
                                                <li role="presentation" className="active"><a href="#">Home <span
                                                    className="badge">42</span></a></li>
                                                <li role="presentation"><a href="#">Profile</a></li>
                                                <li role="presentation"><a href="#">Messages <span
                                                    className="badge">3</span></a></li>
                                            </ul>

                                        </div>
                                    </div>
                                </div>


                                <div className="container-fluid">
                                    <div className="row-fluid">
                                        <div className="col-md-12">
                                            <ul className="nav nav-pills" role="tablist">
                                                <li role="presentation" className="active"><a href="#">Home <span
                                                    className="badge">42</span></a></li>
                                                <li role="presentation"><a href="#">Profile</a></li>
                                                <li role="presentation"><a href="#">Messages <span
                                                    className="badge">3</span></a></li>
                                            </ul>

                                        </div>
                                    </div>
                                </div>


                                {/*modal dialog*/}

                                <br/>
                                <div className="container-fluid">
                                    <div className="row-fluid">
                                        <div className="col-md-6">
                                            <button type="button" className="btn btn-danger" data-toggle="modal"
                                                    data-target="#exampleModal" data-whatever="@getbootstrap">Open modal
                                                for @getbootstrap
                                            </button>


                                            <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog"
                                                 aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div className="modal-dialog" role="document">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h5 className="modal-title" id="exampleModalLabel">New
                                                                message</h5>
                                                            <button type="button" className="close" data-dismiss="modal"
                                                                    aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                        </div>


                                                        <div className="modal-body">


                                                            <div className="row">
                                                                <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <label htmlFor="recipient-name"
                                                                               className="form-control-label">Recipient:</label>
                                                                        <input type="text" className="form-control"
                                                                               id="recipient-name"/>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <label htmlFor="recipient-name"
                                                                               className="form-control-label">Recipient:</label>
                                                                        <input type="text" className="form-control"
                                                                               id="recipient-name"/>
                                                                    </div>
                                                                </div>
                                                            </div>


                                                            <div className="form-group">
                                                                <label htmlFor="recipient-name"
                                                                       className="form-control-label">Recipient:</label>
                                                                <input type="text" className="form-control"
                                                                       id="recipient-name"/>
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="message-text"
                                                                       className="form-control-label">Message:</label>
                                                                <textarea className="form-control"
                                                                          id="message-text"></textarea>
                                                            </div>


                                                        </div>

                                                        <div className="modal-footer">
                                                            <button type="button" className="btn btn-secondary"
                                                                    data-dismiss="modal">Close
                                                            </button>
                                                            <button type="button" className="btn btn-primary">Send
                                                                message
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                </div>

                                {/*modal dialog*/}


                                {/*collapse panel*/}


                                <div className="container-fluid">
                                    <div className="row-fluid">
                                        <div className="col-md-6">

                                            <div className="panel panel-default">
                                                <div className="panel-heading">
                                                    <h4 className="panel-title">
                                                        <a data-toggle="collapse" data-parent="#accordion"
                                                           href="#filterPanel">Collapsible Group 1</a>
                                                <span className="pull-right panel-collapse-clickable"
                                                      data-toggle="collapse" data-parent="#accordion"
                                                      href="#filterPanel">
                                                    <i className="glyphicon glyphicon-chevron-down"></i>
                                                </span>
                                                    </h4>
                                                </div>
                                                <div id="filterPanel"
                                                     className="panel-collapse panel-collapse collapse">
                                                    <div className="panel-body">
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                                        sed do eiusmod tempor incididunt ut labore et dolore magna
                                                        aliqua. Ut enim ad minim veniam,
                                                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                                        commodo consequat.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="col-md-6">

                                            <div className="panel panel-default">
                                                <div className="panel-heading">
                                                    <h4 className="panel-title">
                                                        <a data-toggle="collapse" data-parent="#accordion"
                                                           href="#filterPanel1">Collapsible Group 2</a>
                                                <span className="pull-right panel-collapse-clickable"
                                                      data-toggle="collapse" data-parent="#accordion"
                                                      href="#filterPanel1">
                                                    <i className="glyphicon glyphicon-chevron-down"></i>
                                                </span>
                                                    </h4>
                                                </div>
                                                <div id="filterPanel1"
                                                     className="panel-collapse panel-collapse collapse">
                                                    <div className="panel-body">
                                                        <div className="form-group">
                                                            <label htmlFor="recipient-name"
                                                                   className="form-control-label">Recipient:</label>
                                                            <input type="text" className="form-control"
                                                                   id="recipient-name"/>
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="message-text"
                                                                   className="form-control-label">Message:</label>
                                                            <textarea className="form-control"
                                                                      id="message-text"></textarea>
                                                        </div>
                                                        <div className="modal-footer">
                                                            <button type="button" className="btn btn-secondary"
                                                                    data-dismiss="modal">Close
                                                            </button>
                                                            <button type="button" className="btn btn-primary">Send
                                                                message
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>


                                    </div>
                                </div>

                                {/*end collapse panel*/}


                                {/*tab example*/}


                                <div className="container-fluid">
                                    <div className="row-fluid">
                                        <div className="col-md-12">


                                            <div className="container"><h1>Bootstrap tab panel example (using
                                                nav-pills) </h1></div>
                                            <div id="exTab1" className="container">
                                                <ul className="nav nav-pills">
                                                    <li className="active">
                                                        <a href="#1a" data-toggle="tab">Overview</a>
                                                    </li>
                                                    <li><a href="#2a" data-toggle="tab">Using nav-pills</a>
                                                    </li>
                                                    <li><a href="#3a" data-toggle="tab">Applying clearfix</a>
                                                    </li>
                                                    <li><a href="#4a" data-toggle="tab">Background color</a>
                                                    </li>
                                                </ul>

                                                <div className="tab-content clearfix">
                                                    <div className="tab-pane active" id="1a">
                                                        <h3>Content's background color is the same for the tab</h3>
                                                    </div>
                                                    <div className="tab-pane" id="2a">
                                                        <h3>We use the className nav-pills instead of nav-tabs which
                                                            automatically creates a background color for the tab</h3>
                                                    </div>
                                                    <div className="tab-pane" id="3a">
                                                        <h3>We applied clearfix to the tab-content to rid of the gap
                                                            between the tab and the content</h3>
                                                    </div>
                                                    <div className="tab-pane" id="4a">
                                                        <h3>We use css to change the background color of the content to
                                                            be equal to the tab</h3>
                                                    </div>
                                                </div>
                                            </div>


                                            <hr></hr>
                                            <div className="container"><h2>Example tab 2 (using standard nav-tabs)</h2>
                                            </div>

                                            <div id="exTab2" className="container">
                                                <ul className="nav nav-tabs">
                                                    <li className="active">
                                                        <a href="#1" data-toggle="tab">Overview</a>
                                                    </li>
                                                    <li><a href="#2" data-toggle="tab">Without clearfix</a>
                                                    </li>
                                                    <li><a href="#3" data-toggle="tab">Solution</a>
                                                    </li>
                                                </ul>

                                                <div className="tab-content ">
                                                    <div className="tab-pane active" id="1">
                                                        <h3>Standard tab panel created on bootstrap using nav-tabs</h3>
                                                    </div>
                                                    <div className="tab-pane" id="2">
                                                        <h3>Notice the gap between the content and tab after applying a
                                                            background color</h3>
                                                    </div>
                                                    <div className="tab-pane" id="3">
                                                        <h3>add clearfix to tab-content (see the css)</h3>
                                                    </div>
                                                </div>
                                            </div>

                                            <hr></hr>

                                            <div className="container"><h2>Example 3 </h2></div>
                                            <div id="exTab3" className="container">
                                                <ul className="nav nav-pills">
                                                    <li className="active">
                                                        <a href="#1b" data-toggle="tab">Overview</a>
                                                    </li>
                                                    <li><a href="#2b" data-toggle="tab">Using nav-pills</a>
                                                    </li>
                                                    <li><a href="#3b" data-toggle="tab">Applying clearfix</a>
                                                    </li>
                                                    <li><a href="#4a" data-toggle="tab">Background color</a>
                                                    </li>
                                                </ul>

                                                <div className="tab-content clearfix">
                                                    <div className="tab-pane active" id="1b">
                                                        <h3>Same as example 1 but we have now styled the tab's
                                                            corner</h3>
                                                    </div>
                                                    <div className="tab-pane" id="2b">
                                                        <h3>We use the className nav-pills instead of nav-tabs which
                                                            automatically creates a background color for the tab</h3>
                                                    </div>
                                                    <div className="tab-pane" id="3b">
                                                        <h3>We applied clearfix to the tab-content to rid of the gap
                                                            between the tab and the content</h3>
                                                    </div>
                                                    <div className="tab-pane" id="4b">
                                                        <h3>We use css to change the background color of the content to
                                                            be equal to the tab</h3>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}