import React from 'react';
import LoginForm from './LoginForm';

export default class LandingPage extends React.Component{
    constructor(){
        super();

        this.state = {isLogin:false}
    }

    showLoginRegister () {
        this.setState({isLogin:true});
    }

    render(){
        return(
            <div>
                <nav className="navbar navbar-default headerBackground">
                    <div className="container-fluid">
                        <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">Cakewalk</a>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li className="active"><a href="#">Home</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Career</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                           <button className="btn btn-danger navbar-btn navbar-right" onClick = {this.showLoginRegister.bind(this)}>Login / Sign Up</button>
                        </div>
                    </div>
                </nav>

                   <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div>
                                {this.state.isLogin ? <LoginForm/> : ""} 
                            </div>
                        </div>    
                    </div>    
                </div>


            </div>
            
              

        )
    }
}











         
        
    

