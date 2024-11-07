'use client';

import { useEffect, useState } from 'react';
import ProductCard from '../../Components/ProductCard';
import Pagination from '../../Components/pagination/Pagination';
import { getAllProducts } from '@/src/lib/api/productsAPI';
import { usePagination } from '@/src/context/PageContext';

const PRODUCTS_PER_PAGE = 15;

export default function ProdukterPage() {
  const { state, dispatch } = usePagination();
  const { pageNumber, after, before, first, last } = state;
  const [products, setProducts] = useState([]);
  const [pageInfo, setPageInfo] = useState({});
  const [isReset, setIsReset] = useState(false);

  useEffect(() => {
    dispatch({ type: 'RESET', payload: PRODUCTS_PER_PAGE });
    setIsReset(true);
  }, [dispatch]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { products, pageInfo } = await getAllProducts(first, last, after, before);
      if (products && pageInfo) {
        setProducts(products);
        setPageInfo(pageInfo);
      } else {
        console.warn('No products or page info returned from getAllProducts');
      }
    };

    if (isReset) fetchProducts();
  }, [after, before, isReset]);

  const handleNextPage = () => {
    dispatch({ type: 'HANDLE_NEXT', payload: { pageLimit: PRODUCTS_PER_PAGE, after: pageInfo.endCursor } });
  };

  const handlePreviousPage = () => {
    dispatch({ type: 'HANDLE_PREV', payload: { pageLimit: PRODUCTS_PER_PAGE, before: pageInfo.startCursor } });
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
        {products?.map((product) => (
          <div key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      <hr className="my-10" />
      <Pagination pageInfo={pageInfo} next={handleNextPage} previous={handlePreviousPage} page={pageNumber} />
    </>
  );
}
