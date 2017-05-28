import React from 'react';
import ReactDOM from 'react-dom';
import Database from './Database';

export default class CandidateRegister extends React.Component {
    constructor() {
        super();
    }


    componentDidMount() {
        $(document).on('click', '.browse', function () {
            var file = $(this).parent().parent().parent().find('.file');
            file.trigger('click');
        });
        $(document).on('change', '.file', function () {
            $(this).parent().find('.form-control').val($(this).val().replace(/C:\\fakepath\\/i, ''));
        });
    }


    insertData() {

        debugger;
        let objDatabase = new Database("UserDetails");
        let key = (new Date()).getTime();
        let name = this.refs.txtName.value;
        let address = this.refs.txtAddress.value;
        let email = this.refs.txtEmail.value;
        let contact = this.refs.txtContact.value;
        let skills = this.refs.txtSkill.value;

        let resume = this.refs.fileResume.files[0];
        let password = this.refs.txtPassword.value;
        let confirmPassword = this.refs.txtConfirmPassword.value;

        //   let objData = { email: email, password: psw, name: name, resume: resume };

        let objData = { name: name, address: address, email: email, contact: contact, skills, resume: resume, password: password, roleId:6 };


        objDatabase.userRegistration(objData).then((result) => {
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
                                    <input id="name" name="name" type="text" required ref="txtName" />
                                    <label htmlFor="name">Name</label>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4" style={{ 'marginTop': '-24px' }}>
                            <form className="go-bottom">
                                <div>
                                    <input id="address" name="address" type="text" required ref="txtAddress" />
                                    <label htmlFor="address">Address</label>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4" style={{ 'margintop': '-24px' }}>
                            <form className="go-bottom">
                                <div>
                                    <input id="email" name="email" type="email" required ref="txtEmail" />
                                    <label htmlFor="email">Email</label>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4" style={{ 'marginTop': '-24px' }}>
                            <form className="go-bottom">
                                <div>
                                    <input id="contactnumber" name="contactnumber" type="number" required ref="txtContact" />
                                    <label htmlFor="contactnumber">Contact Number</label>
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
                                    <input id="password" name="password" type="password" required ref="txtPassword" />
                                    <label htmlFor="password">Password</label>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4" style={{ 'marginTop': '-24px' }}>
                            <form className="go-bottom">
                                <div>
                                    <input id="confirmPassword" name="confirmPassword" type="password" required ref="txtConfirmPassword" />
                                    <label htmlFor="password">Confirm Password</label>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="row" style={{ 'marginLeft': '4px' }}>
                        <div className="col-md-4" style={{ 'width': '350px' }}>
                            <div className="form-group">
                                <input type="file" name="img[]" className="file" ref="fileResume"   accept="application/pdf"/>
                                <div className="input-group col-xs-12">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-picture"></i></span>
                                    <input type="text" className="form-control input-lg" disabled placeholder="Upload Resume"  />
                                    <span className="input-group-btn btnbrowse">
                                        <button className="browse btn btnbrowse  input-lg" type="button"  ><i className="glyphicon glyphicon-search"></i> Browse</button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row-fluid" style={{ 'marginTop': '14px' }}>
                        <div className="col-md-4">
                            <button type="button" className="btn btnbrowse" onClick={this.insertData.bind(this)} >Create Account</button>&nbsp;&nbsp;
                                <button type="button" className="btn btnbrowse">Cancel</button>
                        </div>
                    </div>



                </div>





            </div>
        )
    }
}

