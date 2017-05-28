import React from 'react';
import ReactDOM from 'react-dom';
import Database from './Database';

let objDatabase = new Database('UserDetails');
export default class HrJobManagement extends React.Component {
    constructor() {
        super();
        this.state = {
            candidateList: []
        }
    }

    componentDidMount() {
        objDatabase.searchData("roleId", 6).then((result) => {
            let dataList = result.val();
            this.state.candidateList = dataList;
            this.setState({ candidateList: this.state.candidateList });
        }, (error) => {
            alert(error);
        });
    }

    showPopup(key){
        var data = this.state.candidateList[key];
        window.open(data.resumeUrl, "detab", "toolbar=0");
    }

    approvedResume(key){
        let empObj = this.state.candidateList[key];
        empObj.isResumeApproved = true;
         objDatabase.dataOperation(key, empObj).then((result) => {
             $(`btnResume${key}`).text('Is Selected?')
            alert("Data updated successfully....");
        }, (error) => {
            alert(error);
        })
    }

    displayCandidate(key) {
        debugger;
        var data = this.state.candidateList[key];
        var text = data.isResumeApproved ? "Is Selected?" : "Is Eligible?"
        return (
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
                                    <button type="button" className="btn btn-primary btn-sm" id={`btnResume${key}`} onClick={this.approvedResume.bind(this,key)} style={{ 'float': 'right', 'marginLeft': '4px' }}>{text}</button>

                                    <button type="button" className="btn btn-info btn-sm" data-toggle="modal" style={{ 'float': 'right', 'marginLeft': '4px' }}
                                     data-whatever="@getbootstrap" onClick={this.showPopup.bind(this,key)}  >View</button>
                                </strong>
                            </span>
                        </div>

                    </div>

                    <div className="row">
                        <div className="col-md-2" style={{ 'marginTop': '5px' }}>
                        </div>
                        <div className="col-md-9">
                            {data.name}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div>
                {
                    Object.keys(this.state.candidateList).map((key) => { return this.displayCandidate(key) })
                }
            </div>

        )
    }

}