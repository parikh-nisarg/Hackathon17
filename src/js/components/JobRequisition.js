import React from 'react';
import ReactDOM from 'react-dom';

export default class JobRequisition extends React.Component{
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
                                                                            {this.props.data.title}
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

                                                            
                  <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog"
                                                 aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div className="modal-dialog" role="document">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h5 className="modal-title" id="exampleModalLabel">JOB REQUISITION APPROVE</h5>
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
        )
    }
}