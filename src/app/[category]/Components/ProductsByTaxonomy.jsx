'use client';
import { getTaxonomyBySlug } from '@/src/lib/api/taxonomyApi';
import ProductCard from '../../Components/ProductCard';
import Pagination from '../../Components/pagination/Pagination';
import { usePagination } from '@/src/context/PageContext';
import { useEffect, useRef, useState } from 'react';

const PRODUCTS_PER_PAGE = 15;

function ProductsByTaxonomy({ params, totalProducts }) {
  const { category, slug } = params;
  const { state, dispatch } = usePagination();
  const { after, before, first, last } = state;
  const [products, setProducts] = useState([]);
  const [pageInfo, setPageInfo] = useState({});
  const [isReset, setIsReset] = useState(true);
  const name = useRef('');

  useEffect(() => {
    dispatch({ type: 'RESET', payload: PRODUCTS_PER_PAGE });
    setIsReset(true);
  }, [dispatch]);

  useEffect(() => {
    const fetchProducts = async () => {
      dispatch({ type: 'CHANGE_LOADING', payload: true });
      const { taxonomy, products, pageInfo } = await getTaxonomyBySlug(category, slug, first, last, after, before);
      name.current = taxonomy?.name;
      if (products && pageInfo) {
        setProducts(products);
        setPageInfo(pageInfo);
        dispatch({ type: 'CHANGE_LOADING', payload: false });
      } else {
        console.warn('No products or page info returned from getAllProducts');
      }
    };

    if (isReset) fetchProducts();
  }, [first, last, after, before, isReset, dispatch, category, slug]);

  return (
    <>
      <h1 className="text-2xl lg:text-3xl mb-4 font-semibold">{name.current}</h1>

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

export default ProductsByTaxonomy;
