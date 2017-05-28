import React from 'react';
import ReactDOM from 'react-dom';

import HrJobPosting from './HrJobPosting';
import HrJobManagement from './HrJobManagement';
import HrEmpManagement from './HrEmpManagement';
import HrClientManagement from './HrClientManagement';

import database from './Database';

export default class HrManagement extends React.Component {
    constructor(props) {
        super(props);

        this.state = {HrDetails: {}}
    }

    componentDidMount() {
        let userId = this.props.match.params.id;
        if (userId != "") {
            let userDetails = new database("UserDetails");
            userDetails.getData(userId).then((user) => {
                this.state.HrDetails = user.val();

                this.setState({HrDetails: this.state.HrDetails})

            })
        }
    }

    render() {
        return (
            <div>
                <HrJobPosting/>
                <HrJobManagement/>
                <HrEmpManagement/>
            </div>

        )
    }

}