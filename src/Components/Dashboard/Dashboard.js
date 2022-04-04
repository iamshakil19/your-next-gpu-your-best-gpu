import React from 'react';
import MyAreaChart from '../MyAreaChart/MyAreaChart';
import MyLineChart from '../MyLineChart/MyLineChart';
import './Dashboard.css'

const Dashboard = () => {
    return (
        <section>
            <div>
                <div>
                    {
                        <MyLineChart></MyLineChart>
                    }
                </div>
                <div>
                    {
                        <MyAreaChart></MyAreaChart>
                    }
                </div>
                <div>
                    
                </div>
            </div>
        </section>
    );
};

export default Dashboard;