import React from 'react';
import ReactDOM from 'react-dom';
import Database from './Database';
import JobRequisition from './JobRequisition';

export default class ManagerDetails extends React.Component{
    constructor(){
        super();
        this.state={
            jobs:[]
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
    }

    showJob(id){
        debugger;
        alert(id);
    }

    renderJobs(data){
        return(
            <JobRequisition key={data.id} showJob={this.showJob}  data = {data}   />
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
                                                           this.state.jobs.map((data)=> {return this.renderJobs(data)})
                                                       }


                                                        </div>
                                                        
                                                        <div className="tab-pane" id="2">
                                                            {/*row 1*/}
                                                            <div style={{'marginTop':'25px','border':'1px solid #e8dddd', 'borderRadius': '8px'}}>
                                                                <div className="row" >
                                                                    <div className="col-md-2" style={{'marginTop':'5px','marginLeft':'5px'}}>
                                                                            <img src="src/images/applied.png" style={{'width':'150px'}}/>
                                                                    </div>

                                                                    <div className="col-md-9" style={{'marginTop':'5px'}}>
                                                                      <span style={{'fontSize':'20px'}}>
                                                                          <strong>
                                                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                                            &nbsp;&nbsp;<span className="label label-info">Full Time</span>
                                                                            &nbsp;&nbsp;<span className="label btnbrowse" style={{'cursor':'pointer'}}>Status</span>
                                                                        </strong>
                                                                      </span>                                                                      
                                                                    </div>
                                                                  
                                                                </div>    

                                                                <div className="row">
                                                                     <div className="col-md-2" style={{'marginTop':'5px'}}>
                                                                     </div>    
                                                                     <div className="col-md-9">
                                                                         asf asfb habfdhj hjdfhj adhjfhj fjhbsdhjfjbsdfjbsdjfbsdhjfbjhsdfhjhj jhbjhdf .  ab hjafj sdf akjhdfbhsd bfhsdf sdhf sdfhhjksd fhkbsdd fhkjsdfhbsddfh hsdf hsdfh sdf asdfasd asd asd asdsd 
                                                                     </div>   
                                                                </div>    
                                                            </div> 
                                                            {/*row 2*/}
                                                            <div style={{'marginTop':'25px','border':'1px solid #e8dddd', 'borderRadius': '8px'}}>
                                                                <div className="row" >
                                                                    <div className="col-md-2" style={{'marginTop':'5px','marginLeft':'5px'}}>
                                                                            <img src="src/images/applied.png" style={{'width':'150px'}}/>
                                                                    </div>

                                                                    <div className="col-md-9" style={{'marginTop':'5px'}}>
                                                                      <span style={{'fontSize':'20px'}}>
                                                                          <strong>
                                                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                                            &nbsp;&nbsp;<span className="label label-info">Full Time</span>
                                                                            &nbsp;&nbsp;<span className="label btnbrowse" style={{'cursor':'pointer'}}>Status</span>
                                                                        </strong>
                                                                      </span>                                                                      
                                                                    </div>
                                                                  
                                                                </div>    

                                                                <div className="row">
                                                                     <div className="col-md-2" style={{'marginTop':'5px'}}>
                                                                     </div>    
                                                                     <div className="col-md-9">
                                                                         asf asfb habfdhj hjdfhj adhjfhj fjhbsdhjfjbsdfjbsdjfbsdhjfbjhsdfhjhj jhbjhdf .  ab hjafj sdf akjhdfbhsd bfhsdf sdhf sdfhhjksd fhkbsdd fhkjsdfhbsddfh hsdf hsdfh sdf asdfasd asd asd asdsd 
                                                                     </div>   
                                                                </div>    
                                                            </div> 
                                                            {/*row 3*/}
                                                            <div style={{'marginTop':'25px','border':'1px solid #e8dddd', 'borderRadius': '8px'}}>
                                                                <div className="row" >
                                                                    <div className="col-md-2" style={{'marginTop':'5px','marginLeft':'5px'}}>
                                                                            <img src="src/images/applied.png" style={{'width':'150px'}}/>
                                                                    </div>

                                                                    <div className="col-md-9" style={{'marginTop':'5px'}}>
                                                                      <span style={{'fontSize':'20px'}}>
                                                                          <strong>
                                                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                                            &nbsp;&nbsp;<span className="label label-info">Full Time</span>
                                                                            &nbsp;&nbsp;<span className="label btnbrowse" style={{'cursor':'pointer'}}>Status</span>
                                                                        </strong>
                                                                      </span>                                                                      
                                                                    </div>
                                                                  
                                                                </div>    

                                                                <div className="row">
                                                                     <div className="col-md-2" style={{'marginTop':'5px'}}>
                                                                     </div>    
                                                                     <div className="col-md-9">
                                                                         asf asfb habfdhj hjdfhj adhjfhj fjhbsdhjfjbsdfjbsdjfbsdhjfbjhsdfhjhj jhbjhdf .  ab hjafj sdf akjhdfbhsd bfhsdf sdhf sdfhhjksd fhkbsdd fhkjsdfhbsddfh hsdf hsdfh sdf asdfasd asd asd asdsd 
                                                                     </div>   
                                                                </div>    
                                                            </div>  
                                                                  

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

