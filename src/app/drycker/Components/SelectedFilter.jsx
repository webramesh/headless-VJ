'use client';
import { Cross2Icon } from '@radix-ui/react-icons';
import React from 'react';

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

function SelectedFilter({ onClick, filter, noCross }) {
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
        {!noCross && <Cross2Icon />}
      </span>
    );
  }
}

export default React.memo(SelectedFilter);
