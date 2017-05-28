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

        // objDatabase.searchData("Role", 2).then((result) => {

        //     let tlList = result.val();
        //     this.state.allUsers = dataList;
        //     this.setState({ allUsers: this.state.allUsers });
        //     this.state.displayUsers = dataList;
        //     this.setState({ displayUsers: this.state.displayUsers });

        // }, (error) => {
        //     alert(error);
        // });
    }

    componentDidMount() {

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
        let search = $("#txtSearch").val().trim();
        let searchedData = [];

        $.each(this.state.allUsers, (objData)=>{
            objData = this.state.allUsers[objData];
            if(objData.name.indexOf(search) > -1 || objData.email.indexOf(search) > -1)
                searchedData.push(objData);
        })
        
        this.state.displayUsers =  searchedData;
        this.setState({ displayUsers: this.state.displayUsers });
    }

    clearSearch(){
        $("#txtSearch")[0].value="";
        let searchedData = this.state.allUsers;
        this.state.displayUsers =  searchedData;
        this.setState({ displayUsers: this.state.displayUsers });
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

        if(!empObj.workingDetails)
        {
             empObj.workingDetails = {};
        }
        
        empObj.workingDetails.location =  $(`#txtLocation${key}`).val();
        empObj.workingDetails.TeamLeadId =  $(`#txtTeamLeader${key}`).val();

        empObj.roleId = $(`#txtRole${key}`).val();
        
        if(!(empObj.dateOfJoining))
            empObj.dateOfJoining = $(`#txtDateOfJoing${key}`).val();
        
         if(!empObj.salaryDetails)
        {
             empObj.salaryDetails = [];
        }

        empObj.salaryDetails.push({
            basic:$(`#txtBasic${key}`).val(),
            hra:$(`#txtHra${key}`).val(),
            con:$(`#txtConveyance${key}`).val(),
            total:$(`#txtSalary${key}`).val(),
            year: $(`#txtDateOfJoing${key}`).val() != ""  ? $(`#txtDateOfJoing${key}`).val() : (new Date).toDateString(),
        });

        empObj.grade = $(`#txtgrade${key}`).val();
        empObj.client = $(`#txtclient${key}`).val();
        empObj.module = $(`#txtmodule${key}`).val();
        empObj.app = $(`#txtapp${key}`).val();
     
        
        empObj.isBlackListed = $(`#chkBlock${key}`)[0].checked;

        objDatabase.dataOperation(key, empObj).then((result) => {
            alert("Data updated successfully....");
        }, (error) => {
            alert(error);
        })
    }

   renderRMList(key){
        let obj = this.state.allUsers[key];
        if(obj.roleId == 2)
        {
            return (<option data-clientId={obj.id} key={obj.id} value={obj.id}>{obj.name}</option>)
        }
   }

   onChangeSalary(basic, hra, con, sal)
   {
       let [basicVal, hraVal, conVal] = [document.getElementById(basic).value, document.getElementById(hra).value, document.getElementById(con).value];
       basicVal = basicVal == "" ? 0 : parseFloat(basicVal);
       hraVal = hraVal == "" ? 0 : parseFloat(hraVal);
       conVal = conVal == "" ? 0 :parseFloat(conVal);

       document.getElementById(sal).value =  basicVal + hraVal+ conVal;
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

                                {/*<h1>Personal Information</h1>
                                
                                    <div className="form-group">
                                        <label htmlFor="recipient-name"
                                            className="form-control-label">Full Name:</label>
                                        <input type="text" className="form-control"
                                            id={`recipient-name${data.id}`} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="recipient-name"
                                            className="form-control-label">Address:</label>
                                        <input type="text" className="form-control"
                                            id={`txtAddress${data.id}`} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="recipient-name"
                                            className="form-control-label">Email:</label>
                                        <input type="text" className="form-control"
                                            id="recipient-name" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="recipient-name"
                                            className="form-control-label">Contact No:</label>
                                        <input type="text" className="form-control"
                                            id="recipient-name" />                                             
                                    </div>*/}
                                

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
                                    {/*<input type="text" className="form-control"
                                        id={`txtRole${key}`} />*/}
                                    <select className="form-control" id={`txtRole${key}`}>
                                        <option data-clientId="3" value="3">Employee</option>
                                        <option data-clientId="1" value="1">HR</option>
                                        <option data-clientId="2" value="2">Team Lead</option>
                                        <option data-clientId="4" value="4">Manager</option>
                                    </select>
                                </div> 

                                <div className="form-group">
                                    <label htmlFor={`txtTeamLeader${key}`}
                                        className="form-control-label">Reporting Manager:</label>
                                    {/*<input type="" className="form-control" id={`txtTeamLeader${key}`} />*/}
                                    <select className="form-control" id={`txtTeamLeader${key}`}>
                                        {
                                            Object.keys(this.state.allUsers).map((key) => {return this.renderRMList(key);})
                                        }
                                    </select>
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
                                    <input type="Date" className="form-control"
                                        id={`txtDateOfJoing${key}`} />
                                </div>
                                    
                                <div className="form-group">
                                    <label htmlFor="txtclient"
                                        className="form-control-label">Client:</label>
                                    <input type="text" className="form-control"
                                        id={`txtclient${key}`} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="txtapp"
                                        className="form-control-label">App:</label>
                                    <input type="text" className="form-control"
                                        id={`txtapp${key}`} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="txtmodule"
                                        className="form-control-label">Module:</label>
                                    <input type="text" className="form-control"
                                        id={`txtmodule${key}`} />
                                </div>


                                <h1>compensation Information</h1>
                                <div className="form-group">
                                    <label htmlFor="txtgrade"
                                        className="form-control-label">Grade (%):</label>
                                    <input type="text" className="form-control"
                                        id={`txtgrade${key}`} />
                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="txtBasic"
                                        className="form-control-label">Basic:</label>
                                    <input type="number" className="form-control"
                                        id={`txtBasic${key}`} onChange={this.onChangeSalary.bind(this,`txtBasic${key}`,`txtHra${key}`,`txtConveyance${key}`,`txtSalary${key}`)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="txtHra"
                                        className="form-control-label">HRA:</label>
                                    <input type="number" className="form-control"
                                        id={`txtHra${key}`}  onChange={this.onChangeSalary.bind(this,`txtBasic${key}`,`txtHra${key}`,`txtConveyance${key}`,`txtSalary${key}`)}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="txtHra"
                                        className="form-control-label">Conveyance:</label>
                                    <input type="number" className="form-control"
                                        id={`txtConveyance${key}`}  onChange={this.onChangeSalary.bind(this,`txtBasic${key}`,`txtHra${key}`,`txtConveyance${key}`,`txtSalary${key}`)}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="txtSalary"
                                        className="form-control-label">TotalSalary:</label>
                                    <input type="number" className="form-control" readOnly="true"
                                        id={`txtSalary${key}`} />
                                </div>
                               
                                <div className="checkbox">
                                    Blacklist ?
                                    <label>
                                        <input className="chk-task" type="checkbox"id={`chkBlock${key}`}/>
                                                                    <span className="cr">
                                                                        <i className="cr-icon glyphicon glyphicon-ok"></i></span>
                                    </label>
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
                <div  >
                    {
                        Object.keys(this.state.displayUsers).map((key) => { return this.displayUser(key) })
                    }
                </div>



            </div>

        )
    }

}
