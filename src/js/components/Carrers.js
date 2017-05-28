import React from 'react';
import ReactDOM from 'react-dom';

import Database from './Database';


export default class Carrers extends React.Component{
    constructor(){
        super();
        this.state={
            jobList:[],
            currentUserId:0
        };   
    }
 
 componentDidMount(){
        let objDatabase = new Database('JobDetails');
        objDatabase.getList().then((result) => {
            let dataList = result.val();
            this.state.jobList = dataList;
            //this.state.currentUserId = 5;
            
            this.setState({jobList:this.state.jobList});

            //this.setState({currentUserId:this.state.currentUserId});

        }, (error) => {
            alert(error);
        });     
    }

    displayJobOpeningData(key){
        let data = this.state.jobList[key];
        let users = data.appliedUserIds != null && data.appliedUserIds != "" ? data.appliedUserIds.toString() : "0";        
        if(data.status != null && (data.status == "closed" || data.status == "rejected" || data.isApproved == false)) // || users.indexOf(this.state.currentUserId) > -1 || data.isApproved == false) )
            return;
        return(
            <div id={key} key={key} style={{'margin':'35px','border':'1px solid #e8dddd', 'borderRadius': '8px'}}>
                <div className="row">
                    <div className="col-md-2">
                        <img src="src/images/jobSearch.jpg" style={{'width':'150px'}}/>
                    </div> 
                        <div className="col-md-10">
                            <div className="row" style={{'paddingBottom':'6px'}}>
                                <div className="col-md-10">
                                        <span style={{'fontSize':'20px'}}>
                                            <strong>
                                                {data.title}
                                            </strong>
                                        </span>
                                </div>    
                                <div className="col-md-2">
                                    {/*<span className="label label-info" style={{'fontSize':12}}>Full Time</span>
                                    <span className="label btnbrowse" style={{'cursor':'pointer','fontSize':12}}>Apply</span>*/}

                                <span className="label btnbrowse" style={{'cursor':'pointer','float':'right', 'margin':'4px','fontSize':12}}>Apply</span>
                                <span className={key % 2  == 1 ? 'label label-primary' : 'label label-info'} style={{'float':'right', 'margin':'4px','fontSize':12}}>{key % 2 == 1 ?"Full-Time": "Part-Time"}</span>
                                </div>    
                            </div>
                            
                            <div className="row">
                                <div className="col-md-12">
                                    {data.description}
                                </div>
                            </div>
                            
                            <div className="row" style={{'paddingTop':'14px'}}>
                                <div className="col-md-4">
                                    <span style={{'color':'grey'}}>Location : {data.location}</span>&nbsp;&nbsp;
                                </div>
                                <div className="col-md-4">
                                    <span style={{'color':'grey'}}>Skills  : {data.skills}</span>
                                </div>
                            </div>
                    </div>
                    </div>
                </div>

        )
    }

    render(){
        return(
            <div>
                {
                    Object.keys(this.state.jobList).map((key)=>{ return this.displayJobOpeningData(key);})
                }
            </div>
        )
    }
}

