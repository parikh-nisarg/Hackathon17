import React from 'react';
import ReactDOM from 'react-dom';

export default class LoginForm extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div>




            <div className="container">
                <div id="login-box">
                    <div className="logo">
                        <img src="http://lorempixel.com/output/people-q-c-100-100-1.jpg" class="img img-responsive img-circle center-block"/>
                        <h1 className="logo-caption"><span className="tweak">L</span>ogin</h1>
                    </div>
                    <div className="controls">
                        <input type="text" name="username" placeholder="Username" className="form-control" />
                        <input type="text" name="username" placeholder="Password" className="form-control" />
                        <button type="button" class="btn btn-default btn-block btn-custom">Login</button>
                    </div>
                </div>
            </div>
            <div id="particles-js"></div>







            </div>
        )
    }
}

