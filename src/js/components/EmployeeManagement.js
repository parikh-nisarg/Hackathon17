/**
 * Created by Nisarg on 5/28/2017.
 */

import React from 'react';
import database from './Database';

export default class EmployeeManagement extends React.Component {
    constructor() {
        super();

        this.state = {employeeDetails: {}, projectDetails: [], taskDetails: [], clientDetails: [], allTaskStatus: []};
    }

    componentDidMount() {
        let userId = this.props.match.params.id;
        if (userId != "") {
            let userDetails = new database("UserDetails");
            userDetails.getData(userId).then((user) => {
                this.setState({employeeDetails: user.val()})

                this.setProjectDetailsState();
                this.setTaskDetailsState();
                this.setClientDetailsState();
                this.setTaskStatusState();

                this.fillEmployeeInformation();
                this.showSkills();

            })
        }

        // if (this.state.employeeDetails.workingDetails) {
        // this.setProjectDetailsState();
        // this.setTaskDetailsState();
        // this.setClientDetailsState();
        // this.setTaskStatusState();
        //
        // this.fillEmployeeInformation();
        // }

        $(document).on("change", ".dlalltaskstatus", this.changeIndividualTaskStatus.bind(this));
        $(document).on("change", "#btnUploadResume", this.uploadResume.bind(this));
    }

    changeIndividualTaskStatus(e) {
        let taskId = $(e.currentTarget).find(":selected").attr("data-taskId");
        let taskStatusId = $(e.currentTarget).find(":selected").attr("data-taskStatusId");

        let task = this.state.taskDetails[taskId];
        task.taskStatusId = taskStatusId;

        let taskDetails = new database("TaskDetails");
        taskDetails.dataOperation(taskId, task);
    }

    setProjectDetailsState() {
        const projectId = this.state.employeeDetails.workingDetails.projectId;

        let projectDetails = new database("ProjectDetails");
        projectDetails.getData(parseInt(projectId)).then((data) => {
            let projectDetails = data.val();

            this.setState({projectDetails});
        });
    }

    setTaskDetailsState() {
        const employeeId = this.state.employeeDetails.id;

        let taskDetails = new database("TaskDetails");
        taskDetails.searchData("assignToId", employeeId).then((data) => {
            let taskDetails = data.val();

            this.setState({taskDetails});
        });
    }

    setClientDetailsState() {
        const clientId = this.state.employeeDetails.workingDetails.clientId;

        let clientDetails = new database("ClientDetails");
        clientDetails.getData(clientId).then((data) => {
            let clientDetails = data.val();

            this.setState({clientDetails});
        });
    }

    setTaskStatusState() {
        //set task status state
        let taskStatusDetails = new database("TaskStatusDetails");
        taskStatusDetails.getList().then((status) => {
            const allTaskStatus = status.val();

            this.setState({allTaskStatus});
        });
    }

    employeeWorkingMsg() {
        let empMsg = "";
        if (this.state.projectDetails && this.state.clientDetails) {
            empMsg = (
                <div>
                    <div className="row">
                        <div className="col-md-2">

                        </div>
                        <div className="col-md-8"
                             style={{'textAlign':'center','fontSize':'18px','padding':'12px'}}>&nbsp;&nbsp;
                            <span style={{'color':'grey'}}><b>Project:</b> </span>
                            <span> {this.state.projectDetails.name}</span> <span style={{'color':'grey'}}><b>Client:</b></span>
                            <span> {this.state.clientDetails.name}</span>
                        </div>
                        <div className="col-md-2">
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4">

                        </div>
                        <div className="col-md-4" style={{'textAlign':'center','fontSize':'28px'}}>&nbsp;&nbsp;
                            <span className="label myButton">Tasks</span>
                        </div>
                        <div className="col-md-4">

                        </div>
                    </div>


                </div>
            )
        }

        return (empMsg);
    }

    renderTaskDetails(key) {
        const task = this.state.taskDetails[key];
        if (task) {
            return (<div className="row" key={key}>
                <div className="col-md-8" style={{'fontSize':'18px','padding':'8px'}}>
                    {task.name}
                </div>
                <div className="col-md-3">
                    <div className="form-group" style={{'width':'125px','float':'right'}}>
                        <select className="form-control dlalltaskstatus">
                            {Object.keys(this.state.allTaskStatus).map((key) => {
                                const taskStatus = this.state.allTaskStatus[key];
                                const _selected = task.taskStatusId == taskStatus.id ? "selected" : "";

                                return (<option key={taskStatus.id}
                                                data-taskId={task.id} selected={_selected}
                                                data-taskStatusId={taskStatus.id}>{taskStatus.name}</option>)

                            })}
                        </select>
                    </div>
                </div>
            </div>)
        }
    }

    fillEmployeeInformation() {
        const employeeDetails = this.state.employeeDetails;

        this.refs.txtName.value = employeeDetails.name;
        this.refs.txtAddress.value = employeeDetails.address != undefined ? employeeDetails.address : "";
        this.refs.txtEmail.value = employeeDetails.email != undefined ? employeeDetails.email : "";
        this.refs.txtContact.value = employeeDetails.contact != undefined ? employeeDetails.contact : "";
        this.refs.txtSkill.value = employeeDetails.skills != undefined ? employeeDetails.skills : "";
    }

    updateEmployeeInformation() {
        const employeeDetails = this.state.employeeDetails;

        employeeDetails.name = this.refs.txtName.value;
        employeeDetails.address = this.refs.txtAddress.value;
        employeeDetails.email = this.refs.txtEmail.value;
        employeeDetails.contact = this.refs.txtContact.value;
        employeeDetails.skills = this.refs.txtSkill.value;

        const _employeeDetails = new database("UserDetails");
        _employeeDetails.dataOperation(employeeDetails.id, employeeDetails);
    }

    viewResume() {
        javascript:window.open(this.state.employeeDetails.resumeUrl, "detab", "toolbar=0");
    }

    uploadResume(e) {
        let employeeDetails = this.state.employeeDetails;
        let file = e.target.files[0];
        let objDatabase = new database("");
        objDatabase.fileUpload(file).then((result) => {
            employeeDetails.resumeUrl = result;

            let userDetails = new database("UserDetails");
            userDetails.dataOperation(employeeDetails.id, employeeDetails);
        }, (error) => {
            console.error(error);
        });
    }

    setResume() {
        return (<div>
          
            <div className="row">
                <div className="col-md-12">
                   
                        <input id="btnUploadResume" type="file" className="btn myButton"
                   onChange={this.uploadResume.bind(this)}
                   accept="application/pdf"/>
                   
                 
                </div>
                
            </div><br/>
            <div className="row">
            <div className="col-md-12">
                        <button type="button" className="btn myButton" onClick={this.viewResume.bind(this)} >View</button> 
             </div>
             </div>
            
        </div>)
    }

    updateSkills() {
        let skills = $("#txtEmployeeSkills").val();
        let employeeDetails = this.state.employeeDetails;
        employeeDetails.skills = skills;

        const userDetails = new database("UserDetails");
        userDetails.dataOperation(employeeDetails.id, employeeDetails);
    }

    showSkills() {
        let employeeDetails = this.state.employeeDetails;
        $("#txtEmployeeSkills").val(employeeDetails.skills);
    }

    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row-fluid">
                        <div className="col-md-12">
                            <div id="exTab2" className="container">
                                <ul className="nav nav-tabs">

                                    <li className="active" style={{'width':'33%'}}>
                                        <a href="#1" data-toggle="tab">JOBS</a>
                                    </li>
                                    <li style={{'width':'33%'}}>
                                        <a href="#2" data-toggle="tab">TASK MANAGEMENT</a>
                                    </li>
                                    <li style={{'width':'33%'}}>
                                        <a href="#3" data-toggle="tab">PROFILE</a>
                                    </li>
                                </ul>

                                <div className="tab-content ">
                                    <div className="tab-pane active" id="1">

                                    </div>

                                    <div className="tab-pane" id="2">

                                        {this.state.employeeDetails.workingDetails != undefined ? this.employeeWorkingMsg() : ""}

                                        {this.state.taskDetails != undefined ? Object.keys(this.state.taskDetails).map((key) => {
                                            return this.renderTaskDetails(key)
                                        }) : ""}
                                    </div>
                                    <br/>    
                                    <div className="tab-pane" id="3">
                                        <div id="exTab1" className="container">
                                            <ul className="nav nav-pills">
                                                <li className="active">
                                                    <a href="#1a" data-toggle="tab">General Information</a>
                                                </li>
                                                <li><a href="#2a" data-toggle="tab">Resume</a>
                                                </li>
                                                <li><a href="#3a" data-toggle="tab">Skillsets</a>
                                                </li>
                                            </ul>

                                            <div className="tab-content clearfix">
                                                <div className="tab-pane active" id="1a"><br/>
                                                    <div className="container-fluid">
                                                        <div className="row">
                                                            <div className="col-md-4" style={{ 'marginTop': '-24px' }}>
                                                                <form className="go-bottom">
                                                                    <div>
                                                                        <input id="name" name="name" type="text"
                                                                               required ref="txtName"/>
                                                                        <label htmlFor="name">Name</label>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-4" style={{ 'marginTop': '-24px' }}>
                                                                <form className="go-bottom">
                                                                    <div>
                                                                        <input id="address" name="address" type="text"
                                                                               required ref="txtAddress"/>
                                                                        <label htmlFor="address">Address</label>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-4" style={{ 'marginTop': '-24px' }}>
                                                                <form className="go-bottom">
                                                                    <div>
                                                                        <input id="email" name="email" type="email"
                                                                               required ref="txtEmail"/>
                                                                        <label htmlFor="email">Email</label>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-4" style={{ 'marginTop': '-24px' }}>
                                                                <form className="go-bottom">
                                                                    <div>
                                                                        <input id="contactnumber" name="contactnumber"
                                                                               type="number" required ref="txtContact"/>
                                                                        <label htmlFor="contactnumber">Contact
                                                                            Number</label>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-4" style={{ 'marginTop': '-24px' }}>
                                                                <form className="go-bottom">
                                                                    <div>
                                                                        <input id="skill" name="skill" type="text"
                                                                               required ref="txtSkill"/>
                                                                        <label htmlFor="skill">Skills</label>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>
                                                        <div className="row-fluid" style={{ 'marginTop': '14px' }}>
                                                            <div className="col-md-4">
                                                                <button type="button" className="btn btnbrowse"
                                                                        onClick={this.updateEmployeeInformation.bind(this)}>
                                                                    Update
                                                                </button>
                                                                &nbsp;&nbsp;
                                                                <button type="button" className="btn btnbrowse">Cancel
                                                                </button>
                                                            </div>
                                                        </div>


                                                    </div>
                                                </div>
                                                <div className="tab-pane" id="2a">
                                                    <br/>
                                                    {this.state.employeeDetails.resumeUrl != undefined ? this.setResume() : ""}
                                                </div>
                                                <div className="tab-pane" id="3a">
                                                    <label>Skillsets</label>
                                                    <input type="text" id="txtEmployeeSkills" className="form-control"/>
                                                    <button id="btnUpdateSkills" onClick={this.updateSkills.bind(this)}>
                                                        Update Skills
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
