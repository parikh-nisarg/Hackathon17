import React from 'react';
import ReactDOM from 'react-dom';

export default class UserProfile extends React.Component{
    constructor(){
        super();
    }

    componentDidMount(){
       
    }

    showJob(){
        debugger;
        this.props.showJob(this.props.data.id);
    }

    render(){
        return(
            <div>
                    <div id="register-form" action="" method="post" role="form">
									<div className="form-group formLogin">
										<form className="go-bottomLogin" style={{'marginTop':'0'}}>                            
                                            <div>
                                                <input id="name" name="name" type="text" required style={{'width':'300px'}}/>
                                                <label htmlFor="name">Username</label>
                                            </div>
                                        </form>
									</div>
										<div className="form-group formLogin">
										<form className="go-bottomLogin" style={{'marginTop':'0'}}>                            
                                            <div>
                                                <input id="name" name="name" type="text" readOnly="true" required style={{'width':'300px'}} value={this.props.data.email}/>
                                                <label htmlFor="name">Email</label>
                                            </div>
                                        </form>
									</div>
										<div className="form-group formLogin">
										<form className="go-bottomLogin" style={{'marginTop':'0'}}>                            
                                            <div>
                                                <input id="name" name="name" type="password" required style={{'width':'300px'}}/>
                                                <label htmlFor="name">Password</label>
                                            </div>
                                        </form>
									</div>
										<div className="form-group formLogin">
										<form className="go-bottomLogin" style={{'marginTop':'0'}}>                            
                                            <div>
                                                <input id="name" name="name" type="password" required style={{'width':'300px'}}/>
                                                <label htmlFor="name">Confirm Password</label>
                                            </div>
                                        </form>
									</div>
									<div className="form-group">
										<div className="row">
											<div className="col-sm-6 col-sm-offset-3">
												<button type="button" className="btn btnbrowse" style={{'width':'180px'}}>Update</button>
											</div>
										</div>
									</div>
								</div>
                </div>
        )
    
//render() braces ends here
}    

//Class braces ends here
}
