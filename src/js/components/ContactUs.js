import React from 'react';
import ReactDOM from 'react-dom';

export default class TestComponent extends React.Component{
    constructor(){
        super();
        this.state = {
            googleData : {}
        }
    }

    render(){
        return(
            <div>
                <div ClassName="container">

                     <div className="row" style={{'height':'450px','width':'650px','textAlign':'center'}}>
                         <div className="col-sm-7">
                           <img src="src/images/BlueRidge.jpg" />
                        </div>
                        
                    </div>




                    <div className="row" style={{'textAlign':'center'}}>
                        <div className="col-md-12">
                            <span><b>Address: </b></span>
                                <span>
                                    Cakewalk Software Consultancy (formerly Cakewalk I.T. Solutions)
                                    101/102, Tower 5, Blue Ridge, Hinjewadi IT Park Phase 1, Pune – 411057 
                                    Email: getintouch@cakewalk.in
                                </span>
                        </div>
                        
                    </div>
                    
                </div>


            </div>
        )
    }
}

