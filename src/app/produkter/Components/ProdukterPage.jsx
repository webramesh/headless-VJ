'use client';

import { useEffect, useState } from 'react';
import ProductCard from '../../Components/ProductCard';
import Pagination from '../../Components/pagination/Pagination';
import { getAllProducts } from '@/src/lib/api/productsAPI';
import { usePagination } from '@/src/context/PageContext';

const PRODUCTS_PER_PAGE = 15;

export default function ProdukterPage({ totalProducts }) {
  const { state, dispatch } = usePagination();
  const { after, before, first, last } = state;
  const [products, setProducts] = useState([]);
  const [pageInfo, setPageInfo] = useState({});
  const [isReset, setIsReset] = useState(true);

  useEffect(() => {
    dispatch({ type: 'RESET', payload: PRODUCTS_PER_PAGE });
    setIsReset(true);
  }, [dispatch]);

  useEffect(() => {
    const fetchProducts = async () => {
      dispatch({ type: 'CHANGE_LOADING', payload: true });
      const { products, pageInfo } = await getAllProducts(first, last, after, before);

      if (products && pageInfo) {
        setProducts(products);
        setPageInfo(pageInfo);
        dispatch({ type: 'CHANGE_LOADING', payload: false });
      } else {
        console.warn('No products or page info returned from getAllProducts');
      }
    };

    if (isReset) fetchProducts();
  }, [first, last, after, before, isReset, dispatch]);

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
      <Pagination pageInfo={pageInfo} pageLimit={PRODUCTS_PER_PAGE} total={totalProducts} />
    </>
  );
}
