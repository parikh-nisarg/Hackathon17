

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
        var _this = this;
        let promise = new Promise((resolve, reject) => {
            if (objData) {

                firebase.auth().createUserWithEmailAndPassword(objData.email, objData.password).then((result) => {
                    resolve(_this.userExtraData(objData, result.uid));
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
        debugger;
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

    userExtraData(objData, key) {
        var _this = this;
        let promise = new Promise((resolve, reject) => {
            debugger;


            let storage = firebase.storage();
            let storageRef = storage.ref();
            let file = objData.resume;
            var type = file.type.indexOf('image') > 0 ? 'image/jpeg' : 'application/pdf';
            let metadata = {
                contentType: type,
            };
            let uploadTask = storageRef.child('images/' + file.name).put(file, metadata);

            uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
                function (snapshot) {
                    let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                },
                function (error) {

                },
                function () {
                    console.log('Upload completed successfully, now we can get the download URL');
                    let downloadURL = uploadTask.snapshot.downloadURL;
                    var tempObj = {};
                    tempObj.id = key;
                    tempObj.name = objData.name;
                    tempObj.resumeUrl = downloadURL;
                    tempObj.address = objData.address;
                    tempObj.contact = objData.contact;
                    tempObj.skill = objData.skill;

                    let dbRef = firebase.database().ref(`${_this.table}/`);
                    let newRef = dbRef.child(key).set(tempObj);
                    if (newRef) {
                        resolve(newRef);
                    }
                    else {
                        reject("Error During data deleting...");
                    }



                });

        });
        return promise;

    }

     searchData(searchText,value) {

        let promise = new Promise((resolve, reject) => {
            let dbRef = firebase.database().ref(`${this.table}/`);
            dbRef.orderByChild(searchText).equalTo(value).on('value', (snap) => {
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

}