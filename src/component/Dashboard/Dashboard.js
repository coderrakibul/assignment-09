
import React from 'react';
import { Bar, BarChart, CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import './Dashboard.css'

const Dashboard = () => {
    const data = [
        {
            month: "Mar",
            investment: 100000,
            sell: 241,
            revenue: 102401
        },
        {
            month: "Apr",
            investment: 200000,
            sell: 423,
            revenue: 244500
        },
        {
            month: "May",
            investment: 500000,
            sell: 726,
            revenue: 67010
        },
        {
            month: "Jun",
            investment: 500000,
            sell: 529,
            revenue: 404050
        },
        {
            month: "Jul",
            investment: 600000,
            sell: 601,
            revenue: 590000
        },
        {
            month: "Aug",
            investment: 700000,
            sell: 670,
            revenue: 250000
        }
    ];

    return (
        <div className='container d-flex mt-5'>
            <div className='w-50'>
                <h3 className='text-center text-primary'>Month Wise Sell</h3>
                <LineChart className='container line-chart' width={500} height={250} data={data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey={"month"} />
                    <YAxis dataKey={"sell"} />
                    <Tooltip />
                    <Line type="monotone" dataKey={"sell"} stroke="#8884d8" />

                </LineChart>
            </div>

            <div className='w-50'>
                <h3 className='text-center text-primary'>Investment vs Revenue</h3>
                <BarChart width={500} height={250} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey={"month"} />
                    <YAxis dataKey={"investment"} />
                    <Tooltip />
                    <Bar dataKey={"revenue"} fill="#8884d8" />
                </BarChart>
            </div>
        </div>



    );
};

export default Dashboard;