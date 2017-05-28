/**
 * Created by Nisarg on 5/27/2017.
 */

import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import database from './Database';
import DesignApp from './DesignApp';

export default class TaskDetails extends Component {
    constructor() {
        super();

        this.state = ({
            teamLeadId: "",
            occupiedTeamLeadWork: [],
            clientInfo: [],
            projectInfo: [],
            moduleInfo: [],
            employeeIds: [],
            allTasks: [],
            allTaskStatus: []
        });
    }

    componentDidMount() {
        let userId = this.props.match.params.id;
        if (userId != "") {
            this.setState({teamLeadId: userId})
        }

        let personDetails = new database("UserDetails");
        personDetails.getList().then((data) => {
            let allUsers = data.val();
            if (allUsers) {
                allUsers = Object.keys(allUsers).map((key) => {
                    return allUsers[key]
                });
                let occupiedTeamLead = allUsers.filter((obj) => {
                    if (obj.workingDetails) {
                        return obj.workingDetails.teamLeadId == this.state.teamLeadId
                    }
                });
                let clientIds = occupiedTeamLead.map((obj) => {
                    return obj.workingDetails.clientId
                });
                clientIds = $.unique(clientIds);
                this.setClientInfoState(...clientIds);
                let projectIds = occupiedTeamLead.map((obj) => {
                    return obj.workingDetails.projectId
                });
                projectIds = $.unique(projectIds);

                let moduleIds = occupiedTeamLead.map((obj) => {
                    return obj.workingDetails.moduleId
                });
                moduleIds = $.unique(moduleIds);
                this.setProjectModuleInfoState(moduleIds, ...projectIds);
                let employeeIds = occupiedTeamLead.map((obj) => {
                    return obj.id
                });

                this.setState({
                    occupiedTeamLeadWork: occupiedTeamLead,
                    employeeIds
                });
            }
        });

        this.setAllTaskState(this.state.teamLeadId);

        //set task status state
        let taskStatusDetails = new database("TaskStatusDetails");
        taskStatusDetails.getList().then((status) => {
            const allTaskStatus = status.val();

            this.setState({allTaskStatus});
        });

        $('#modalAddTask').on('shown.bs.modal', function () {
            $('#txtTaskName').focus();
        });
        $(document).on("change", ".dlalltaskstatus", this.changeIndividualTaskStatus.bind(this));
    }

    setAllTaskState(teamLeadId) {
        let taskDetails = new database("TaskDetails");
        taskDetails.searchData(`assignById`, teamLeadId).then((data) => {
            let allTasks = data.val();
            if (allTasks) {
                this.setState({allTasks});
            }
        });
    }

    setClientInfoState(...clientIds) {
        let clientDetails = new database("ClientDetails"), clientInfo = [];
        for (let i = 0; i < clientIds.length; i++) {
            clientDetails.getData(clientIds[i]).then((data) => {
                var _clientInfo = data.val();

                clientInfo.push(_clientInfo);
                this.setState({clientInfo});
            });
        }
    }

    setProjectModuleInfoState(moduleIds, ...projectIds) {
        let projectDetails = new database("ProjectDetails"), projectInfo = [], moduleInfo = [];
        for (let i = 0; i < projectIds.length; i++) {
            projectDetails.getData(projectIds[i]).then((data) => {
                var _projectInfo = data.val();
                projectInfo.push(_projectInfo);

                let modulefromProject = _projectInfo.modules.filter((module) => {
                    if (moduleIds.toString().includes(module.id.toString())) {
                        let isModuleStateExist = this.state.moduleInfo.filter((stateModule) => {
                            return stateModule.id == module.id
                        });
                        if (isModuleStateExist.length == 0) {
                            moduleInfo.push(module);

                            this.setState({projectInfo});
                            this.setState({moduleInfo});
                        }
                    }
                });
            });
        }
    }

    renderOptions(obj) {
        return (<option data-id={obj.id} key={obj.id}>{obj.name}</option>)
    }

    openAddTaskModal(e) {
        $("#modalAddTask").modal("show");
    }

    addNewTask() {
        let id = new Date().getTime();
        let name = $("#txtTaskName").val().trim();
        let projectId = $("#dlProjects :selected").attr("data-id");
        let projectName = $("#dlProjects :selected").val();
        let moduleId = $("#dlModules :selected").attr("data-id");
        let moduleName = $("#dlModules :selected").val();
        let clientId = $("#dlClients :selected").attr("data-id");
        let createdDate = new Date;
        let deadlineDate = new Date($("#txtTaskDeadlineDate").val());
        let taskStatusId = 1495922175082;   //Static as CREATED TASK STATUS
        let assignToId = $("#dlEmployees :selected").attr("data-id");
        let assignById = this.state.teamLeadId;

        let taskObj = {
            id,
            name,
            projectId,
            projectName,
            moduleId,
            moduleName,
            clientId,
            createdDate,
            deadlineDate,
            taskStatusId,
            assignToId,
            assignById
        };

        let taskDetails = new database("TaskDetails");
        taskDetails.dataOperation(id, taskObj);

        this.setAllTaskState(this.state.teamLeadId);
        this.clearModalFields();
        $("#modalAddTask").modal("hide");
    }

    clearModalFields() {
        $("#txtTaskName").val("");
        $("#txtTaskDeadlineDate").val("");
    }

    changeIndividualTaskStatus(e) {
        let taskId = $(e.currentTarget).find(":selected").attr("data-taskId");
        let taskStatusId = $(e.currentTarget).find(":selected").attr("data-taskStatusId");

        let task = this.state.allTasks[taskId];
        task.taskStatusId = taskStatusId;

        let taskDetails = new database("TaskDetails");
        taskDetails.dataOperation(taskId, task);
    }

    changeAllTaskStatus(e) {
        const taskStatusId = $($(e.currentTarget).find(":selected")[0]).attr("data-taskStatusid"), _this = this;
        let checkedTask = $(".chk-task:checked");
        if (checkedTask.length > 0) {
            checkedTask.each((index, elem) => {
                const taskId = $(elem).attr("data-taskId");
                let task = _this.state.allTasks[parseInt(taskId)];
                task.taskStatusId = parseInt(taskStatusId);

                const taskDetails = new database("TaskDetails");
                taskDetails.dataOperation(parseInt(taskId), task);
            });

            _this.setAllTaskState(_this.state.teamLeadId);
            $(".chk-task").prop("checked", false);
        }
    }

    renderTasks(key) {
        const task = this.state.allTasks[key];
        if (task) {
            return (<div className="row" key={task.id}>
                <div className="col-md-1">
                    <div className="checkbox">
                        <label>
                            <input className="chk-task" data-taskId={task.id} type="checkbox"/>
                                                        <span className="cr">
                                                            <i className="cr-icon glyphicon glyphicon-ok"></i></span>
                        </label>
                    </div>
                </div>
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
            </div>);

        }
    }

    renderTaskStatus(key) {
        const taskStatus = this.state.allTaskStatus[key];

        return (<option data-taskStatusId={taskStatus.id} key={taskStatus.id}>{taskStatus.name}</option>)
    }

    render() {
        return ( <div>

            <div className="container-fluid">
                <div className="row-fluid">
                    <div className="col-md-12">
                        <div id="exTab2" className="container">
                            <ul className="nav nav-tabs">
                                <li className="active" style={{'width':'33%'}}>
                                    <a href="#1" data-toggle="tab">PROFILE</a>
                                </li>
                                <li style={{'width':'33%'}}>
                                    <a href="#2" data-toggle="tab">TASK</a>
                                </li>
                                <li style={{'width':'33%'}}>
                                    <a href="#3" data-toggle="tab">PROFILE</a>
                                </li>
                            </ul>

                            <div className="tab-content ">
                                <div className="tab-pane active" id="1">
                                    {/*new*/}
                                    <div
                                        style={{'marginTop':'25px','border':'1px solid #e8dddd', 'borderRadius': '8px'}}>


                                        <div className="row">
                                            <div className="col-md-2">
                                                <img src="src/images/jobSearch.jpg" style={{'width':'150px'}}/>
                                            </div>
                                            <div className="col-md-10">
                                                <div className="row" style={{'paddingBottom':'6px'}}>
                                                    <div className="col-md-10">
                                                                     <span style={{'fontSize':'20px'}}>
                                                                          <strong>
                                                                              Lorem ipsum dolor sit amet, consectetur
                                                                              adipisicing elit.
                                                                              &nbsp;&nbsp;
                                                                          </strong>
                                                                      </span>
                                                    </div>

                                                    <div className="col-md-2">
                                                                               <span
                                                                                   className="label label-info"
                                                                                   style={{'fontSize':'12'}}>Full Time</span>
                                                        &nbsp;&nbsp;<span
                                                        className="label btnbrowse"
                                                        style={{'cursor':'pointer','fontSize':'12'}}>Apply</span>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-md-12">
                                                        asasdasdasd asd asd asdfn kjasdjkas d kdjfkj hdf sdkhfkjh
                                                        hsdfkhjh sdjkfkh sdkhfj sdfk df sdljkf sdfl df
                                                        alsddlj najklj asddfjk fdjkkj sdjkfjk jsdjfkjl jsjdfjjl sdf
                                                        sdfuo ujsdfujh usdfuo osdfou sdofo osdf end
                                                        asd asdlj nasdjkbndkhkh hkaskgdhk khasdhkghk assdghjk ashjkdgahj
                                                        dshgdhashdj asd
                                                    </div>
                                                </div>

                                                <div className="row" style={{'paddingTop':'14px'}}>
                                                    <div className="col-md-4">
                                                        <span
                                                            style={{'color':'grey'}}>Location : PUNE</span>&nbsp;&nbsp;

                                                    </div>
                                                    <div className="col-md-4">
                                                        <span style={{'color':'grey'}}>Skills  : ASP.NET, JQuery</span>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*End new*/}
                                    {/*new*/}
                                    <div
                                        style={{'marginTop':'25px','border':'1px solid #e8dddd', 'borderRadius': '8px'}}>


                                        <div className="row">
                                            <div className="col-md-2">
                                                <img src="src/images/jobSearch.jpg" style={{'width':'150px'}}/>
                                            </div>
                                            <div className="col-md-10">
                                                <div className="row" style={{'paddingBottom':'6px'}}>
                                                    <div className="col-md-10">
                                                                     <span style={{'fontSize':'20px'}}>
                                                                          <strong>
                                                                              Required Team Leader urgent base,
                                                                              consectetur
                                                                              adipisicing elit.
                                                                              &nbsp;&nbsp;
                                                                          </strong>
                                                                      </span>
                                                    </div>

                                                    <div className="col-md-2">
                                                                               <span
                                                                                   className="label label-info"
                                                                                   style={{'fontSize':'12'}}>Full Time</span>
                                                        &nbsp;&nbsp;<span
                                                        className="label btnbrowse"
                                                        style={{'cursor':'pointer','fontSize':'12'}}>Apply</span>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-md-12">
                                                        asasdasdasd asd asd asdfn kjasdjkas d kdjfkj hdf sdkhfkjh
                                                        hsdfkhjh sdjkfkh sdkhfj sdfk df sdljkf sdfl df
                                                        alsddlj najklj asddfjk fdjkkj sdjkfjk jsdjfkjl jsjdfjjl sdf
                                                        sdfuo ujsdfujh usdfuo osdfou sdofo osdf end
                                                        asd asdlj nasdjkbndkhkh hkaskgdhk khasdhkghk assdghjk ashjkdgahj
                                                        dshgdhashdj asd
                                                    </div>
                                                </div>

                                                <div className="row" style={{'paddingTop':'14px'}}>
                                                    <div className="col-md-4">
                                                        <span
                                                            style={{'color':'grey'}}>Location : PUNE</span>&nbsp;&nbsp;

                                                    </div>
                                                    <div className="col-md-4">
                                                        <span style={{'color':'grey'}}>Skills  : ASP.NET, JQuery</span>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*End new*/}


                                </div>

                                <div className="tab-pane" id="2">
                                    {/* TASK CONTENTS */}
                                    <div className="container-fluid well" style={{'height':'88px'}}>
                                        <div className="row-fluid">
                                            <div className="row-fluid">
                                                <div className="col-md-3">
                                                    <div className="form-group">
                                                        <label htmlFor="dlClients">Clients</label>
                                                        <select className="form-control" id="dlClients">
                                                            {this.state.clientInfo.length > 0 ? this.state.clientInfo.map((client) => {
                                                                return this.renderOptions(client)
                                                            }) : ""}
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="form-group">
                                                        <label htmlFor="dlProjects">Projects</label>
                                                        <select className="form-control" id="dlProjects">
                                                            {this.state.projectInfo.length > 0 ? this.state.projectInfo.map((project) => {
                                                                return this.renderOptions(project)
                                                            }) : ""}
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="form-group">
                                                        <label htmlFor="dlModules">Modules</label>
                                                        <select className="form-control" id="dlModules">
                                                            {!$.isEmptyObject(this.state.moduleInfo) ? this.state.moduleInfo.map((module) => {
                                                                return this.renderOptions(module)
                                                            }) : ""}
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="form-group">
                                                        <label htmlFor="dlEmployees">Employees</label>
                                                        <select className="form-control" id="dlEmployees">
                                                            {this.state.occupiedTeamLeadWork.length > 0 ? this.state.occupiedTeamLeadWork.map((emp) => {
                                                                return this.renderOptions(emp)
                                                            }) : ""}
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* TASK CONTENT ENDS */}

                                    {/*TASK TABLE*/}
                                    <div>
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <select className="form-control"
                                                            onChange={this.changeAllTaskStatus.bind(this)}
                                                            style={{'width':120}}>
                                                        {Object.keys(this.state.allTaskStatus).map((key) => {
                                                            return this.renderTaskStatus(key)
                                                        })}
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-4" style={{'textAlign':'center'}}>
                                                <span >
                                                    <h2>
                                                        <button className="label myButton"
                                                                onClick={ e => this.openAddTaskModal(e)}>Tasks <i
                                                            className="fa fa-plus-circle fa-5" aria-hidden="true"></i>
                                                        </button>
                                                    </h2>
                                                </span>
                                                <span>
                                                   
                                                </span>
                                            </div>
                                            <div className="col-md-4">
                                            </div>

                                        </div>

                                        {Object.keys(this.state.allTasks).map((key) => {
                                            return this.renderTasks(key)
                                        })}


                                    </div>

                                    {/*END TASK TABLE*/}
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
            {/*end tab example*/}

            <div className="modal fade" id="modalAddTask" role="dialog"
                 aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Add new task</h5>
                            <button type="button" className="close" data-dismiss="modal"
                                    aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>

                        <div className="modal-body">
                            <div className="form-group">
                                <label htmlFor="txtTaskName"
                                       className="form-control-label">Message:</label>
                                                                <textarea className="form-control"
                                                                          id="txtTaskName"></textarea>
                            </div>

                            <div className="form-group">
                                <label htmlFor="recipient-name"
                                       className="form-control-label">Deadline date:</label>
                                <input type="date" className="form-control"
                                       id="txtTaskDeadlineDate"/>
                            </div>

                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary"
                                    data-dismiss="modal">Close
                            </button>
                            <button id="btnAddTask" className="btn btn-primary" onClick={this.addNewTask.bind(this)}>
                                Add
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>)
    }
}
