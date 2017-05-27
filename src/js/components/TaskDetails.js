/**
 * Created by Nisarg on 5/27/2017.
 */

import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class TaskDetails extends Component {
    render() {
        return ( <div>

            <Link to="/">Home</Link><br/><Link to="/reg">Reg</Link>

            <div className="container-fluid">
                <div className="row-fluid">
                    <div className="col-md-12">
                        <div id="exTab2" className="container">
                            <ul className="nav nav-tabs">
                                <li className="active" style={{'width':'33%'}}>
                                    <a href="#1" data-toggle="tab">PROFILE</a>
                                </li>
                                <li style={{'width':'33%'}}>
                                    <a href="#2" data-toggle="tab">TASK</a>
                                </li>
                                <li style={{'width':'33%'}}>
                                    <a href="#3" data-toggle="tab">PROFILE</a>
                                </li>
                            </ul>

                            <div className="tab-content ">
                                <div className="tab-pane active" id="1">
                                    <div
                                        style={{'marginTop':'25px','border':'1px solid #e8dddd', 'border-radius': '8px'}}>
                                        <div className="row">
                                            <div className="col-md-2" style={{'marginTop':'5px','margin-left':'5px'}}>
                                                <img src="src/images/JobOpenings-Blue.png" style={{'width':'150px'}}/>
                                            </div>
                                            <div className="col-md-9" style={{'marginTop':'5px'}}>
                                                                      <span style={{'fontSize':'20px'}}>
                                                                          <strong>
                                                                              Lorem ipsum dolor sit amet, consectetur
                                                                              adipisicing elit.
                                                                              &nbsp;&nbsp;<span
                                                                              className="label label-info">Full Time</span>
                                                                              &nbsp;&nbsp;<span
                                                                              className="label btnbrowse"
                                                                              style={{'cursor':'pointer'}}>Apply</span>
                                                                          </strong>
                                                                      </span>
                                            </div>

                                        </div>

                                        <div className="row">
                                            <div className="col-md-2" style={{'marginTop':'5px'}}>
                                            </div>
                                            <div className="col-md-9">
                                                asf asfb habfdhj hjdfhj adhjfhj fjhbsdhjfjbsdfjbsdjfbsdhjfbjhsdfhjhj
                                                jhbjhdf . ab hjafj sdf akjhdfbhsd bfhsdf sdhf sdfhhjksd fhkbsdd
                                                fhkjsdfhbsddfh hsdf hsdfh sdf asdfasd asd asd asdsd
                                            </div>
                                        </div>
                                    </div>

                                    {/*row 2*/}
                                    <div
                                        style={{'marginTop':'25px','border':'1px solid #e8dddd', 'border-radius': '8px'}}>
                                        <div className="row">
                                            <div className="col-md-2" style={{'marginTop':'5px','margin-left':'5px'}}>
                                                <img src="src/images/JobOpenings-Blue.png" style={{'width':'150px'}}/>
                                            </div>

                                            <div className="col-md-9" style={{'marginTop':'5px'}}>
                                                                      <span style={{'fontSize':'20px'}}>
                                                                          <strong>
                                                                              Lorem ipsum dolor sit amet, consectetur
                                                                              adipisicing elit.
                                                                              &nbsp;&nbsp;<span
                                                                              className="label label-primary">Part-Time</span>
                                                                              &nbsp;&nbsp;<span
                                                                              className="label btnbrowse"
                                                                              style={{'cursor':'pointer'}}>Apply</span>
                                                                          </strong>
                                                                      </span>
                                            </div>

                                        </div>

                                        <div className="row">
                                            <div className="col-md-2" style={{'marginTop':'5px'}}>
                                            </div>
                                            <div className="col-md-9">
                                                asf asfb habfdhj hjdfhj adhjfhj fjhbsdhjfjbsdfjbsdjfbsdhjfbjhsdfhjhj
                                                jhbjhdf . ab hjafj sdf akjhdfbhsd bfhsdf sdhf sdfhhjksd fhkbsdd
                                                fhkjsdfhbsddfh hsdf hsdfh sdf asdfasd asd asd asdsd
                                            </div>
                                        </div>
                                    </div>


                                    {/*row 3*/}
                                    <div
                                        style={{'marginTop':'25px','border':'1px solid #e8dddd', 'border-radius': '8px'}}>
                                        <div className="row">
                                            <div className="col-md-2" style={{'marginTop':'5px','margin-left':'5px'}}>
                                                <img src="src/images/JobOpenings-Blue.png" style={{'width':'150px'}}/>
                                            </div>

                                            <div className="col-md-9" style={{'marginTop':'5px'}}>
                                                                      <span style={{'fontSize':'20px'}}>
                                                                          <strong>
                                                                              Lorem ipsum dolor sit amet, consectetur
                                                                              adipisicing elit.
                                                                              &nbsp;&nbsp;<span
                                                                              className="label label-info">Full Time</span>
                                                                              &nbsp;&nbsp;<span
                                                                              className="label btnbrowse"
                                                                              style={{'cursor':'pointer'}}>Apply</span>
                                                                          </strong>
                                                                      </span>
                                            </div>

                                        </div>

                                        <div className="row">
                                            <div className="col-md-2" style={{'marginTop':'5px'}}>
                                            </div>
                                            <div className="col-md-9">
                                                asf asfb habfdhj hjdfhj adhjfhj fjhbsdhjfjbsdfjbsdjfbsdhjfbjhsdfhjhj
                                                jhbjhdf . ab hjafj sdf akjhdfbhsd bfhsdf sdhf sdfhhjksd fhkbsdd
                                                fhkjsdfhbsddfh hsdf hsdfh sdf asdfasd asd asd asdsd
                                            </div>
                                        </div>
                                    </div>


                                </div>

                                <div className="tab-pane" id="2">
                                    {/* TASK CONTENTS */}
                                    <div className="container-fluid">
                                        <div className="row-fluid">
                                            <div className="row-fluid">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label htmlFor="exampleSelect1">Example select</label>
                                                        <select className="form-control" id="exampleSelect1">
                                                            <option>1</option>
                                                            <option>2</option>
                                                            <option>3</option>
                                                            <option>4</option>
                                                            <option>5</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label htmlFor="exampleSelect1">Example select</label>
                                                        <select className="form-control" id="exampleSelect1">
                                                            <option>1</option>
                                                            <option>2</option>
                                                            <option>3</option>
                                                            <option>4</option>
                                                            <option>5</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* TASK CONTENT ENDS */}
                                </div>


                                <div className="tab-pane" id="3">
                                    <h3>Display Registration form details in read only mode. and on Eidit click Save
                                        changes btn and let them edit</h3>
                                </div>
                            </div>


                        </div>


                    </div>
                </div>
            </div>
            {/*end tab example*/}


        </div>)
    }
}
