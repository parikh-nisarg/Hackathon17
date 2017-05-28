

import React from 'react';
import ReactDOM from 'react-dom';


export default class ManagerUserManagement extends React.Component {
    constructor() {
        super();
    }

    render() {
        console.log(this.props.data);
        return (
           <div>
                <div style={{ 'marginTop': '25px', 'border': '1px solid #e8dddd', 'borderRadius': '8px' }}>
                    <div className="row" >
                        <div className="col-md-2" style={{ 'marginTop': '5px', 'marginLeft': '5px' }}>
                            <img src="src/images/userprofile.png" style={{ 'width': '150px' }} />
                        </div>

                        <div className="col-md-9" style={{ 'marginTop': '5px' }}>
                            <span style={{ 'fontSize': '20px' }}>
                                <strong>
                                    {/*name :     {this.props.data.name}
                                    Experience:      {this.props.data.expYear}
                                    Contact No : {this.props.data.contact}
                                    email:{this.props.data.email}
                                    skills :{this.props.data.skill}
                                    &nbsp;&nbsp;
                                    &nbsp;&nbsp;*/}
                                    <button type="button" className="btn btn-primary btn-sm" style={{ 'float': 'right', 'marginLeft': '4px' }}>Submit</button>

                                    <button type="button" className="btn btn-info btn-sm" data-toggle="modal" style={{ 'float': 'right', 'marginLeft': '4px' }}
                                        data-whatever="@getbootstrap"   >View</button>
                                </strong>
                            </span>
                        </div>

                    </div>

                    <div className="row">
                        <div className="col-md-2" style={{ 'marginTop': '5px' }}>
                        </div>
                        <div className="col-md-9">
                            {/*{this.props.data.name}*/}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

// export const Second = () => { return (<div>Second</div>) };