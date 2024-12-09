'use client';
import { useCallback, useEffect, useState } from 'react';
import Slider from './Slider';
import Dropdown from './Dropdown';
import Checkbox from './Checkbox';
import { useFilters } from '@/src/context/FilterContext';
import { useRouter } from 'next/navigation';

function FilterFields({ typs, sortiments, organicCount, sustainableCount, priceRange, volumeRange, filters }) {
  const [openIndex, setOpenIndex] = useState(false);

  const { state, dispatch } = useFilters();
  const { storlek, pris, ekologisk, hallbar, typ, sortiment } = state;
  const router = useRouter();

  useEffect(() => {
    if (priceRange) {
      dispatch({ type: 'SET_PRIS', payload: { minPrice: priceRange.minPrice, maxPrice: priceRange.maxPrice } });
    }
    if (volumeRange) {
      dispatch({
        type: 'SET_STORLEK',
        payload: { minVolume: volumeRange.minVolume, maxVolume: volumeRange.maxVolume },
      });
    }
    if (filters) {
      dispatch({ type: 'INITIAL_STATE', payload: filters });
    }
  }, [dispatch, priceRange, volumeRange, filters]);

  const updateURLSearchParams = useCallback(() => {
    const searchParams = new URLSearchParams();
    const { minVolume, maxVolume } = volumeRange;
    const { minPrice, maxPrice } = priceRange;
    if (ekologisk) searchParams.set('wine-organic', '1');
    if (hallbar) searchParams.set('sustainable', '1');
    if (storlek[0] !== minVolume) searchParams.set('min_container-volume', storlek[0]);
    if (storlek[1] !== maxVolume) searchParams.set('max_container-volume', storlek[1]);
    if (pris[0] !== minPrice) searchParams.set('min_price', pris[0]);
    if (pris[1] !== maxPrice) searchParams.set('max_price', pris[1]);
    [typ, sortiment].forEach((item, index) => {
      if (item) searchParams.set(['container-type', 'sortiment'][index], item.toLowerCase());
    });
    return searchParams.toString();
  }, [ekologisk, hallbar, storlek, volumeRange, pris, priceRange, typ, sortiment]);

  useEffect(() => {
    const params = updateURLSearchParams();
    router.push(`${window.location.pathname}?${params}`, undefined, { shallow: true, scroll: false });
  }, [router, updateURLSearchParams]);

  return (
    <div className="lg:sticky lg:top-6 lg:max-h-screen  flex flex-col">
      <div className="text-2xl lg:text-3xl  items-start lg:pl-3 px-4 lg:px-0">Filter</div>

      <div className="mt-2 lg:mt-4 px-4 lg:px-0">
        <Slider title={'Storlek'} range={storlek} maxValue={volumeRange?.maxVolume} rangeKey={'storlek'} />
        <Slider title={'Pris'} range={pris} maxValue={priceRange?.maxPrice} rangeKey={'pris'} />
        <Dropdown options={typs} title="Typ" openIndex={openIndex} setOpenIndex={setOpenIndex} action="SET_TYP" />
        <Dropdown
          options={sortiments}
          title="Sortiment"
          openIndex={openIndex}
          setOpenIndex={setOpenIndex}
          action="SET_SORTIMENT"
        />
        {organicCount > 0 && (
          <Checkbox title="Ekologisk" isChecked={ekologisk} action={'SET_EKOLOGISK'} count={organicCount} />
        )}
        {sustainableCount > 0 && (
          <Checkbox title="Hållbar" isChecked={hallbar} action="SET_HALLBAR" count={sustainableCount} />
        )}
      </div>
    </div>
  );
}

export default FilterFields;
