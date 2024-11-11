'use client';
import { usePagination } from '@/src/context/PageContext';
import { useEffect, useState } from 'react';
import OrdilistaCard from './OrdilistaCard';
import Pagination from '../../Components/pagination/Pagination';
import { getOrdlistaByCategory } from '@/src/lib/api/ordilistaAPI';

const ORDLISTA_PER_PAGE = 15;

export default function OrdlistaByCategory({ category }) {
  const { state, dispatch, handleNextPage, handlePreviousPage } = usePagination();
  const { pageNumber, after, before, first, last } = state;
  const [allOrdlista, setAllOrdlista] = useState([]);
  const [pageInfo, setPageInfo] = useState({});
  const [isReset, setIsReset] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch({ type: 'RESET', payload: ORDLISTA_PER_PAGE });
    setIsReset(true);
  }, [dispatch]);

  useEffect(() => {
    const fetchOrdlista = async () => {
      setIsLoading(true);
      const { ordlista, pageInfo } = await getOrdlistaByCategory(category, first, last, after, before);
      if (ordlista && pageInfo) {
        setAllOrdlista(ordlista);
        setPageInfo(pageInfo);
        setIsLoading(false);
      } else {
        console.warn('No info returned from getOrdlistaByCategory');
      }
    };

    if (isReset) fetchOrdlista();
  }, [after, before, first, isReset, last, category]);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center justify-between flex-wrap  rounded-md mb-10">
        {allOrdlista.map((ordlista) => (
          <div key={ordlista.id}>
            <OrdilistaCard ordlista={ordlista} showCategory={false} />
          </div>
        ))}
      </div>
      <Pagination
        pageInfo={pageInfo}
        next={() => handleNextPage(ORDLISTA_PER_PAGE, pageInfo.endCursor)}
        previous={() => handlePreviousPage(ORDLISTA_PER_PAGE, pageInfo.startCursor)}
        loading={isLoading}
        page={pageNumber}
      />
    </>
  );
}
