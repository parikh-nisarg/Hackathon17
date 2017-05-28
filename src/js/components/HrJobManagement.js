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
               
                 
                    <div className="row" >
                        <div className="col-md-2">

                        </div>
                        <div className="col-md-7">
                             <div style={{ 'marginTop': '10px', 'border': '1px solid #e8dddd', 'borderRadius': '8px','marginBottom':'-17' }}>
                                <div className="row">
                                    <div className="col-md-2" style={{ 'marginTop': '5px', 'marginLeft': '5px' }}>
                                        <img src="src/images/userprofile.png" style={{ 'width': '80px','height': '60px' }} />
                                    </div>
                                    <div className="col-md-4" style={{'fontSize':'13px'}}>
                                           <div><b>Name</b>  {data.name}</div>
                                           <div><b>Skills</b> {data.skill}</div>
                                           <div><b>Experience</b> {data.expYear}</div>
                                           <div><span><b>Email</b> {data.email}</span>&nbsp;<span><b>Contact No</b> {data.contact}</span></div>
                                    </div>   
                                    <div className="col-md-6" style={{'margin':'19px','width':'220px','float':'right'}}>
                                         <button type="button" className="btn btn-primary btn-sm" id={`btnResume${key}`} onClick={this.approvedResume.bind(this,key)}>{text}</button>
                                        &nbsp;&nbsp; <button type="button" className="btn btn-info btn-sm" data-toggle="modal"  data-whatever="@getbootstrap" onClick={this.showPopup.bind(this,key)}  >View</button>
                                    </div>
                                </div>
                                </div>
                               
                             </div>       
                        </div>
                        <div className="col-md-3">
                           
                        </div><br/>

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