'use client';
import { createContext, useContext, useState } from 'react';

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [storlek, setStorlek] = useState([0, 18000]);
  const [pris, setPris] = useState([0, 85000]);

  return <FilterContext.Provider value={{ storlek, pris, setStorlek, setPris }}>{children}</FilterContext.Provider>;
};

export const useFilters = () => useContext(FilterContext);
