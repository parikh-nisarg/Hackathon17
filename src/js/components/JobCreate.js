

import React from 'react';
import ReactDOM from 'react-dom';
import Database from './Database';

export default class JobCreate extends React.Component {
    constructor() {
        super();
    }

    componentDidMount(){
        
    }
    
    insertData() {

        debugger;
        let objDatabase = new Database("JobDetails");
        let key = (new Date()).getTime();
        let title = this.refs.txtTitle.value;
        let description = this.refs.txtDescription.value;
        let position = this.refs.txtPosition.value;
        let skill = this.refs.txtSkill.value;
        let requiredPost = this.refs.txtRequiredPost.value;
        let location = this.refs.txtLocation.value;

        let objData = { title: title, description: description, role: position, skills:skill, 
                        totalRequirements: requiredPost, location: location, status:'open',
                        postedDate: (new Date()), isPosted:false, isApproved:false, appliedUserIds:''  };


        objDatabase.dataOperation(key, objData).then((result) => {
            alert("Data inserted successfully....");
        }, (error) => {
            alert(error);
        })
    }

    render() {
        return (
            <div>
                <div className="container-fluid">

                    <div className="row">
                        <div className="col-md-4" style={{ 'marginTop': '-24px' }}>
                            <form className="go-bottom">
                                <div>
                                    <input id="title" name="title" type="text" required ref="txtTitle" />
                                    <label htmlFor="title">Job Title</label>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4" style={{ 'marginTop': '-24px' }}>
                            <form className="go-bottom">
                                <div>
                                    <input id="jobProfile" name="Job Profile" type="text" required ref="txtDescription" />
                                    <label htmlFor="jobProfile">Job Profile</label>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4" style={{ 'marginTop': '-24px' }}>
                            <form className="go-bottom">
                                <div>
                                    <input id="position" name="position" type="text" required ref="txtPosition" />
                                    <label htmlFor="position">Position</label>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4" style={{ 'marginTop': '-24px' }}>
                            <form className="go-bottom">
                                <div>
                                    <input id="skill" name="skill" type="text" required ref="txtSkill" />
                                    <label htmlFor="skill">Skills</label>
                                </div>
                            </form>
                        </div>
                    </div>                    
                    <div className="row">
                        <div className="col-md-4" style={{ 'marginTop': '-24px' }}>
                            <form className="go-bottom">
                                <div>
                                    <input id="requiredPost" name="requiredPost" type="number" required ref="txtRequiredPost" />
                                    <label htmlFor="requiredPost">No. Of Required Posts</label>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4" style={{ 'marginTop': '-24px' }}>
                            <form className="go-bottom">
                                <div>
                                    <input id="location" name="location" type="text" required ref="txtLocation" />
                                    <label htmlFor="location">Location</label>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="row-fluid" style={{ 'marginTop': '14px' }}>
                        <div className="col-md-4">
                            <button type="button" className="btn btnbrowse" onClick={this.insertData.bind(this)} >Post Job</button>&nbsp;&nbsp;
                            <button type="button" className="btn btnbrowse">Cancel</button>
                        </div>
                    </div>


                </div>
            </div>
        )
    }

}
