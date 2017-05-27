import React from 'react';
import ReactDOM from 'react-dom';

export default class TaskManagement extends React.Component{
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
                <div style={{'marginTop':'25px','border':'1px solid #e8dddd', 'borderRadius': '8px'}}>
                                                                <div className="row" >
                                                                    <div className="col-md-2" style={{'marginTop':'5px','marginLeft':'5px'}}>
                                                                            <img src="src/images/JobOpenings-Blue.png" style={{'width':'150px'}}/>
                                                                    </div>

                                                                    <div className="col-md-9" style={{'marginTop':'5px'}}>
                                                                      <span style={{'fontSize':'20px'}}>
                                                                          <strong>
                                                                            {this.props.data.name}
                                                                            &nbsp;&nbsp;
                                                                             {/*<span className="label label-info">Show</span>*/}
                                                                            <button type="button" className="btn btn-info btn-sm" data-toggle="modal"
                                                                                data-target="#exampleModal" data-whatever="@getbootstrap"  >Show</button>
                                                                            &nbsp;&nbsp;
                                                                            {/*<span className="label btnbrowse" style={{'cursor':'pointer'}}>Approve</span>*/}
                                                                            <button type="button" className="btn btn-primary btn-sm">Approve</button>
                                                                            <button className="btn btn-default" data-toggle="confirmation">Confirmation</button>
                                                                        </strong>
                                                                      </span>                                                                      
                                                                    </div>
                                                                  
                                                                </div>    

                                                                <div className="row">
                                                                     <div className="col-md-2" style={{'marginTop':'5px'}}>
                                                                     </div>    
                                                                     <div className="col-md-9">
                                                                        {this.props.data.description}
                                                                     </div>   
                                                                </div>    
                                                            </div> 
                                  
            </div>
        )
    }
}