import React from 'react';
import ReactDOM from 'react-dom';

export default class LoginForm extends React.Component{
    constructor(){
        super();
    }

    componentDidMount(){

        $(function() {

            $('#login-form-link').click(function(e) {
                $("#login-form").delay(300).fadeIn(300);
                $("#register-form").fadeOut(300);
                $('#register-form-link').removeClass('active');
                $(this).addClass('active');
                e.preventDefault();
            });
            $('#register-form-link').click(function(e) {
                $("#register-form").delay(300).fadeIn(300);
                $("#login-form").fadeOut(300);
                $('#login-form-link').removeClass('active');
                $(this).addClass('active');
                e.preventDefault();
            });

        });

    }

    render(){
        return(
            <div>

                <div className="container">
    	            <div className="row">   
                        	<div className="col-md-6 col-md-offset-3">
				                <div className="panel panel-login" style={{'width':'400px'}}>
                                    <div className="panel-heading">
                                        <div className="row">
                                            <div className="col-xs-6">
                                                <a href="#" className="active" id="login-form-link">Login</a>
                                            </div>
                                            <div className="col-xs-6">
                                                <a href="#" id="register-form-link">Register</a>
                                            </div>
                                        </div>
                                        <hr/>
                                    </div>

                                     <div className="panel-body">
						<div className="row">
							<div className="col-lg-12">
								<form id="login-form" action="" method="post" role="form" style={{'display': 'block'}}>
									<div className="form-group formLogin">
										<form className="go-bottomLogin" style={{'margin-top':'0'}}>                            
                                            <div>
                                                <input id="name" name="name" type="text" required style={{'width':'300px'}}/>
                                                <label htmlFor="name">Username</label>
                                            </div>
                                        </form>
									</div>
									<div className="form-group formLogin">
										<form className="go-bottomLogin formLogin" style={{'margin-top':'0'}}>                           
                                            <div>
                                                <input id="name" name="name" type="password" required  style={{'width':'300px'}}/>
                                                <label htmlFor="name">Password</label>
                                            </div>
                                        </form>
									</div>
								
									<div className="form-group">
										<div className="row">
											<div className="col-sm-6 col-sm-offset-3">
												<button type="button" className="btn btnbrowse" style={{'width':'180px'}}>Login</button>
											</div>
										</div>
									</div>
									
								</form>
								<form id="register-form" action="" method="post" role="form" style={{'display':'none'}}>
									<div className="form-group formLogin">
										<form className="go-bottomLogin" style={{'margin-top':'0'}}>                            
                                            <div>
                                                <input id="name" name="name" type="text" required style={{'width':'300px'}}/>
                                                <label htmlFor="name">Username</label>
                                            </div>
                                        </form>
									</div>
										<div className="form-group formLogin">
										<form className="go-bottomLogin" style={{'margin-top':'0'}}>                            
                                            <div>
                                                <input id="name" name="name" type="text" required style={{'width':'300px'}}/>
                                                <label htmlFor="name">Email</label>
                                            </div>
                                        </form>
									</div>
										<div className="form-group formLogin">
										<form className="go-bottomLogin" style={{'margin-top':'0'}}>                            
                                            <div>
                                                <input id="name" name="name" type="password" required style={{'width':'300px'}}/>
                                                <label htmlFor="name">Password</label>
                                            </div>
                                        </form>
									</div>
										<div className="form-group formLogin">
										<form className="go-bottomLogin" style={{'margin-top':'0'}}>                            
                                            <div>
                                                <input id="name" name="name" type="password" required style={{'width':'300px'}}/>
                                                <label htmlFor="name">Confirm Password</label>
                                            </div>
                                        </form>
									</div>
									<div className="form-group">
										<div className="row">
											<div className="col-sm-6 col-sm-offset-3">
												<button type="button" className="btn btnbrowse" style={{'width':'180px'}}>Register</button>
											</div>
										</div>
									</div>
								</form>
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

