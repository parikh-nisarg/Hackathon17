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
            userList: []
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
            debugger;
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


        let objDatabase = new Database("JobDetails");
        objDatabase.dataOperation(key, objData).then((result) => {
            let dataToUpdate = this.state.jobs[key];

            dataToUpdate.title = objData.title;
            dataToUpdate.description = objData.description;
            dataToUpdate.role = objData.role;
            dataToUpdate.skills = objData.skills;
            dataToUpdate.totalRequirements = objData.totalRequirements;
            dataToUpdate.location = objData.location;
            dataToUpdate.status = objData.status;
            dataToUpdate.isApproved = objData.isApproved;
            dataToUpdate.id = objData.id;

            this.setState({ jobs: this.state.jobs })
            alert("Data updated successfully....");
        }, (error) => {
            alert(error);
        })
    }

    renderJobs(key) {
        let data = this.state.jobs[key];
        data.key = key;
        return (
            <ManagerJobApprove key={key} showJob={this.showJob} data={data} />
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
        console.log(data);
        return (
            //   <ManagerUserManagement key={key} showJob={this.showJob} data={data} />
            <div key={key}>
                <div style={{ 'marginTop': '25px', 'border': '1px solid #e8dddd', 'borderRadius': '8px' }}>
                    <div className="row" >
                        <div className="col-md-2" style={{ 'marginTop': '5px', 'marginLeft': '5px' }}>
                            <img src="src/images/userprofile.png" style={{ 'width': '150px' }} />
                        </div>

                        <div className="col-md-9" style={{ 'marginTop': '5px' }}>
                            <span style={{ 'fontSize': '20px' }}>
                                <strong>
                                    name :     {data.name}
                                    Experience:      {data.expYear}
                                    Contact No : {data.contact}
                                    email:{data.email}
                                    skills :{data.skill}
                                    &nbsp;&nbsp;
                                    &nbsp;&nbsp;
                                    <button type="button" className="btn btn-primary btn-sm" style={{ 'float': 'right', 'marginLeft': '4px' }}>Submit</button>

                                    <button type="button" className="btn btn-info btn-sm" onClick={this.displayUserInfo.bind(this, key)} style={{ 'float': 'right', 'marginLeft': '4px' }}
                                        data-whatever="@getbootstrap"   >View</button>
                                </strong>
                            </span>
                        </div>

                    </div>

                    <div className="row">
                        <div className="col-md-2" style={{ 'marginTop': '5px' }}>
                        </div>
                        <div className="col-md-9">
                            {/*{this.props.data.name}*/}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    displayUserInfo(key) {
        $("#divUserInfo").modal('show');
        var data = this.state.userList[key];

        if (data.roleId == 2) {
            $("#divTeadLead").css({ display: "" });
        }
        else{
             $("#divTeadLead").css({ display: "none" });
        }

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

                                        <h1>User Management</h1>
                                        {/*<ManagerUserManagement />*/}

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
                                            <label htmlFor="recipient-name"
                                                className="form-control-label">Client Rating:</label>
                                            <input type="number" className="form-control"
                                                id="recipient-name-title" defaultValue="" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="recipient-name"
                                                className="form-control-label">Manager Rating:</label>
                                            <input type="text" className="form-control"
                                                id="recipient-name-role" defaultValue="" />
                                        </div>
                                    </div>
                                </div>


                                <div className="row" id="divTeadLead" >
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="recipient-name"
                                                className="form-control-label">Team Lead Projects:</label>
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
                                <button type="button" className="btn btn-secondary"
                                    data-dismiss="modal"  >Approve
                                </button>
                                <button type="button" className="btn btn-primary">Reject
                                </button>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        )
    }
}

