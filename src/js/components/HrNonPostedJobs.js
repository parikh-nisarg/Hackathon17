
import React from 'react';
import ReactDOM from 'react-dom';

//two way binding 

export default class HrNonPostedJobs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: []
        }
    }

    componentDidMount() {
        this.state.data = this.props.data;
        this.setState({ data: this.state.data });
    }

    jobPosted() {
        debugger;
        //  this.props.jobPosted(this.props.data);
        // document.getElementById(`show${this.state.data.id}`).style.display = "none";
        // $('.modal.in').modal('hide');
        // $(`#${this.state.data.id}`).modal('toggle').modal('hide');
         $("#mypopup").modal('hide');
        this.props.data.isPosted = true;
        this.state.data = this.props.data;
        this.setState({ data: this.state.data });
       
        
         if(this.state.data.isPosted){
            $("#btnShow").removeClass("btn-primary").addClass("btn-success");
        }
            
         this.props.jobPosted(this.state.data);
    }

    showPopup(e) {
        debugger;
        $("#lblTitle").text(this.state.data.title);
        $("#lblRole").text(this.state.data.role);
        $("#lblDesc").text(this.state.data.description);
        $("#lblLocation").text(this.state.data.location);
        $("#lblSkills").text(this.state.data.skills);
        $("#lblTotal").text(this.state.data.totalRequirements);
        if(this.state.data.isPosted){
            $("#btnPosted").css({display:"none"});
        }
        // this.refs.lblTitle = this.state.data.title;
        // this.refs.lblRole = this.state.data.role;
        // this.refs.lblDesc = this.state.data.description;
        // this.refs.lblLocation = this.state.data.location;
        // this.refs.lblSkills = this.state.data.skills;
        // this.refs.lblTotal = this.state.data.totalRequirements;
        $("#mypopup").modal('show');
    }

    render() {
        return (
            <div>

                {/*Grid Row*/}
                <div style={{ 'marginTop': '25px', 'border': '1px solid #e8dddd', 'borderRadius': '8px' }}>
                    <div className="row" >
                        <div className="col-md-2" style={{ 'marginTop': '5px', 'marginLeft': '5px' }}>
                            <img src="src/images/JobOpenings-Blue.png" style={{ 'width': '150px' }} />
                        </div>

                        <div className="col-md-9" style={{ 'marginTop': '5px' }}>
                            <span style={{ 'fontSize': '20px' }}>
                                <strong>
                                    {this.state.data.title}
                                    &nbsp;&nbsp;
                                                                             {/*<span className="label label-info">Show</span>*/}
                                    {/*<button type="button" className="btn btn-info btn-sm" data-toggle="modal"
                                                    data-target={`#${this.props.data.id}`} data-whatever="@getbootstrap">Show</button>*/}
                                    &nbsp;&nbsp;
                                                                            {/*<span className="label btnbrowse" style={{'cursor':'pointer'}}>Approve</span>*/}
                                    {/*<button type="button" className="btn btn-primary btn-sm">Posted</button>*/}

                                    <button type="button" id="btnShow" className="btn btn-primary btn-sm" onClick={this.showPopup.bind(this)} >Show</button>

                                </strong>
                            </span>
                        </div>

                    </div>

                    <div className="row">
                        <div className="col-md-2" style={{ 'marginTop': '5px' }}>
                        </div>
                        <div className="col-md-9">
                            {this.state.data.description}
                        </div>
                    </div>
                </div>

                {/*popup */}
                <div className="modal fade" id="mypopup" tabIndex="-1" role="dialog"
                    aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Job Post</h5>
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
                                                className="form-control-label">Title:</label>
                                            <label className="form-control-label" id="lblTitle">{this.state.data.title}</label>
                                            {/*<input type="text" className="form-control" readOnly="true"
                                                                               ref="txtTitle" defaultValue={this.props.data.title} />*/}
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="recipient-name"
                                                className="form-control-label">Role:</label>
                                            <label className="form-control-label" id="lblRole" >{this.state.data.role}</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="recipient-name"
                                                className="form-control-label">Description:</label>
                                            <label className="form-control-label" id="lblDesc" >{this.state.data.description}</label>
                                            {/*<input type="text" className="form-control" readOnly="true"
                                                                               ref="txtTitle" defaultValue={this.props.data.title} />*/}
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="recipient-name"
                                                className="form-control-label">Location:</label>
                                            <label className="form-control-label" id="lblLocation" >{this.state.data.location}</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="recipient-name"
                                                className="form-control-label">Skill:</label>
                                            <label className="form-control-label" id="lblSkills">{this.state.data.skills}</label>
                                            {/*<input type="text" className="form-control" readOnly="true"
                                                                               ref="txtTitle" defaultValue={this.props.data.title} />*/}
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="recipient-name"
                                                className="form-control-label">Total Requirement:</label>
                                            <label className="form-control-label" id="lblTotal">{this.state.data.totalRequirements}</label>
                                        </div>
                                    </div>
                                </div>




                            </div>

                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary"
                                    data-dismiss="modal">Close
                                                            </button>
                                <button type="button" className="btn btn-primary" id="btnPosted" onClick={this.jobPosted.bind(this)} >Posted
                                                            </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }

}

