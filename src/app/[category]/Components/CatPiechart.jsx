import React from 'react';
import { PieChart as RechartsPieChart, Pie, Cell, ResponsiveContainer, Tooltip, Label } from 'recharts';

const COLORS = ['#e51136', '#f199a8'];

export default function PieChart({ data, title }) {
  const totalValue = 12;

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <ResponsiveContainer width="100%" height={100}>
        <RechartsPieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={20}
            outerRadius={35}
            fill="#8884d8"
            dataKey="value"
            startAngle={90}
            endAngle={-270}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
            <Label
              content={({ viewBox }) => {
                const { cx, cy } = viewBox;
                return (
                  <text
                    x={cx}
                    y={cy}
                    fill="#333"
                    textAnchor="middle"
                    dominantBaseline="central"
                    className="text-xs font-medium"
                  >
                    {`${data[0].value}/${totalValue}`}
                  </text>
                );
              }}
            />
          </Pie>
          <Tooltip
            content={({ payload }) => {
              if (payload && payload.length) {
                return (
                  <div className="bg-white p-2 border rounded shadow">
                    <p className="text-xs">{`${payload[0].name}: ${payload[0].value}`}</p>
                  </div>
                );
              }
              return null;
            }}
          />
        </RechartsPieChart>
      </ResponsiveContainer>
      <div className="mt-2 text-center  text-xs md:text-sm lg:text-md">{title}</div>
    </div>
  );
}
