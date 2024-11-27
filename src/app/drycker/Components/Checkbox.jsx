'use client';
import React from 'react';

const Checkbox = ({ title, isChecked, setIsChecked }) => (
  <div className="border-b mb-6 border-slate-200">
    <button className="w-full flex justify-between items-center bg-[#F5F5F5] pl-3 py-1">
      <h3 className="text-left text-lg">
        <span>{title}</span>
      </h3>
      <label className="flex items-center">
        <input type="checkbox" checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} className="mr-2" />
      </label>
    </button>
  </div>
);

export default Checkbox;
