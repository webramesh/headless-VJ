import { useFilters } from '@/src/context/FilterContext';
import { X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { useCallback } from 'react';

function paramsToText(key, value) {
  const mappings = {
    'min_container-volume': `Min container-volume ${value}`,
    'max_container-volume': `Max container-volume ${value}`,
    min_price: `Min price ${value}`,
    max_price: `Max price ${value}`,
    'container-type': value,
    'wine-organic': 'Ekologisk',
    sortiment: value,
    sustainable: 'Hållbar',
  };

  return mappings[key] || 'Reset All';
}

function FilterBox({ onClick, filter, noCross }) {
  if (filter) {
    const { key, value } = filter;
    const displayText = paramsToText(key, value);
    return (
      <span
        onClick={() => onClick(key)}
        className={`${noCross ? 'border-[#cc8181]' : 'border-[#0570e2]'} border-[1px] p-2 rounded-full text-sm hover:opacity-90 cursor-pointer flex gap-2 items-center capitalize`}
        role="button"
        aria-label={`Filter: ${displayText}`}
      >
        {displayText}
        {!noCross && <X strokeWidth={1.5} size={18} />}
      </span>
    );
  }
}

function SelectedFilter({ selectedFilters, volumeRange, priceRange }) {
  const { dispatch } = useFilters();
  const router = useRouter();

  const clearAllFilters = useCallback(() => {
    router.push(window.location.pathname, undefined, { shallow: true, scroll: false });
    dispatch({ type: 'RESET', payload: { volumeRange, priceRange } });
  }, [router, dispatch, volumeRange, priceRange]);

  const clearSpecificFilters = useCallback(
    (filter) => {
      const url = new URL(window.location);
      url.searchParams.delete(filter);
      router.push(url.pathname + url.search, undefined, { shallow: true, scroll: false });
      dispatch({ type: 'RESET_ONE', payload: { filter, volumeRange, priceRange } });
    },
    [router, dispatch, volumeRange, priceRange]
  );

  return (
    <div className="flex gap-2 items-center flex-wrap p-2 justify-center md:justify-start">
      {selectedFilters.length > 0 && (
        <FilterBox filter={'Reset all'} onClick={clearAllFilters} borderColor={'#cc8181'} noCross />
      )}
      {selectedFilters?.map((filter, index) => (
        <div key={index}>
          <FilterBox onClick={clearSpecificFilters} filter={filter} />
        </div>
      ))}
    </div>
  );
}

export default React.memo(SelectedFilter);
