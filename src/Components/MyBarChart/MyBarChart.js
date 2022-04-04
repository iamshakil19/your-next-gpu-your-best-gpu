import React from 'react';
import { Bar, BarChart, Legend, Tooltip, XAxis } from 'recharts';
import useChartData from '../Hooks/useChartData';
import './MyBarChart.css'
const MyBarChart = () => {
    const [chartData, setChartData] = useChartData()
    return (
        <div>
            <h2 className='text-center font-bold mb-5 font-serif'>Investment vs Revenue</h2>
            <BarChart width={600} height={300} data={chartData}>
                <Bar dataKey={"investment"}></Bar>
                <Tooltip></Tooltip>
                <Legend></Legend>
                <XAxis dataKey={"month"}></XAxis>
            </BarChart>
        </div>
    );
};

export default MyBarChart;