import React from 'react';
import ReactDOM from 'react-dom';
import Database from './Database';

export default class ManageJobApprove extends React.Component {
    constructor() {
        super();
        this.state = {
            objData: {}
        };
    }

    componentDidMount() {
        this.state.objData = this.props.data;
        this.setState({ objData: this.state.objData });
    }

    showJob() {
        debugger;
        this.props.showJob(this.props.data.id);
    }
    showPopup() {
        debugger;
        $('#recipient-name-title').val(this.props.data.title);
        $('#recipient-name-role').val(this.props.data.role);
        $('#recipient-name-skills').val(this.props.data.skills);
        $('#message-text-description').val(this.props.data.description);
        $('#recipient-name-location').val(this.props.data.location);
        $('#recipient-name-totalRequirements').val(this.props.data.totalRequirements);
        document.getElementById('literalDataId').title = this.props.data.id;

        $("#modelJobApprove").modal('show');
        if (this.props.data.isRejected) {
              $("#btnModalApprove").css({ display: "none" });
            $("#btnModalReject").css({ display: "none" });
            $("#btnModalCancel").css({ display: "" });
        }
        else {
             $("#btnModalApprove").css({ display: "" });
            $("#btnModalReject").css({ display: "" });
            $("#btnModalCancel").css({ display: "none" });
        }
    }
    updateJob(mode) {


        let key = document.getElementById('literalDataId').title;

        let title = $('#recipient-name-title').val();
        let description = $('#message-text-description').val();
        let position = $('#recipient-name-role').val();
        let skill = $('#recipient-name-skills').val();
        let requiredPost = $('#recipient-name-totalRequirements').val();
        let location = $('#recipient-name-location').val();
        let isApproved = mode == "approved" ? true : false;
        let isRejected = mode == "rejected" ? true : false;

        let objData = {
            title: title, description: description, role: position, skills: skill,
            totalRequirements: requiredPost, location: location, status: 'open',
            postedDate: (new Date()), isPosted: false, isApproved: isApproved, isRejected: isRejected, appliedUserIds: '', id: key
        };

        this.props.data = objData;

        this.props.showJob(key, objData);
    }

    hideMode() {
        $("#modelJobApprove").modal('hide');
    }

    render() {
        debugger;
        var data = this.props.data;
        // var isAvailable = data.isApproved ? true : false;
       // data.isRejected ? $(`#btnApprove${data.id}`).css({ display: "none" }) : $(`#btnApprove${data.id}`).css({ display: "" });


        return (
            <div>
                <div style={{ 'marginTop': '25px', 'border': '1px solid #e8dddd', 'borderRadius': '8px' }}>
                    <div className="row" >
                        <div className="col-md-2" style={{ 'marginTop': '5px', 'marginLeft': '5px' }}>
                            <img src="src/images/JobOpenings-Blue.png" style={{ 'width': '150px' }} />
                        </div>

                        <div className="col-md-9" style={{ 'marginTop': '5px' }}>
                            <span style={{ 'fontSize': '20px' }}>
                                <strong>
                                    {this.props.data.title}
                                    &nbsp;&nbsp;
                                    {/*<span className="label label-info">Show</span>*/}
                                    {/*<button type="button" className="btn btn-info btn-sm" data-toggle="modal"  style={{'float':'right', 'marginLeft':'4px'}}
                                    data-target="#exampleModal" data-whatever="@getbootstrap"  >Show</button>*/}

                                    &nbsp;&nbsp;
                                {/*<span className="label btnbrowse" style={{'cursor':'pointer'}}>Approve</span>*/}

                                    {/*<button className="btn btn-default" data-toggle="confirmation" style={{'float':'right', 'marginLeft':'4px'}}>Confirmation</button>*/}
                                    <button type="button" className="btn btn-info btn-sm" style={{ 'float': 'right', 'marginLeft': '4px' }}
                                        data-whatever="@getbootstrap" onClick={this.showPopup.bind(this)}  >View</button>
                                    {/*<button type="button" id={`btnApprove${data.id}`} className="btn btn-primary btn-sm" onClick={this.updateJob.bind(this,"approved")} style={{ 'float': 'right', 'marginLeft': '4px' }}>Approve</button>*/}


                                </strong>
                            </span>
                        </div>

                    </div>

                    <div className="row">
                        <div className="col-md-2" style={{ 'marginTop': '5px' }}>
                        </div>
                        <div className="col-md-9">
                            {this.props.data.description}
                        </div>
                    </div>
                </div>


                <div className="modal fade" tabIndex="-1" role="dialog" id="modelJobApprove"
                    aria-labelledby="exampleModalLabel" aria-hidden="true" hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">JOB REQUISITION APPROVE</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                <label id="literalDataId" hidden="true" />
                            </div>


                            <div className="modal-body">

                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="recipient-name"
                                                className="form-control-label">Title:</label>
                                            <input type="text" className="form-control"
                                                id="recipient-name-title" defaultValue="" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="recipient-name"
                                                className="form-control-label">Position:</label>
                                            <input type="text" className="form-control"
                                                id="recipient-name-role" defaultValue="" />
                                        </div>
                                    </div>
                                </div>


                                <div className="form-group">
                                    <label htmlFor="recipient-name"
                                        className="form-control-label">Skills:</label>
                                    <input type="text" className="form-control"
                                        id="recipient-name-skills" defaultValue="" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message-text"
                                        className="form-control-label">Description:</label>
                                    <textarea className="form-control"
                                        id="message-text-description" defaultValue=""></textarea>
                                </div>

                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="recipient-name"
                                                className="form-control-label">Location:</label>
                                            <input type="text" className="form-control"
                                                id="recipient-name-location" defaultValue="" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="recipient-name"
                                                className="form-control-label">No. Of Vacancy :</label>
                                            <input type="text" className="form-control"
                                                id="recipient-name-totalRequirements" defaultValue="" />
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" id="btnModalApprove"
                                    data-dismiss="modal" onClick={this.updateJob.bind(this, "approved")} >Approve
                                </button>
                                <button type="button" id="btnModalReject" onClick={this.updateJob.bind(this, "rejected")} className="btn btn-primary">Reject
                                </button>
                                <button type="button" id="btnModalCancel" style={{ "display": "none" }} onClick={this.hideMode.bind(this)} className="btn btn-primary">Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}