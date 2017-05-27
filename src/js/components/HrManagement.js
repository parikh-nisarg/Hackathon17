


import React from 'react';
import ReactDOM from 'react-dom';

import HrJobPosting from './HrJobPosting';
import HrJobManagement from './HrJobManagement';
import HrEmpManagement from './HrEmpManagement';
import HrClientManagement from './HrClientManagement';

export default class HrManagement extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>Hr Management
                <HrJobPosting/>
                <HrJobManagement/>
                <HrEmpManagement/>
                <HrClientManagement/>
            </div>

        )
    }

}