'use client';
import { useEffect } from 'react';
import Slider from './Slider';
import { useFilters } from '@/src/context/FilterContext';
import Dropdown from './Dropdown';
import Checkbox from './Checkbox';

function FilterFields({ typ, sortiments }) {
  const { storlek, pris, setStorlek, setPris } = useFilters();

  return (
    <div>
      <Slider title={'Storlek'} range={storlek} setRange={setStorlek} maxValue={18000} />
      <Slider title={'Pris'} range={pris} setRange={setPris} maxValue={85000} />
      <Dropdown options={typ} title="Typ" />
      <Dropdown options={sortiments} title="Sortiment" />
      <Checkbox title="Ekologisk" />
      <Checkbox title="Hållbar" />
    </div>
  );
}

export default FilterFields;
