import React from 'react';
import { Table, Tag } from 'antd';

import './dashboad.css'

const columns = [
    {
      title: 'Firs Name',
      dataIndex: 'customer_first_name',
      key: 'customer_first_name',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Personnel Name',
      dataIndex: 'personnel_first_name',
      key: 'personnel_first_name',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Date assigned',
      dataIndex: 'assigned',
      key: 'assigned',
      render: text => <a>{text}</a>,
    },
    {
      title: 'comments',
      dataIndex: 'comments',
      key: 'comments',
      render: text => <a>{text}</a>,
    },
    {
      title: 'registration',
      dataIndex: 'registration',
      key: 'registration',
    }
  ];

const getData = payload => {
    let colList = [];
    const dataSource = [];
    console.log(payload)
    if(Array.isArray(payload && payload.data && payload.data.tasks)) {
        colList.push(...payload.data.tasks);
    }
    if(Array.isArray(payload && payload.data && payload.data.message && payload.data.message.tasks)) {
        colList = [];
        colList.push(...payload.data.message.tasks);
    }
    if(Array.isArray(colList)) {
        colList.map((da, i) => {
            dataSource.push({
                key: i,
                customer_first_name: da.customer_first_name ,
                personnel_first_name: da.personnel_first_name ,
                assigned: da.assigned,
                comments: da.comments,
                registration: da.registration
            });
        });
    }
    return dataSource;
}

const Dashboard = props => {
    return (
        <div className='dash-container'>
            <Table columns={columns} dataSource={getData(props.tasks)} />
        </div>
    );
}

export default Dashboard;
