import React from 'react';
import { Line, LineChart, ReferenceLine, Tooltip, XAxis, YAxis } from 'recharts';

const MyLineChart = () => {
    const data01 = [
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
        <LineChart width={500}
        height={300}
        data={data01}
        margin={
        {
          top: 20,
          right: 50,
          left: 20,
          bottom: 5,
        }}>
        <XAxis dataKey={'name'} />
        <YAxis></YAxis>
        <Tooltip />
        <ReferenceLine x="Page C" stroke="red" label="Max PV PAGE" />
        <ReferenceLine y={10000} label="Max" stroke="red" />
        <Line type="monotone" dataKey="amt" stroke="#8884d8" />
        <Line type="monotone" dataKey="income" stroke="#82ca9d" />
        </LineChart>
    );
};

export default MyLineChart;