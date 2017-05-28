import React from 'react';
import ReactDOM from 'react-dom';
import Database from './Database';

let objDatabase = new Database('UserDetails');

export default class HrEmpManagement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allUsers: [],
            displayUsers: [],
            panCardFile: "",
            aadharCardFile: ""
        }
        this.myMethod();
    }

    myMethod() {


        objDatabase.getList().then((result) => {

            let dataList = result.val();
            this.state.allUsers = dataList;
            this.setState({ allUsers: this.state.allUsers });
            this.state.displayUsers = dataList;
            this.setState({ displayUsers: this.state.displayUsers });

        }, (error) => {
            alert(error);
        });
    }

    componentDidMount() {

    }


    saveUserData(key) {
        $('.collapse').collapse('hide');
        let empObj = this.state.allUsers[key];

        if (this.state.aadharCardFile != "" && this.state.panCardFile != "") {
            objDatabase.fileUpload(this.state.aadharCardFile).then((result) => {
                empObj.aadharCardUrl = result;
                objDatabase.fileUpload(this.state.panCardFile).then((result) => {
                    empObj.panCardUrl = result;
                    this.updateUserData(key, empObj);
                }, (error) => {
                    alert(error);
                });
            }, (error) => {
                alert(error);
            });
        }
        else if (this.state.aadharCardFile == "" && this.state.panCardFile != "") {
            objDatabase.fileUpload(this.state.panCardFile).then((result) => {
                empObj.panCardUrl = result;
                this.updateUserData(key, empObj);
            }, (error) => {
                alert(error);
            });
        }
        else if (this.state.aadharCardFile != "" && this.state.panCardFile == "") {
            objDatabase.fileUpload(this.state.aadharCardFile).then((result) => {
                empObj.aadharCardUrl = result;
                this.updateUserData(key, empObj);
            }, (error) => {
                alert(error);
            });
        }
        else if (this.state.aadharCardFile == "" && this.state.panCardFile == "") {
             this.updateUserData(key, empObj);
        }


    }

    updateUserData(key, empObj) {
        debugger;
        var workingDetails = { clientId:"", projectId:"", teamLeadId:"", moduleId:"", location: $(`#txtLocation${key}`).val() } 
        if(empObj.workingDetails)
        {
            empObj.workingDetails.push(workingDetails);
        }
        else{
             empObj.workingDetails = [];
             empObj.workingDetails.push(workingDetails);
        }
     
        objDatabase.dataOperation(key, empObj).then((result) => {
            alert("Data updated successfully....");
        }, (error) => {
            alert(error);
        })
    }

    showCurrent(key, e) {
        $('.collapse').collapse('hide');
        $(`#${key}`).collapse('toggle')
    }

    hideCollapse() {
        $('.collapse').collapse('hide');
    }

    aadharCardChange(event) {
        this.state.aadharCardFile = event.target.files[0];
        this.setState({ aadharCardFile: this.state.aadharCardFile });
    }

    panCardChange(event) {
        this.state.panCardFile = event.target.files[0];
        this.setState({ panCardFile: this.state.panCardFile });
    }

    searchUser() {
        var search = $("#txtSearch").val();

        objDatabase.searchData("email", search).then((result) => {
            let dataList = result.val();
            this.state.allUsers = dataList;
            this.setState({ allUsers: this.state.allUsers });
        }, (error) => {
            alert(error);
        });
    }

    displayUser(key) {
        var data = this.state.displayUsers[key];
        return (
            <div key={key}>
                <div className="col-md-6">

                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h4 className="panel-title">
                                <a data-toggle="collapse" data-parent="#accordion"
                                    href={`#${key}`}>{data.name}</a>
                                <span className="pull-right panel-collapse-clickable"
                                    data-toggle="collapse" data-parent="#accordion" onClick={this.showCurrent.bind(this, key)}    >
                                    <i className="glyphicon glyphicon-chevron-down"></i>
                                </span>
                            </h4>
                        </div>
                        <div id={key}
                            className="panel-collapse panel-collapse collapse">
                            <div className="panel-body">

                                <h1>Personal Information</h1>
                                <div className="form-group">
                                    <label htmlFor="recipient-name"
                                        className="form-control-label">Recipient:</label>
                                    <input type="text" className="form-control"
                                        id="recipient-name" />
                                </div>

                                <h1>Employee Information</h1>
                                <div className="form-group">
                                    <label htmlFor="filePanCard"
                                        className="form-control-label">PanCard:</label>
                                    <input type="file" className="form-control" onChange={this.panCardChange.bind(this)} ref={`filePanCard${key}`}
                                        id="filePanCard" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="fileAadharCard"
                                        className="form-control-label">AadharCard:</label>
                                    <input type="file" className="form-control" onChange={this.aadharCardChange.bind(this)} ref={`fileAadharCard${key}`}
                                        id="fileAadharCard" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="txtRole"
                                        className="form-control-label">Role:</label>
                                    <input type="text" className="form-control"
                                        id="txtRole" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor={`txtTeamLeader${key}`}
                                        className="form-control-label">Team Leader:</label>
                                    <input type="text" className="form-control"
                                        id={`txtTeamLeader${key}`} />
                                </div>

                                <div className="form-group">
                                    <label  htmlFor={`txtLocation${key}`}
                                        className="form-control-label">Location:</label>
                                    <input type="text" className="form-control"
                                        id={`txtLocation${key}`} />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="txtDateOfJoing"
                                        className="form-control-label">Date Of Joining:</label>
                                    <input type="text" className="form-control"
                                        id="txtDateOfJoing" />
                                </div>



                                <h1>compensation Information</h1>
                                <div className="form-group">
                                    <label htmlFor="txtBasic"
                                        className="form-control-label">Basic:</label>
                                    <input type="text" className="form-control"
                                        id="txtBasic" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="txtHra"
                                        className="form-control-label">HRA:</label>
                                    <input type="text" className="form-control"
                                        id="txtHra" />
                                </div>

                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" id={`close${key}`} onClick={this.hideCollapse.bind(this)}
                                        data-dismiss="modal">Close
                                                            </button>
                                    <button type="button" className="btn btn-primary" onClick={this.saveUserData.bind(this, key)} id={`save${key}`} >Save
                                                            </button>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        )
    }



    render() {
        return (
            <div>
                <input type="text" id="txtSearch" /> <button type="button" onClick={this.searchUser.bind(this)}> Search </button>
                <div>
                    {
                        Object.keys(this.state.displayUsers).map((key) => { return this.displayUser(key) })
                    }
                </div>



            </div>

        )
    }

}