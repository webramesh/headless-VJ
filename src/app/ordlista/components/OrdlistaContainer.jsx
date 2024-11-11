'use client';
import { getAllOrdlista } from '@/src/lib/api/ordilistaAPI';
import OrdilistaCard from './OrdilistaCard';
import Pagination from '../../Components/pagination/Pagination';
import { usePagination } from '@/src/context/PageContext';
import { useEffect, useState } from 'react';

const ORDLISTA_PER_PAGE = 15;

export default function OrdlistaContainer({ totalOrdlista }) {
  const { state, dispatch } = usePagination();
  const { after, before, first, last } = state;
  const [allOrdlista, setAllOrdlista] = useState([]);
  const [pageInfo, setPageInfo] = useState({});
  const [isReset, setIsReset] = useState(false);
  const totalPages = Math.ceil(totalOrdlista / ORDLISTA_PER_PAGE);

  useEffect(() => {
    dispatch({ type: 'RESET', payload: ORDLISTA_PER_PAGE });
    setIsReset(true);
  }, [dispatch]);

  useEffect(() => {
    const fetchOrdlista = async () => {
      dispatch({ type: 'CHANGE_LOADING', payload: true });

      const { allOrdlista, pageInfo } = await getAllOrdlista(first, last, after, before);
      if (allOrdlista && pageInfo) {
        setAllOrdlista(allOrdlista);
        setPageInfo(pageInfo);
        dispatch({ type: 'CHANGE_LOADING', payload: false });
      } else {
        console.warn('No products or page info returned from getAllOrdlista');
      }
    };

    if (isReset) fetchOrdlista();
  }, [after, before, first, isReset, last, dispatch]);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center justify-between flex-wrap  rounded-md mb-10">
        {allOrdlista.map((ordlista) => (
          <div key={ordlista.id}>
            <OrdilistaCard ordlista={ordlista} />
          </div>
        ))}
      </div>

      <Pagination pageInfo={pageInfo} pageLimit={ORDLISTA_PER_PAGE} totalPages={totalPages} />
    </>
  );
}
