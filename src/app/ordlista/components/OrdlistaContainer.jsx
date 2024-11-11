'use client';
import { getAllOrdlista } from '@/src/lib/api/ordilistaAPI';
import OrdilistaCard from './OrdilistaCard';
import Pagination from '../../Components/pagination/Pagination';
import { usePagination } from '@/src/context/PageContext';
import { useEffect, useState } from 'react';

const ORDLISTA_PER_PAGE = 15;

export default function OrdlistaContainer() {
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
    const fetchRegions = async () => {
      setIsLoading(true);
      const { allOrdlista, pageInfo } = await getAllOrdlista(first, last, after, before);
      if (allOrdlista && pageInfo) {
        setAllOrdlista(allOrdlista);
        setPageInfo(pageInfo);
        setIsLoading(false);
      } else {
        console.warn('No products or page info returned from getAllOrdlista');
      }
    };

    if (isReset) fetchRegions();
  }, [after, before, first, isReset, last]);
  // const allOrdlista = await getAllOrdlista();

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center justify-between flex-wrap  rounded-md mb-10">
        {allOrdlista.map((ordlista) => (
          <div key={ordlista.id}>
            <OrdilistaCard ordlista={ordlista} />
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
