'use client';
import { Legend } from '@headlessui/react';
import React from 'react';
import { Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ComposedChart } from 'recharts';

const SalesHistory = ({ product }) => {
  const salesHistoryData = React.useMemo(() => {
    if (!product?.fieldsProduct?.salesByYears?.length) {
      return [];
    }

    return product.fieldsProduct.salesByYears
      .map((item) => ({
        date: item.yearHistory,
        price: item.horozontalVolumeHistory || 0,
      }))
      .sort((a, b) => new Date(b.date) - new Date(a.date)); // Changed sorting order here
  }, [product]);

  if (!salesHistoryData.length) {
    return <div className="text-center p-4">No price history available</div>;
  }

  return (
    <ResponsiveContainer width="100%" height={300}>
      <ComposedChart
        layout="vertical"
        data={salesHistoryData}
        margin={{
          top: 10,
          right: 40,
          bottom: 0,
          left: 0, // Increased left margin for dates
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis type="number" dataKey={'price'} fontSize={12} />
        <YAxis
          dataKey="date"
          type="category"
          scale="band"
          tickFormatter={(value) => String(value)}
          angle={-45}
          fontSize={12} // Increased font size
          tick={{ fill: '#333' }} // Darker text color
          width={80} // Explicit width for Y-axis
        />
        <Tooltip />
        <Legend />
        <Bar dataKey="price" barSize={20} fill="#EB7272" />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default SalesHistory;
