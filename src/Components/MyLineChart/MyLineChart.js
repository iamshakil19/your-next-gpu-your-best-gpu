import React from 'react';
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const MyLineChart = () => {
    const data = [
        {
            "id": 1,
            "month": "Jan",
            "investment": 100000,
            "sell": 241,
            "revenue": 10101
        },
        {
            "id": 2,
            "month": "Fab",
            "investment": 200000,
            "sell": 241,
            "revenue": 10301
        },
        {
            "id": 3,
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "id": 4,
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "id": 5,
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "id": 6,
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "id": 7,
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "id": 8,
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        },
        {
            "id": 9,
            "month": "Sep",
            "investment": 600000,
            "sell": 620,
            "revenue": 51000
        },
        {
            "id": 10,
            "month": "Oct",
            "investment": 800000,
            "sell": 550,
            "revenue": 62000
        },
        {
            "id": 11,
            "month": "Nov",
            "investment": 700000,
            "sell": 770,
            "revenue": 51000
        },
        {
            "id": 12,
            "month": "Dec",
            "investment": 800000,
            "sell": 690,
            "revenue": 63000
        }
    ]
    return (
        <div>
            <h2 className='text-center'>Month Wise Sell</h2>
            <LineChart width={600} height={400} data={data} >
            <Line type="monotone" dataKey={"investment"}></Line>
            <XAxis dataKey={"month"}></XAxis>
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5"></CartesianGrid>
            <Tooltip></Tooltip>
            <YAxis></YAxis>
        </LineChart>
        </div>
    );
};

export default MyLineChart;