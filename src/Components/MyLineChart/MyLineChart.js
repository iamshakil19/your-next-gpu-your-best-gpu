import React from 'react';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import useChartData from '../Hooks/useChartData';
import './MyLineChart.css'

const MyLineChart = () => {
    const [chartData, setChartData] = useChartData()
    return (
        <section className='line-chart-container'>
            <h2 className='text-center font-bold mb-5 font-serif'>Month Wise Sell</h2>
            <LineChart width={600} height={300} data={chartData} >
                <Line type="monotone" stroke='#ff4d00' dataKey={"investment"}></Line>
                <XAxis dataKey={"month"}></XAxis>
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5"></CartesianGrid>
                <Tooltip></Tooltip>
                <YAxis></YAxis>
                <Legend></Legend>
            </LineChart>
        </section>
    );
};

export default MyLineChart;