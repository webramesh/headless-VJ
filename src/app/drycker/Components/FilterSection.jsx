'use client';
import ProductCard from '../../Components/ProductCard';
import Pagination from '../../Components/pagination/Pagination';
import { usePagination } from '@/src/context/PageContext';
import FilterFields from './FilterFields';
import { getAllProductsByType } from '@/src/lib/api/dryckerApi';
import { useEffect, useState } from 'react';
import { extractFields } from '@/src/utils/utils';

const PRODUCTS_PER_PAGE = 15;

const FilterSection = ({ initialProducts, slug, filters }) => {
  console.log(filters, 'filters');
  const [allProducts, setAllProducts] = useState([]);
  const { state, dispatch } = usePagination();
  const { pageNumber } = state;
  const startIndex = (pageNumber - 1) * PRODUCTS_PER_PAGE;
  const endIndex = startIndex + PRODUCTS_PER_PAGE;
  const [products, setProducts] = useState([]);
  const [reset, setReset] = useState(false);
  const [containerTypes, setContainerTypes] = useState([]);
  const [sortiments, setSortiments] = useState([]);

  useEffect(() => {
    dispatch({ type: 'RESET', payload: PRODUCTS_PER_PAGE });
    setReset(true);
  }, [dispatch]);

  useEffect(() => {
    const fetchProducts = async () => {
      dispatch({ type: 'CHANGE_LOADING', payload: true });
      const products = await getAllProductsByType(slug);
      setAllProducts(products);
      const { containerTypes, sortiments } = extractFields(products);
      setContainerTypes(containerTypes);
      setSortiments(sortiments);

      dispatch({ type: 'CHANGE_LOADING', payload: false });
    };
    if (reset) fetchProducts();
  }, [slug, reset, dispatch]);

  useEffect(() => {
    setProducts(allProducts.slice(startIndex, endIndex));
  }, [startIndex, endIndex, allProducts]);

  return (
    <div className="container mx-auto">
      <div className="mt-4 sm:mt-6 md:mt-10">
        {/* LeftSide */}
        <div className="flex flex-col lg:flex-row md:gap-8">
          <div className="w-full lg:w-[20%] mb-6 lg:mb-0 border-2 border-[#f5f5f5] p-4">
            <div className="lg:sticky lg:top-6 lg:max-h-screen  flex flex-col">
              <div className="text-2xl lg:text-3xl  items-start lg:pl-3 px-4 lg:px-0">Filter</div>
              <div className="mt-2 lg:mt-4 px-4 lg:px-0">
                <FilterFields typ={containerTypes} sortiments={sortiments} />
              </div>
            </div>
          </div>
          {/* Rightside */}
          <div className="w-full lg:w-[80%] flex flex-col">
            <div className="text-2xl md:text-3xl  text-center pl-3 mb-4 md:mb-6">Alla roséviner</div>
            <div className="container mx-auto p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {(pageNumber === 1 ? initialProducts : products).map((product) => (
                  <div key={product.id} className="col-span-1">
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            </div>

            <Pagination pageLimit={PRODUCTS_PER_PAGE} total={allProducts.length} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
