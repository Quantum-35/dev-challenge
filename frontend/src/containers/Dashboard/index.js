import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import DashboardComponent from '../../components/Dashboard';
import { getTasksAssigned } from '../../redux/actions';

const Dashboard = props => {
    useEffect(() => {
        props.getTasksAssignedP()
    }, []);
    return (
        <DashboardComponent tasks={props.tasks} />
    );
}

export default 
connect(
    state => ({
        tasks: state.tasks.data
    }),
    dispatch => ({
        getTasksAssignedP: tasks => dispatch(getTasksAssigned(tasks))
    })
)
(Dashboard);
