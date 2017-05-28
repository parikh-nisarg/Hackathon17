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
                                
                                
                                {/*<span className="label btnbrowse" style={{'cursor':'pointer'}}>Approve</span>*/}
                                <button type="button" className="btn btn-primary btn-sm" style={{'float':'right', 'marginLeft':'4px'}}>Approve</button>
                                {/*<button className="btn btn-default" data-toggle="confirmation">Confirmation</button>*/}

                                <button type="button" className="btn btn-info btn-sm" data-toggle="modal" style={{'float':'right', 'marginLeft':'4px'}}
                                    data-target="#exampleModal1" data-whatever="@getbootstrap"  >Show</button>
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

                {/* popup Modal*/}

                <div className="modal fade"  tabIndex="-1" role="dialog" id='exampleModal1'
                        aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">JOB REQUISITION APPROVE</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                <label id="literalDataId" hidden="true"/>
                            </div>


                            <div className="modal-body">
                                
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="recipient-name"
                                                    className="form-control-label">Title:</label>
                                            <input type="text" className="form-control"
                                                    id="recipient-name-title" defaultValue={this.props.data.title} />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="recipient-name"
                                                    className="form-control-label">Position:</label>
                                            <input type="text" className="form-control"
                                                    id="recipient-name-role" defaultValue={this.props.data.role}/>
                                        </div>
                                    </div>
                                </div>


                                <div className="form-group">
                                    <label htmlFor="recipient-name"
                                            className="form-control-label">Skills:</label>
                                    <input type="text" className="form-control"
                                            id="recipient-name-skills" defaultValue={this.props.data.skills}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message-text"
                                            className="form-control-label">Description:</label>
                                    <textarea className="form-control"
                                                id="message-text-description" defaultValue={this.props.data.description}></textarea>
                                </div>

                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="recipient-name"
                                                    className="form-control-label">Location:</label>
                                            <input type="text" className="form-control"
                                                    id="recipient-name-location" defaultValue={this.props.data.location}/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="recipient-name"
                                                    className="form-control-label">No. Of Vacancy :</label>
                                            <input type="text" className="form-control"
                                                    id="recipient-name-totalRequirements" defaultValue={this.props.data.totalRequirements}/>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary"
                                        data-dismiss="modal" >Approve 
                                </button>
                                <button type="button" className="btn btn-primary">Reject
                                </button>
                                {/*onClick={this.updateJob.bind(this, true)} onClick={this.updateJob.bind(this, false)}*/}
                            </div>
                        </div>
                    </div>
                </div>      

            </div>
        )
    }
}