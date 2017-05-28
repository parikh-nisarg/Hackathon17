import React from 'react';
import ReactDOM from 'react-dom';
import Database from './Database.js';
import CandidateRegister from './CandidateRegister.js'


export default class CandidateDetails extends React.Component {
    constructor() {
        super();
        this.state = {
            jobList: [],
            currentUserId: 0
        };
    }

    componentDidMount() {

        let objDatabase = new Database('JobDetails');
        objDatabase.getList().then((result) => {
            let dataList = result.val();
            this.state.jobList = dataList;
            this.state.currentUserId = 5;

            this.setState({ jobList: this.state.jobList });

            this.setState({ currentUserId: this.state.currentUserId });

        }, (error) => {
            alert(error);
        });
    }

    applyJob(key) {
        debugger;
        let data = this.state.jobList[key];
        let id = this.props.match.params.id; //(this.props.match.params.id) ? this.props.match.params.id : "4BpEBnypYhfMzVqQ9oWkgXy4Sox1";
        // var obj = { date: new Date(), candidateId: id, status: 'applying' };
        if (data.appliedUserIds == "") {
            //    data.appliedUserIds=[];
            //    data.appliedUserIds.push[obj];
            data.appliedUserIds += id;
        }
        else {
            // data.appliedUserIds.push[obj];
            data.appliedUserIds += `,` + id;
        }
        let objDatabase = new Database('JobDetails');
        objDatabase.dataOperation(key, data).then((result) => {
            alert("Data inserted successfully....");
        }, (error) => {
            alert(error);
        })
    }
    displayJobOpeningData(key) {
        //  this.props.match.params.id="4BpEBnypYhfMzVqQ9oWkgXy4Sox1";
        let data = this.state.jobList[key];
        // let users = data.appliedUserIds != null && data.appliedUserIds != "" ? data.appliedUserIds.toString() : "0";
        //  if(data.status != null && (data.status == "closed" || data.status == "rejected" || users.indexOf(this.state.currentUserId) > -1 || data.isApproved == false) )
        if (data.appliedUserIds.indexOf(this.props.match.params.id) != -1)
            return;
        return (
            <div key={key} style={{ 'marginTop': '25px', 'border': '1px solid #e8dddd', 'borderRadius': '8px' }}>
                <div className="row" >
                    <div className="col-md-2" style={{ 'marginTop': '5px', 'marginLeft': '5px' }}>
                        <img src="src/images/JobOpenings-Blue.png" style={{ 'width': '150px' }} />
                    </div>

                    <div className="col-md-9" style={{ 'marginTop': '5px' }}>
                        <span style={{ 'fontSize': '20px' }}>
                            <strong>
                                {data.title}
                                <span className="label btnbrowse" onClick={this.applyJob.bind(this, key)} style={{ 'cursor': 'pointer', 'float': 'right', 'marginLeft': '4px' }}>Apply</span>
                                {/*<span className="label label-primary" style={{'float':'right'}}>{jobType}</span>*/}
                                <span className={key % 2 == 0 ? 'label label-primary' : 'label label-info'} style={{ 'float': 'right' }}>{key % 2 == 0 ? "Full-Time" : "Part-Time"}</span>

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
        )
    }

    displayJobAppliedData(key) {
        let data = this.state.jobList[key];
        // let users = data.appliedUserIds != null && data.appliedUserIds != "" ? data.appliedUserIds.toString() : "0";
        //  if(data.status != null && (data.status == "closed" || data.status == "rejected" || users.indexOf(this.state.currentUserId) == -1 || data.isApproved == false))
        if (data.appliedUserIds.indexOf(this.props.match.params.id) == -1)
            return;
        return (
            <div key={key} style={{ 'marginTop': '25px', 'border': '1px solid #e8dddd', 'borderRadius': '8px' }}>
                <div className="row" >
                    <div className="col-md-2" style={{ 'marginTop': '5px', 'marginLeft': '5px' }}>
                        <img src="src/images/applied.png" style={{ 'width': '150px' }} />
                    </div>

                    <div className="col-md-9" style={{ 'marginTop': '5px' }}>
                        <span style={{ 'fontSize': '20px' }}>
                            <strong>
                                {data.title}
                                &nbsp;&nbsp;<span className="label btnbrowse" style={{ 'cursor': 'pointer', 'float': 'right', 'marginLeft': '4px' }}>Status</span>
                                {/*&nbsp;&nbsp;<span className="label label-info" style={{'float':'right'}}>Full Time</span>*/}
                                &nbsp;&nbsp;<span className={key % 2 == 0 ? 'label label-primary' : 'label label-info'} style={{ 'float': 'right' }}>{key % 2 == 0 ? "Full-Time" : "Part-Time"}</span>
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
        )
    }

    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row-fluid">
                        <div className="col-md-12">
                            <div id="exTab2" className="container">
                                <ul className="nav nav-tabs">

                                    <li className="active" style={{ 'width': '33%' }}>
                                        <a href="#1" data-toggle="tab">JOBS</a>
                                    </li>
                                    <li style={{ 'width': '33%' }}>
                                        <a href="#2" data-toggle="tab">APPLIED</a>
                                    </li>
                                    <li style={{ 'width': '33%' }}>
                                        <a href="#3" data-toggle="tab">PROFILE</a>
                                    </li>
                                </ul>

                                <div className="tab-content ">
                                    <div className="tab-pane active" id="1">
                                        {

                                            Object.keys(this.state.jobList).map((key) => {
                                                return this.displayJobOpeningData(key);
                                            })
                                        }
                                    </div>

                                    <div className="tab-pane" id="2">
                                        {
                                            Object.keys(this.state.jobList).map((key) => {
                                                return this.displayJobAppliedData(key);
                                            })
                                        }
                                    </div>

                                    <div className="tab-pane" id="3">
                                        <CandidateRegister />
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

