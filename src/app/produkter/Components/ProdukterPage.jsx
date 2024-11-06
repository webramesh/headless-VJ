'use client';

import { useEffect, useReducer, useState } from 'react';
import ProductCard from '../../Components/ProductCard';
import Pagination from '../../Components/pagination/Pagination';
import { getAllProducts } from '@/src/lib/api/productsAPI';

const PRODUCTS_PER_PAGE = 15;
const initialState = {
  pageNumber: 1,
  products: [],
  pageInfo: {},
  after: null,
  before: null,
  first: 15,
  last: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return { ...state, products: action.payload.products, pageInfo: action.payload.pageInfo };
    case 'RESET':
      return initialState;
    case 'HANDLE_NEXT':
      return {
        ...state,
        first: PRODUCTS_PER_PAGE,
        last: 0,
        before: null,
        after: action.payload,
        pageNumber: state.pageNumber + 1,
      };
    case 'HANDLE_PREV':
      return {
        ...state,
        first: 0,
        last: PRODUCTS_PER_PAGE,
        before: action.payload,
        after: null,
        pageNumber: state.pageNumber - 1,
      };
    default:
      return state;
  }
};

export default function ProdukterPage() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { pageNumber, products, pageInfo, after, before, first, last } = state;

  useEffect(() => {
    const fetchProducts = async () => {
      if (pageNumber === 1) {
        dispatch({ type: 'RESET' });
      }

      const { products, pageInfo } = await getAllProducts(first, last, after, before);
      if (products && pageInfo) {
        dispatch({ type: 'SET_PRODUCTS', payload: { products, pageInfo } });
      } else {
        console.warn('No products or page info returned from getAllProducts');
      }
    };
    fetchProducts();
  }, [after, before]);

  const handleNextPage = () => {
    dispatch({ type: 'HANDLE_NEXT', payload: pageInfo.endCursor });
  };

  const handlePreviousPage = () => {
    dispatch({ type: 'HANDLE_PREV', payload: pageInfo.startCursor });
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
