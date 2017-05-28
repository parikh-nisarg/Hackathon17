import React from 'react';
import ReactDOM from 'react-dom';
import Database from './Database';
import HrNonPostedJobs from './HrNonPostedJobs';

export default class HrJobPosting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            jobsAllData: [],
            HrNonPostedJobs: [],
            counter: 0
        }
        this.myMethod();
    }

    myMethod() {

        let objDatabase = new Database('JobDetails');

        objDatabase.searchData("isApproved", true).then((result) => {

            let dataList = result.val();
            this.state.jobsAllData = dataList;
            this.setState({ jobsAllData: this.state.jobsAllData });

            var tempData = [];
            Object.keys(dataList).map((key) => {
                var objData = dataList[key]
               if (!objData.isPosted) {
                tempData.push(objData);
                }
            })
            this.state.HrNonPostedJobs = tempData;
            this.setState({ HrNonPostedJobs: this.state.HrNonPostedJobs });

        }, (error) => {
            alert(error);
        });
    }

    jobPosted(data) {
        console.log(data);
    }

    displayNonPostedJobs(data) {
        console.log('jignesh');
        return (
            <HrNonPostedJobs key={data.id} data={data} jobPosted={this.jobPosted.bind(this)} />
        )
    }



    render() {
        return (
            <div>
                {
                    this.state.HrNonPostedJobs.map((data) => { return this.displayNonPostedJobs(data) })
                }
            </div>

        )
    }

}