'use client';
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const PriceHistory = ({ product }) => {
  const priceHistoryData = React.useMemo(() => {
    if (!product?.fieldsProduct?.priceHistory?.length) {
      return [];
    }

    return product.fieldsProduct.priceHistory
      .map((item) => ({
        date: item.priceHistoryDate,
        price: item.price || 0,
      }))
      .sort((a, b) => new Date(a.date) - new Date(b.date));
  }, [product]);

  if (!priceHistoryData.length) {
    return <div className="text-center p-4">No price history available</div>;
  }

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={priceHistoryData} margin={{ top: 0, right: 40, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
        <XAxis
          dataKey="date"
          tick={{
            fontSize: 12,
            fill: '#666',
            angle: -30,
            // textAnchor: 'start',
            dy: 8,
          }}
          height={60}
          tickMargin={5}
          interval="preserveStartEnd"
        />
        <YAxis domain={['auto', 'auto']} tick={{ fontSize: 12, fill: '#666' }} tickMargin={10} />
        <Tooltip
          contentStyle={{
            backgroundColor: 'white',
            border: '1px solid #ccc',
            borderRadius: '4px',
            padding: '8px',
            fontSize: '12px',
          }}
        />
        <Line type="monotone" dataKey="price" stroke="#A31D1D" strokeWidth={2} dot={{ strokeWidth: 2 }} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default PriceHistory;
