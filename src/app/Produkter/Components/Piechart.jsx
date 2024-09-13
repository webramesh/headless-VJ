import React from "react";
import { PieChart as RechartsPieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const COLORS = ['#f199a8', '#e51136'];

const PieChart = ({ data, title }) => (
  <div className="flex flex-col items-center justify-center w-full">
    <ResponsiveContainer width="100%" height={200}>
      <RechartsPieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={40}
          outerRadius={70}
          fill="#8884d8"
          dataKey="value"
          startAngle={90}
          endAngle={-270}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip
          content={({ payload }) => {
            if (payload && payload.length) {
              return (
                <div className="bg-white p-2 border rounded shadow">
                  <p className="text-sm">{`${payload[0].name}: ${payload[0].value}`}</p>
                </div>
              );
            }
            return null;
          }}
        />
      </RechartsPieChart>
    </ResponsiveContainer>
    <div className="mt-2 text-center font-outfit text-sm">{title}</div>
    <div className="text-center font-outfit text-xl">{`${data[0].value}/100`}</div>
  </div>
);

export default PieChart;