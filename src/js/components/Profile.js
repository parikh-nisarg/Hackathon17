import React from 'react';
import ReactDOM from 'react-dom';
import Database from './Database';


export default class Profile extends React.Component {
    constructor() {
        super();
        this.state={
            userInfo: {}
        }
    }

    componentDidMount(){
          let objDatabase = new Database("UserDetails");

          objDatabase.getData("4BpEBnypYhfMzVqQ9oWkgXy4Sox1").then((result) => {

            let dataList = result.val();
            this.state.userInfo = dataList;
            this.setState({ userInfo: this.state.userInfo });
        }, (error) => {
            alert(error);
        });
    }

    render() {
        var data = this.state.userInfo;
        return (
            <div>
                  
                    <div className="container" style={{'marginTop':'45px'}}>
                        <div className="row">
                            <div className="col-md-12" style={{'textAlign':'center'}}>
                                <img src="src/images/userprofile.png" style={{'width':'300px','height':'300px'}} className="img-circle"/>             
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12" style={{'textAlign':'center'}}>
                                <div><b>Name :</b> { data.name}</div>
                                <div><b>Address :</b> { data.address}</div>
                                <div><b>Email :</b> { data.name}</div>
                                <div><b>Contact :</b> { data.contact}</div>
                                <div><b>Skills :</b> { data.skills}</div>
                            </div>
                        </div>
                    </div>
             </div>
       

        )
    }

}