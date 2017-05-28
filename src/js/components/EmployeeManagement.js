/**
 * Created by Nisarg on 5/28/2017.
 */

import React from 'react';
import database from './Database';

export default class EmployeeManagement extends React.Component {
    constructor() {
        super();

        //Employee state is temporary for now......
        const employeeDetails = {
            email: "nisarg@cakewalk.in",
            id: "5UKSFBvpi7OgDS2Ncx0c8hLg9t62",
            isResumeApproved: false,
            name: "Jignesh",
            resumeUrl: "https://firebasestorage.googleapis.com/v0/b/es6...",
            roleId: 3,
            workingDetails: {
                clientId: 2,
                location: "pune",
                moduleId: 1,
                projectId: 3,
                teamLeadId: "4BpEBnypYhfMzVqQ9oWkgXy4Sox1"
            }
        };
        this.state = {employeeDetails, projectDetails: [], taskDetails: [], clientDetails: [], allTaskStatus: []};
    }

    componentDidMount() {

        if (this.state.employeeDetails.workingDetails) {
            this.setProjectDetailsState();
            this.setTaskDetailsState();
            this.setClientDetailsState();
            this.setTaskStatusState();
        }

        $(document).on("change", ".dlalltaskstatus", this.changeIndividualTaskStatus.bind(this));
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
                    <div className="col-md-8" style={{'textAlign':'center','fontSize':'18px','padding':'12px'}}>&nbsp;&nbsp;
                         <span  style={{'color':'grey'}}><b>Project:</b> </span> <span> {this.state.projectDetails.name}</span> <span style={{'color':'grey'}}><b>Client:</b></span>
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
        debugger;
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

                                    <div className="tab-pane" id="3">
                                        <h3>Display Registration form details in read only mode. and on Eidit click Save
                                            changes btn and let them edit</h3>
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
