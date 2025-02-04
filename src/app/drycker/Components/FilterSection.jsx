'use client';
import { useEffect, useMemo, useReducer, useState } from 'react';
import ProductCard from '../../Components/ProductCard';
import Pagination from '../../Components/pagination/Pagination';
import { usePagination } from '@/src/context/PageContext';
import FilterFields from './FilterFields';
import { extractFields, extractFieldsForFilteredProducts, filterProducts } from '@/src/utils/utils';
import { useFilters } from '@/src/context/FilterContext';
import SelectedFilter from './SelectedFilter';
import ProductCardSkeleton from '../../Components/SkeletonLoading/ProductCardSkeleton';

const PRODUCTS_PER_PAGE = 15;

function reducer(state, action) {
  switch (action.type) {
    case 'SET_DATA':
      return {
        ...state,
        containerTypes: action.payload.containerTypes,
        sortimentOptions: action.payload.sortiments,
        organicCount: action.payload.organicCount,
        sustainableCount: action.payload.sustainableCount,
        priceRange: action.payload.priceRange,
        volumeRange: action.payload.volumeRange,
      };

    case 'REFRESH_FILTERS':
      return {
        ...state,
        containerTypes: action.payload.containerTypes,
        sortimentOptions: action.payload.sortiments,
        organicCount: action.payload.organicCount,
        sustainableCount: action.payload.sustainableCount,
      };
    default:
      return state;
  }
}
function extractOptionsAndCounts(products, dispatch) {
  const { containerTypes, sortiments, organicCount, sustainableCount, priceRange, volumeRange } =
    extractFields(products);
  dispatch({
    type: 'SET_DATA',
    payload: { containerTypes, sortiments, organicCount, sustainableCount, priceRange, volumeRange },
  });
}

function extractOptionsAgain(products, dispatch) {
  const { containerTypes, sortiments, organicCount, sustainableCount } = extractFieldsForFilteredProducts(products);
  dispatch({
    type: 'REFRESH_FILTERS',
    payload: { containerTypes, sortiments, organicCount, sustainableCount },
  });
}

const FilterSection = ({ products, filters, allProductTitle }) => {
  const initialState = useMemo(
    () => ({
      containerTypes: [],
      sortimentOptions: [],
      organicCount: 0,
      sustainableCount: 0,
      priceRange: { minPrice: 0, maxPrice: 0 },
      volumeRange: { minVolume: 0, maxVolume: 0 },
    }),
    []
  );

  const [state, dispatch] = useReducer(reducer, initialState);
  const { containerTypes, sortimentOptions, organicCount, sustainableCount, priceRange, volumeRange } = state;

  const { state: pageState, dispatch: pageDispatch } = usePagination();
  const { pageNumber } = pageState;
  const startIndex = (pageNumber - 1) * PRODUCTS_PER_PAGE;
  const endIndex = startIndex + PRODUCTS_PER_PAGE;
  const { state: filterState } = useFilters();

  const [displayProducts, setDisplayProducts] = useState([]);
  const [reset, setReset] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const selectedFilters = useMemo(() => {
    const { ekologisk, hallbar, storlek, pris, typ, sortiment } = filterState;
    const filters = [];

    if (ekologisk) filters.push({ key: 'wine-organic', value: '1' });
    if (hallbar) filters.push({ key: 'sustainable', value: '1' });
    if (storlek[0] !== volumeRange.minVolume) filters.push({ key: 'min_container-volume', value: storlek[0] });
    if (storlek[1] !== volumeRange.maxVolume) filters.push({ key: 'max_container-volume', value: storlek[1] });
    if (pris[0] !== priceRange.minPrice) filters.push({ key: 'min_price', value: pris[0] });
    if (pris[1] !== priceRange.maxPrice) filters.push({ key: 'max_price', value: pris[1] });
    if (typ) filters.push({ key: 'container-type', value: typ });
    if (sortiment) filters.push({ key: 'sortiment', value: sortiment });

    return filters;
  }, [filterState, volumeRange, priceRange]);

  useEffect(() => {
    pageDispatch({ type: 'RESET', payload: PRODUCTS_PER_PAGE });
    setReset(true);
  }, [pageDispatch]);

  useEffect(() => {
    setDisplayProducts(filteredProducts?.slice(startIndex, endIndex));
  }, [startIndex, endIndex, filteredProducts]);

  useEffect(() => {
    const handleFilterChange = () => {
      const newFilteredProducts = filterProducts(products, filterState);
      setFilteredProducts(newFilteredProducts);
    };

    if (reset) handleFilterChange();
  }, [reset, products, filterState]);

  useEffect(() => {
    extractOptionsAndCounts(products, dispatch);
  }, [products]);

  useEffect(() => {
    extractOptionsAgain(filteredProducts, dispatch);
  }, [filteredProducts]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 10000); // 10 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container mx-auto">
      <div className="mt-4 sm:mt-6 md:mt-10">
        {/* LeftSide */}
        <div className="flex flex-col-reverse md:flex-col lg:flex-row md:gap-8">
          <div className="w-full lg:w-[20%] mb-6 lg:mb-0 border-2 border-[#f5f5f5] p-4">
            <FilterFields
              typs={containerTypes}
              sortiments={sortimentOptions}
              organicCount={organicCount}
              sustainableCount={sustainableCount}
              priceRange={priceRange}
              volumeRange={volumeRange}
              filters={filters}
            />
          </div>
          {/* Rightside */}
          <div className="w-full lg:w-[80%]">
            <div className="text-2xl md:text-3xl text-center pl-3 mb-4 md:mb-6">{allProductTitle}</div>
            <div className="flex flex-col-reverse md:flex-col">
              <SelectedFilter selectedFilters={selectedFilters} volumeRange={volumeRange} priceRange={priceRange} />
              <div>
                <div className="container mx-auto p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {displayProducts.length > 0
                      ? displayProducts.map((product) => (
                          <div key={product.id} className="col-span-1">
                            <ProductCard product={product} />
                          </div>
                        ))
                      : isLoading
                        ? Array.from({ length: PRODUCTS_PER_PAGE }).map((_, index) => (
                            <ProductCardSkeleton key={index} />
                          ))
                        : 'Produkten hittades inte'}
                  </div>
                </div>
                <Pagination pageLimit={PRODUCTS_PER_PAGE} total={filteredProducts?.length} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
