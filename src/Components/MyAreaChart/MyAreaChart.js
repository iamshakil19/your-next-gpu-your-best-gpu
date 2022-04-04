import React from 'react';
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';
import useChartData from '../Hooks/useChartData';
import './MyAreaChart.css'

const MyAreaChart = () => {
    const [chartData, setChartData] = useChartData()
    return (
        <div>
            <h2 className='text-center font-bold mb-5 font-serif'>Investment vs Revenue</h2>
            <AreaChart width={600} height={300} data={chartData}>
                <Area type="monotone" stroke='#ff4d00' fill='#ff4d00' dataKey={"investment"}></Area>
                <Tooltip></Tooltip>
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5"></CartesianGrid>
                <XAxis dataKey={"month"}></XAxis>
                <YAxis></YAxis>
            </AreaChart>
        </div>
    );
};

export default MyAreaChart;