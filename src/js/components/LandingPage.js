import React from 'react';
import ReactDOM from 'react-dom';
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
                    <div style={{'float':'right','margin':'5px'}}>
                        <button className="btn myButton" onClick = {this.showLoginRegister.bind(this)} >Login / Register</button>
                    </div>



              <div className="jumbotron text-center headerBackground" style={{'marginTop': '-50px','height':'10px'}}>
                <span style={{'fontSize':'40px','float':'left','color':'purple'}}>Cakewalk<span style={{'fontSize':'14px','color':'purple'}}><italic>  I.T.'s Simple</italic></span></span> 
                
              </div>


            
              <div>
                 {this.state.isLogin ? <LoginForm/> : ""} 
              </div>

            </div>
        )
    }
}

