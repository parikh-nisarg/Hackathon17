import React from 'react';
import ReactDOM from 'react-dom';

export default class CandidateRegister extends React.Component{
    constructor(){
        super();
    }

    
    componentDidMount(){
        $(document).on('click', '.browse', function(){
            var file = $(this).parent().parent().parent().find('.file');
            file.trigger('click');
        });
        $(document).on('change', '.file', function(){
            $(this).parent().find('.form-control').val($(this).val().replace(/C:\\fakepath\\/i, ''));
        });
    }



    render(){
        return(
            <div>


                   <div className="container-fluid">
                    
                        <div className="row">
                            <div className="col-md-4" style={{'margin-top':'-24px'}}>  
                                    <form className="go-bottom">                            
                                        <div>
                                            <input id="name" name="name" type="text" required />
                                            <label htmlFor="name">Name</label>
                                        </div>
                                    </form>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4" style={{'margin-top':'-24px'}}>  
                                    <form className="go-bottom">                            
                                        <div>
                                            <input id="address" name="address" type="text" required />
                                            <label htmlFor="address">Address</label>
                                        </div>
                                    </form>
                            </div>
                        </div>
                         <div className="row">
                            <div className="col-md-4" style={{'margin-top':'-24px'}}>  
                                    <form className="go-bottom">                            
                                        <div>
                                            <input id="email" name="email" type="text" required />
                                            <label htmlFor="email">Email</label>
                                        </div>
                                    </form>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4" style={{'margin-top':'-24px'}}>  
                                    <form className="go-bottom">                            
                                        <div>
                                            <input id="contactnumber" name="contactnumber" type="text" required />
                                            <label htmlFor="contactnumber">Contact Number</label>
                                        </div>
                                    </form>
                            </div>
                        </div>
                         <div className="row">
                            <div className="col-md-4" style={{'margin-top':'-24px'}}>  
                                    <form className="go-bottom">                            
                                        <div>
                                            <input id="skill" name="skill" type="text" required />
                                            <label htmlFor="skill">Skills</label>
                                        </div>
                                    </form>
                            </div>
                        </div>
                        <div className="row" style={{'margin-left':'4px'}}> 
                            <div className="col-md-4" style={{'width':'350px'}}>  
                                   <div className="form-group">
                                        <input type="file" name="img[]" className="file" />
                                        <div className="input-group col-xs-12">
                                            <span className="input-group-addon"><i className="glyphicon glyphicon-picture"></i></span>
                                            <input type="text" className="form-control input-lg" disabled placeholder="Upload Resume" />
                                            <span className="input-group-btn btnbrowse">
                                                <button className="browse btn btnbrowse  input-lg" type="button"><i className="glyphicon glyphicon-search"></i> Browse</button>
                                            </span>
                                        </div>        
                                    </div>
                            </div>
                        </div>

                          <div className="row-fluid" style={{'margin-top':'14px'}}>
                            <div className="col-md-4"> 
                                <button type="button" className="btn btnbrowse">Create Account</button>&nbsp;&nbsp;    
                                <button type="button" className="btn btnbrowse">Cancel</button>                                  
                            </div>
                        </div>
                        
                   </div>





            </div>
        )
    }
}

