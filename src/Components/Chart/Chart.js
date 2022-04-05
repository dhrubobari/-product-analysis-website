import React from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Chart = () => {
    const data = [
        {
          name: 'Mar',
          income: 6000,
          expenses: 2400,
          amt: 2400,
        },
        {
          name: 'Apr',
          income: 5000,
          expenses: 1398,
          amt: 2210,
        },
        {
          name: 'May',
          income: 10000,
          expenses: 5000,
          amt: 2290,
        },
        {
          name: 'Jun',
          income: 6000,
          expenses: 3908,
          amt: 2000,
        },
        {
          name: 'Jul',
          income: 2500,
          expenses: 2500,
          amt: 2181,
        },
        {
          name: 'Aug',
          income: 5000,
          expenses: 1500,
          amt: 2500,
        },
      ];
    return (
        <LineChart width={500} height={300} data={data} margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}>
            <Line dataKey={'income'}></Line>
            <Line dataKey={'expenses'}></Line>
            <XAxis dataKey={'name'}></XAxis>
            <YAxis></YAxis>
            <Tooltip></Tooltip>
        </LineChart>
    );
};

export default Chart;