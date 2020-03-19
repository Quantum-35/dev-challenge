import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import DashboardComponent from '../../components/Dashboard';
import { getTasksAssigned } from '../../redux/actions';

const Dashboard = props => {
    useEffect(() => {
        const data = {
            page: 1,
            limit: 10,
            order: "created",
            orderMethod: "DESC"
        };
        props.getTasksAssignedP(data)
    }, []);

    const nextList = data => {
        props.getTasksAssignedP(data);
    }

    return (
        <DashboardComponent
            tasks={props.tasks}
            NextList={nextList}
        />
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
