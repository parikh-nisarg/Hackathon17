import React from 'react';
import ReactDOM from 'react-dom';
import Database from './Database';
import ManagerJobApprove from './ManagerJobApprove';
import UserProfile from './UserProfile';
import ManagerUserManagement from './ManagerUserManagement'


export default class ManagerDashboard extends React.Component {
    constructor() {
        super();
        this.state = {
            jobs: [],
            teamLeadList: [],
            singleUserDetail: [],
            userList: [],
            editUser: {}
        }
    }


    componentDidMount() {
        let objDatabase = new Database('JobDetails');
        objDatabase.getList().then((result) => {
            let dataList = result.val();
            this.state.jobs = dataList;
            this.setState({ jobs: this.state.jobs });
        }, (error) => {
            alert(error);
        });

        let objDatabase1 = new Database('UserDetails');
        objDatabase1.getList().then((result) => {

            let dataList = result.val();
            this.state.userList = dataList;
            this.setState({ userList: this.state.userList });
        }, (error) => {
            alert(error);
        });

        // objDatabase1.searchData("roleId", 2).then((result) => {
        //     let dataList = result.val();
        //     this.state.teamLeadList = dataList;
        //     this.setState({ teamLeadList: this.state.teamLeadList });
        // }, (error) => {
        //     alert(error);
        // });

        let objDatabase2 = new Database('UserDetails');
        objDatabase1.getData("5UKSFBvpi7OgDS2Ncx0c8hLg9t62").then((result) => {
            let singleUserDetail = result.val();
            this.state.singleUserDetail = singleUserDetail;
            this.setState({ singleUserDetail: this.state.singleUserDetail });
        }, (error) => {
            alert(error);
        });
    }

    showJob(key, objData) {

        let _this = this;
        let objDatabase = new Database("JobDetails");
        objDatabase.dataOperation(key, objData).then((result) => {
            debugger;
            if (_this.state) {
                let dataToUpdate = _this.state.jobs[key];

                dataToUpdate.title = objData.title;
                dataToUpdate.description = objData.description;
                dataToUpdate.role = objData.role;
                dataToUpdate.skills = objData.skills;
                dataToUpdate.totalRequirements = objData.totalRequirements;
                dataToUpdate.location = objData.location;
                dataToUpdate.status = objData.status;
                dataToUpdate.isApproved = objData.isApproved;
                dataToUpdate.isRejected = objData.isRejected;
                dataToUpdate.id = objData.id;

                _this.setState({ jobs: this.state.jobs })
            }

            alert("Data updated successfully....");
        }, (error) => {
            alert(error);
        })
    }

    updateJob(mode) {
        debugger;
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
        
        $("#modelJobApprove").modal('hide');
        // this.props.data = objData;

        // this.props.showJob(key, objData);

        let objDatabase = new Database("JobDetails");
        objDatabase.dataOperation(key, objData).then((result) => {
            debugger;
            if (this.state) {
                this.state.jobs[key] = objData;
                this.setState({ jobs: this.state.jobs })
            }

            alert("Data updated successfully....");
        }, (error) => {
            alert(error);
        })
    }

    hideModelJobApprove() {
        $("#modelJobApprove").modal('hide');
    }

    showPopup(key) {
        var data = this.state.jobs[key];
        $('#recipient-name-title').val(data.title);
        $('#recipient-name-role').val(data.role);
        $('#recipient-name-skills').val(data.skills);
        $('#message-text-description').val(data.description);
        $('#recipient-name-location').val(data.location);
        $('#recipient-name-totalRequirements').val(data.totalRequirements);
        document.getElementById('literalDataId').title = data.id;

        $("#modelJobApprove").modal('show');
        debugger;
        if (data.isRejected || data.isApproved) {
            $("#btnModalApprove").css({ display: "none" });
            $("#btnModalReject").css({ display: "none" });
            $("#btnModalCancel").css({ display: "" });
        }
        else {
            $("#btnModalApprove").css({ display: "" });
            $("#btnModalReject").css({ display: "" });
            $("#btnModalCancel").css({ display: "none" });
        }
        $("#modelJobApprove").modal('show');
    }

    renderJobs(key) {
        let data = this.state.jobs[key];
        data.key = key;
        let text = data.isApproved && !data.isRejected ? "Approved" : "View"
        return (
            // <ManagerJobApprove key={key} showJob={this.showJob} data={data} />
            <div key={key}>
                <div style={{ 'marginTop': '25px', 'border': '1px solid #e8dddd', 'borderRadius': '8px' }}>
                    <div className="row" >
                        <div className="col-md-2" style={{ 'marginTop': '5px', 'marginLeft': '5px' }}>
                            <img src="src/images/JobOpenings-Blue.png" style={{ 'width': '150px' }} />
                        </div>

                        <div className="col-md-9" style={{ 'marginTop': '5px' }}>
                            <span style={{ 'fontSize': '20px' }}>
                                <strong>
                                    {data.title}
                                    &nbsp;&nbsp;
                                    &nbsp;&nbsp;

                                    {/*<button className="btn btn-default" data-toggle="confirmation" style={{'float':'right', 'marginLeft':'4px'}}>Confirmation</button>*/}
                                    <button type="button" className="btn btn-info btn-sm" style={{ 'float': 'right', 'marginLeft': '4px' }}
                                        data-whatever="@getbootstrap" onClick={this.showPopup.bind(this, key)}  >{text}</button>
                                    {/*<button type="button" id={`btnApprove${data.id}`} className="btn btn-primary btn-sm" onClick={this.updateJob.bind(this,"approved")} style={{ 'float': 'right', 'marginLeft': '4px' }}>Approve</button>*/}


                                </strong>
                            </span>
                        </div>

                    </div>

                    <div className="row">
                        <div className="col-md-2" style={{ 'marginTop': '5px' }}>
                        </div>
                        <div className="col-md-9">
                            {data.description}
                        </div>
                    </div>
                </div>
            </div>
        )


    }

    renderManamgement(key) {
        let data = this.state.teamLeadList[key];
        return (
            <TaskManagement key={key} showJob={this.showJob} data={data} />
        )
    }

    showProfile(id) {

    }

    renderProfile(key) {
        let singleUserDetail = this.state.singleUserDetail;
        return (
            <UserProfile key={this.state.singleUserDetail.id} showProfile={this.showProfile} data={singleUserDetail} />
        )

    }

    renderUsers(key) {
        let data = this.state.userList[key];
        var roleType = data.roleId == 2 ? "Team Leader" : "Employee";
        if ([2, 3].indexOf(data.roleId) != -1) {
            return (

                <div key={key}>

                    <div className="row" >
                        <div className="col-md-2">

                        </div>
                        <div className="col-md-7">
                            <div style={{ 'marginTop': '10px', 'border': '1px solid #e8dddd', 'borderRadius': '8px', 'marginBottom': '-17px' }}>
                                <div className="row">
                                    <div className="col-md-2" style={{ 'marginTop': '5px', 'marginLeft': '5px' }}>
                                        <img src="src/images/userprofile.png" style={{ 'width': '80px', 'height': '60px' }} />
                                    </div>
                                    <div className="col-md-4" style={{ 'fontSize': '13px' }}>
                                        <div><b>Name</b>  {data.name}</div>
                                        <div><b>Skills</b> {data.skill}</div>
                                        <div><b>Experience</b>  {data.expYear} Years</div>
                                        <div><b>Role</b> {roleType}</div>
                                        <div><b>Email</b> {data.email}</div>
                                        <div><b>Contact No</b> {data.contact}</div>
                                    </div>
                                    <div className="col-md-6" style={{ 'margin': '19px', 'width': '220px', 'float': 'right' }}>
                                        <button type="button" className="btn btn-primary btn-sm" id={`btnResume${key}`} onClick={this.displayUserInfo.bind(this, key)}>View</button>
                                        &nbsp;&nbsp;
                                </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-3">

                    </div> <br />

                </div >
            )
        }

    }

    displayUserInfo(key) {
        debugger;
        $("#divUserInfo").modal('show');
        var data = this.state.userList[key];

        if (data.roleId == 2) {
            $("#divTeadLead").css({ display: "" });
        }
        else {
            $("#divTeadLead").css({ display: "none" });
        }
        this.state.editUser = data;
        this.setState({ editUser: this.state.editUser });

        if (data.performanceDetails) {
            $("#txtClientRating").val(data.performanceDetails.clientRating);
            $("#txtManagerRating").val(data.performanceDetails.managerRating);
        }
        else {
            $("#txtClientRating").val("");
            $("#txtManagerRating").val("");
        }

    }

    saveRating() {
        debugger;
        let clientRating = $("#txtClientRating").val();
        let managerRating = $("#txtManagerRating").val();
        this.state.editUser.performanceDetails = { clientRating, managerRating };

        let objDatabase = new Database("UserDetails");
        objDatabase.dataOperation(this.state.editUser.id, this.state.editUser).then((result) => {
            alert("Data updated successfully....");
        }, (error) => {
            alert(error);
        })
    }

    hideModal() {
        $("#divUserInfo").modal('hide');
    }

    render() {
        return (
            <div>


                {/*tab example*/}


                <div className="container-fluid">
                    <div className="row-fluid">
                        <div className="col-md-12">


                            <div id="exTab2" className="container">
                                <ul className="nav nav-tabs">


                                    <li className="active" style={{ 'width': '33%' }}>
                                        <a href="#1" data-toggle="tab">JOBS REQUISITION</a>
                                    </li>
                                    <li style={{ 'width': '33%' }}>
                                        <a href="#2" data-toggle="tab">EMPLOYEE MANAGEMENT</a>
                                    </li>
                                    <li style={{ 'width': '33%' }}>
                                        <a href="#3" data-toggle="tab">PROFILE</a>
                                    </li>


                                </ul>

                                <div className="tab-content ">
                                    <div className="tab-pane active" id="1">

                                        {
                                            Object.keys(this.state.jobs).map((key) => { return this.renderJobs(key) })
                                        }


                                    </div>

                                    <div className="tab-pane" id="2">

                                        {
                                            Object.keys(this.state.userList).map((key) => { return this.renderUsers(key) })
                                        }

                                    </div>

                                    <div className="tab-pane" id="3">
                                        <h3>Display Registration form details in read only mode. and on Eidit click Save changes btn and let them edit</h3>

                                        {
                                            this.renderProfile(this.state.singleUserDetail)
                                        }

                                    </div>
                                </div>


                            </div>




                        </div>
                    </div>
                </div>
                {/*end tab example*/}



                <div className="modal fade" tabIndex="-1" role="dialog" id="divUserInfo"
                    aria-labelledby="exampleModalLabel" aria-hidden="true" hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">User Performance</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                <label id="literalDataId" hidden="true" />
                            </div>


                            <div className="modal-body">

                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="txtClientRating"
                                                className="form-control-label">Client Rating(%):</label>
                                            <input type="number" className="form-control"
                                                id="txtClientRating" ref="txtClientRating" defaultValue="" min="0" max="100" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="txtManagerRating"
                                                className="form-control-label">Manager Rating(%) :</label>
                                            <input type="number" className="form-control"
                                                id="txtManagerRating" defaultValue="" min="0" max="100" />
                                        </div>
                                    </div>
                                </div>


                                <div className="row" id="divTeadLead" >
                                    <div className="col-md-6">

                                    </div>
                                    <div className="col-md-6">
                                        Module Assign To TL
                                </div>
                                </div>

                            </div>

                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={this.saveRating.bind(this)}
                                    data-dismiss="modal"  >Submit
                                </button>
                                <button type="button" className="btn btn-primary" onClick={this.hideModal.bind(this)} >Cancel
                                </button>
                            </div>
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
                                <button type="button" id="btnModalCancel" style={{ "display": "none" }} onClick={this.hideModelJobApprove.bind(this)} className="btn btn-primary">Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

