import React from 'react';
import { Cell, Legend, Pie, PieChart, Sector, Tooltip, XAxis } from 'recharts';
import useChartData from '../Hooks/useChartData';
import './MyPieChart.css'

const MyPieChart = () => {
    const [chartData, setChartData] = useChartData()
    return (
        <div>
            <h2 className='text-center font-bold mb-5 font-serif'>Investment vs Revenue</h2>
            <PieChart width={400} height={400}>
                <Pie data={chartData} dataKey={"revenue"} cx="50%" cy="50%" outerRadius={70} fill="#0095ff"></Pie>
                <Pie data={chartData} dataKey={"investment"} cx="50%" cy="50%" innerRadius={80} outerRadius={100} fill="#06c232" label></Pie>
                <Tooltip></Tooltip>
                <Cell></Cell>
                <Sector></Sector>
            </PieChart>
        </div>
    );
};

export default MyPieChart;