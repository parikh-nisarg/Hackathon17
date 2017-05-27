import React from 'react';
import ReactDOM from 'react-dom';
import Database from './Database';
import JobRequisition from './JobRequisition';
import TaskManagement from './TaskManagement';

export default class ManagerDetails extends React.Component{
    constructor(){
        super();
        this.state={
            jobs:[],
            teamLeadList:[]
        }
    }

    
    componentDidMount(){
        let objDatabase = new Database('JobDetails');
          objDatabase.getList().then((result) => {
            let dataList = result.val();
            this.state.jobs = dataList;
            this.setState({jobs:this.state.jobs});
        }, (error) => {
            alert(error);
        });

        let objDatabase1 = new Database('UserDetails');
          objDatabase1.searchData("roleId",2).then((result) => {
              debugger;
            let dataList = result.val();
            this.state.teamLeadList = dataList;
            this.setState({teamLeadList:this.state.teamLeadList});
        }, (error) => {
            alert(error);
        });
    }

    showJob(id){
        alert(id);
    }

    renderJobs(key){
        let data = this.state.jobs[key];
        return(
            <JobRequisition key={key} showJob={this.showJob}  data = {data}   />
        )
    }

     renderManamgement(key){
        let data = this.state.jobs[key];
        return(
            <TaskManagement key={key} showJob={this.showJob}  data = {data}   />
        )
    }

    render(){
        return(
            <div>
                

            {/*tab example*/}

                     
                             <div className="container-fluid">
                                <div className="row-fluid">
                                    <div className="col-md-12">
                                        

                                        <div id="exTab2" className="container">	
                                                <ul className="nav nav-tabs">

                                                    
                                                    <li className="active" style={{'width':'33%'}}>
                                                        <a  href="#1" data-toggle="tab">JOBS REQUISITION</a>
                                                    </li>
                                                    <li style={{'width':'33%'}}>
                                                        <a href="#2" data-toggle="tab">PROJECT MANAGEMENT</a>
                                                    </li>
                                                    <li style={{'width':'33%'}}>
                                                        <a href="#3" data-toggle="tab">PROFILE</a>
                                                    </li>


                                                </ul>

                                                    <div className="tab-content ">
                                                        <div className="tab-pane active" id="1">
                                                           
                                                       {
                                                          Object.keys(this.state.jobs).map((key)=> {return this.renderJobs(key)})
                                                       }


                                                        </div>
                                                        
                                                        <div className="tab-pane" id="2">
                                                           
                                                            
                                                            <h1>Task Management</h1> 
                                                            {
                                                                 Object.keys(this.state.teamLeadList).map((key)=> {return this.renderManamgement(key)})
                                                            }
                                                                  

                                                        </div>



                                                        <div className="tab-pane" id="3">
                                                            <h3>Display Registration form details in read only mode. and on Eidit click Save changes btn and let them edit</h3>
                                                        </div>
                                                    </div>
                                                    
                                                    
                                                </div>




                                    </div>
                                </div>
                            </div>
                       {/*end tab example*/}

               
                 


                 

            </div>
        )
    }
}

