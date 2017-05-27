import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAKSYrfU5b8r6pNDl4yeqpN9ZXDK2y4fSo",
    authDomain: "es6app.firebaseapp.com",
    databaseURL: "https://es6app.firebaseio.com",
    projectId: "es6app",
    storageBucket: "es6app.appspot.com",
    messagingSenderId: "553725335961"
};

firebase.initializeApp(config);

export default class Database extends React.Component {
    constructor(table = "") {
        super();
        this.table = table;
    }

    userRegistration(objData) {

        let promise = new Promise((resolve, reject) => {
            if (objData) {

                firebase.auth().createUserWithEmailAndPassword(objData.email, objData.password).then((result) => {
                    resolve(result);
                }).catch((error) => {
                    reject(error.message);
                });
            }
            else {
                reject("No data....");
            }
        });
        return promise;

    }


    userLogin(objData) {

        let promise = new Promise((resolve, reject) => {
            if (objData) {

                firebase.auth().signInWithEmailAndPassword(objData.email, objData.password).then((result) => {
                    resolve(result);
                }).catch((error) => {
                    reject(error.message);
                });
            }
            else {
                reject("No data....");
            }
        });
        return promise;
    }

    getList() {

        let promise = new Promise((resolve, reject) => {
            let dbRef = firebase.database().ref(`${this.table}/`);
            dbRef.on('value', (snap) => {
                if (snap) {
                    resolve(snap);
                }
                else {
                    reject("Error During data fetching...");
                }
            })
        });
        return promise;
    }

    getData(key) {
        let promise = new Promise((resolve, reject) => {
            let dbRef = firebase.database().ref(`${this.table}/${key}`);
            dbRef.on('value', (snap) => {
                if (snap) {
                    resolve(snap);
                }
                else {
                    reject("Error During data fetching...");
                }
            })
        });
        return promise;
    }

    dataOperation(key, objData) {  // insert, update, delete
        let promise = new Promise((resolve, reject) => {
            debugger;
            let dbRef = firebase.database().ref(`${this.table}/`);
            let newRef = dbRef.child(key).set(objData);
            if (newRef) {
                resolve(newRef);
            }
            else {
                reject("Error During data deleting...");
            }

        });
        return promise;
    }

    // getTeamLeadWorkingDetails(teamLeadId) {
    //     let _teamLeadId = teamLeadId;
    //
    //     this.table = "UserDetails";
    //     this.getList().then((data) => {
    //         let allUsers = data.val();
    //         allUsers = Object.keys(allUsers).map((key) => {
    //             return allUsers[key]
    //         });
    //         let occupiedTeamLead = allUsers.filter((obj) => {
    //             if (obj.workingDetails) {
    //                 return obj.workingDetails.teamLeadId == _teamLeadId
    //             }
    //         });
    //         return occupiedTeamLead;
    //     });
    // }

    // fetchTeamLeadInfo(teamLeadId) {
    //     let _this = this;
    //
    //     function* myData() {    //Generator Fn
    //         this.setState("ClientDetails");
    //         const clientInfo = yield _this.getList();
    //         this.setState("JobDetails");
    //         const jobInfo = yield _this.getList();
    //         return [{clientInfo: clientInfo}, {jobInfo: jobInfo}];
    //     }
    //
    //     let _data = myData();
    //     let _clientInfo = _data.next();
    //     let _jobInfo = _data.next();
    //
    //     if (_clientInfo && _jobInfo) {
    //         debugger;
    //     }
    // }

    // async fetchTeamLeadInfo(teamLeadId) {
    //     let obj = [];
    //     this.table = "ClientDetails";
    //     await this.getList().then((data) => { obj.push({clientInfo: data.val()}) });
    //
    //     return obj;
    // }

}