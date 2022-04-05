import React from 'react';
import Chart from '../Chart/Chart';
import MyLineChart from '../MyLineChart/MyLineChart';
import './DashBoard.css'

const DashBoard = () => {
    return (
        <div>
            <h1 className='chart-title'>Month Wise Sell</h1>
            <div className='chart-div'>
            <Chart></Chart>
            <MyLineChart></MyLineChart>
            </div>
        </div>
    );
};

export default DashBoard;