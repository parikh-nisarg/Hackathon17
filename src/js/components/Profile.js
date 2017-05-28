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
               <img src="src/images/userprofile.png" />
               { data.name}
                { data.contact}
                 { data.address}
                  { data.email}
               
            </div>

        )
    }

}