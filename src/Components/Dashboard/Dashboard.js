import React from 'react';
import MyAreaChart from '../MyAreaChart/MyAreaChart';
import MyBarChart from '../MyBarChart/MyBarChart';
import MyLineChart from '../MyLineChart/MyLineChart';
import MyPieChart from '../MyPieChart/MyPieChart';
import './Dashboard.css'

const Dashboard = () => {
    return (
        <section className='dashboard-container'>
            <div>
                <MyLineChart></MyLineChart>

            </div>
            <div>
                <MyAreaChart></MyAreaChart>
            </div>
            <div>
                <MyBarChart></MyBarChart>
            </div>
            <div>
                <MyPieChart></MyPieChart>
            </div>
        </section>
    );
};

export default Dashboard;