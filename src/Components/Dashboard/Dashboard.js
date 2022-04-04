import React from 'react';
import MyLineChart from '../MyLineChart/MyLineChart';
import './Dashboard.css'

const Dashboard = () => {
    return (
        <section>
            <div >
                {
                    <MyLineChart></MyLineChart>
                }
            </div>
        </section>
    );
};

export default Dashboard;