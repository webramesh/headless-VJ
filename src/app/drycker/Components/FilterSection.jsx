'use client';
import { useCallback, useEffect, useMemo, useReducer, useState } from 'react';
import ProductCard from '../../Components/ProductCard';
import Pagination from '../../Components/pagination/Pagination';
import { usePagination } from '@/src/context/PageContext';
import FilterFields from './FilterFields';
import { getAllProductsByType } from '@/src/lib/api/dryckerApi';
import { extractFields, filterProducts } from '@/src/utils/utils';
import { useFilters } from '@/src/context/FilterContext';
import SelectedFilter from './SelectedFilter';
import { useRouter } from 'next/navigation';

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

const FilterSection = ({ initialProducts, slug, filters }) => {
  const initialState = useMemo(
    () => ({
      containerTypes: [],
      sortimentOptions: [],
      organicCount: 0,
      sustainableCount: 0,
      priceRange: { minPrice: 0, maxPrice: 85000 },
      volumeRange: { minVolume: 0, maxVolume: 18000 },
    }),
    []
  );

  const [state, dispatch] = useReducer(reducer, initialState);
  const { containerTypes, sortimentOptions, organicCount, sustainableCount, priceRange, volumeRange } = state;

  const { state: pageState, dispatch: pageDispatch } = usePagination();
  const { pageNumber, loading } = pageState;
  const startIndex = (pageNumber - 1) * PRODUCTS_PER_PAGE;
  const endIndex = startIndex + PRODUCTS_PER_PAGE;
  const { state: filterState, dispatch: filterDispatch } = useFilters();

  const [allProducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [reset, setReset] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    pageDispatch({ type: 'RESET', payload: PRODUCTS_PER_PAGE });
    setReset(true);
  }, [pageDispatch]);

  const fetchProducts = useCallback(async () => {
    pageDispatch({ type: 'CHANGE_LOADING', payload: true });
    try {
      const products = await getAllProductsByType(slug);
      setAllProducts(products);
      extractOptionsAndCounts(products, dispatch);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      pageDispatch({ type: 'CHANGE_LOADING', payload: false });
    }
  }, [pageDispatch, slug]);

  useEffect(() => {
    if (reset) fetchProducts();
  }, [reset, fetchProducts]);

  useEffect(() => {
    setProducts(filteredProducts.slice(startIndex, endIndex));
  }, [startIndex, endIndex, filteredProducts]);

  useEffect(() => {
    const handleFilterChange = () => {
      const newFilteredProducts = filterProducts(allProducts, filterState);
      setFilteredProducts(newFilteredProducts);
    };

    handleFilterChange();
  }, [allProducts, filterState]);

  const router = useRouter();
  const clearAllFilters = useCallback(() => {
    router.push(window.location.pathname, undefined, { shallow: true, scroll: false });
    filterDispatch({ type: 'RESET', payload: { volumeRange, priceRange } });
  }, [router, filterDispatch, volumeRange, priceRange]);

  const clearSpecificFilters = useCallback(
    (key) => {
      const url = new URL(window.location);
      url.searchParams.delete(key);
      router.push(url.pathname + url.search, undefined, { shallow: true, scroll: false });
      filterDispatch({ type: 'RESET_ONE', payload: key });
    },
    [router, filterDispatch]
  );

  const selectedFilters = useMemo(() => {
    return Object.entries(filters).map(([key, value]) => ({ key, value }));
  }, [filters]);

  const displayProducts = useMemo(() => {
    if (loading) return initialProducts;
    return products;
  }, [loading, initialProducts, products]);

  return (
    <div className="container mx-auto">
      <div className="mt-4 sm:mt-6 md:mt-10">
        {/* LeftSide */}
        <div className="flex flex-col lg:flex-row md:gap-8">
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
          <div className="w-full lg:w-[80%] flex flex-col">
            <div className="text-2xl md:text-3xl  text-center pl-3 mb-4 md:mb-6">Alla roséviner</div>
            <div className="flex gap-2 items-center flex-wrap">
              {selectedFilters.length > 0 && (
                <SelectedFilter filter={'Reset all'} onClick={clearAllFilters} borderColor={'#cc8181'} noCross />
              )}
              {selectedFilters?.map((filter, index) => (
                <div key={index}>
                  <SelectedFilter onClick={clearSpecificFilters} filter={filter} />
                </div>
              ))}
            </div>
            <div className="container mx-auto p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayProducts.map((product) => (
                  <div key={product.id} className="col-span-1">
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            </div>

            <Pagination pageLimit={PRODUCTS_PER_PAGE} total={filteredProducts?.length} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
