import React from 'react';
import ReactDOM from 'react-dom';
import Database from './Database';

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
showPopup(){
    document.getElementById('recipient-name-title').value=this.props.data.title;
    document.getElementById('recipient-name-role').value=this.props.data.role;
    document.getElementById('recipient-name-skills').value=this.props.data.skills;
    document.getElementById('message-text-description').value=this.props.data.description;
    document.getElementById('recipient-name-location').value=this.props.data.location;
    document.getElementById('recipient-name-totalRequirements').value=this.props.data.totalRequirements;
    document.getElementById('literalDataId').title=this.props.data.id;
}
    updateJob(mode) {
        
        
        let key = document.getElementById('literalDataId').title;       
        
        let title = document.getElementById('recipient-name-title').value;
        let description = document.getElementById('message-text-description').value;
        let position = document.getElementById('recipient-name-role').value;
        let skill = document.getElementById('recipient-name-skills').value;
        let requiredPost = document.getElementById('recipient-name-totalRequirements').value;
        let location = document.getElementById('recipient-name-location').value;

        let objData = { title: title, description: description, role: position, skills:skill, 
                        totalRequirements: requiredPost, location: location, status:'open',
                        postedDate: (new Date()), isPosted:false, isApproved:mode, appliedUserIds:'', id:key  };

        this.props.showJob(key, objData);
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
                                {/*<button type="button" className="btn btn-info btn-sm" data-toggle="modal"  style={{'float':'right', 'marginLeft':'4px'}}
                                    data-target="#exampleModal" data-whatever="@getbootstrap"  >Show</button>*/}

                                &nbsp;&nbsp;
                                {/*<span className="label btnbrowse" style={{'cursor':'pointer'}}>Approve</span>*/}
                                
                                {/*<button className="btn btn-default" data-toggle="confirmation" style={{'float':'right', 'marginLeft':'4px'}}>Confirmation</button>*/}
                                <button type="button" className="btn btn-primary btn-sm" style={{'float':'right', 'marginLeft':'4px'}}>Approve</button>

                                <button type="button" className="btn btn-info btn-sm" data-toggle="modal"  style={{'float':'right', 'marginLeft':'4px'}} 
                                    data-target={`#${this.props.data.id}`} data-whatever="@getbootstrap" onClick={this.showPopup.bind(this)}  >View</button>
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

                
                <div className="modal fade"  tabIndex="-1" role="dialog" id={this.props.data.id}
                        aria-labelledby="exampleModalLabel" aria-hidden="true" hidden="true">
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
                                        data-dismiss="modal" onClick={this.updateJob.bind(this, true)} >Approve
                                </button>
                                <button type="button" onClick={this.updateJob.bind(this, false)} className="btn btn-primary">Reject
                                </button>
                            </div>
                        </div>
                    </div>
                </div>                                            
            </div>
        )
    }
}