'use client';
import { usePagination } from '@/src/context/PageContext';
import { useEffect, useState } from 'react';
import OrdilistaCard from './OrdilistaCard';
import Pagination from '../../Components/pagination/Pagination';
import { getOrdlistaByCategory } from '@/src/lib/api/ordilistaAPI';

const ORDLISTA_PER_PAGE = 15;

export default function OrdlistaByCategory({ category, totalOrdlista }) {
  const { state, dispatch } = usePagination();
  const { after, before, first, last } = state;
  const [allOrdlista, setAllOrdlista] = useState([]);
  const [pageInfo, setPageInfo] = useState({});
  const [isReset, setIsReset] = useState(false);

  useEffect(() => {
    dispatch({ type: 'RESET', payload: ORDLISTA_PER_PAGE });
    setIsReset(true);
  }, [dispatch]);

  useEffect(() => {
    const fetchOrdlista = async () => {
      dispatch({ type: 'CHANGE_LOADING', payload: true });
      const { ordlista, pageInfo } = await getOrdlistaByCategory(category, first, last, after, before);
      if (ordlista && pageInfo) {
        setAllOrdlista(ordlista);
        setPageInfo(pageInfo);
        dispatch({ type: 'CHANGE_LOADING', payload: false });
      } else {
        console.warn('No info returned from getOrdlistaByCategory');
      }
    };

    if (isReset) fetchOrdlista();
  }, [after, before, first, isReset, last, category, dispatch]);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center justify-between flex-wrap  rounded-md mb-10">
        {allOrdlista.map((ordlista) => (
          <div key={ordlista.id}>
            <OrdilistaCard ordlista={ordlista} showCategory={false} />
          </div>
        ))}
      </div>

      <Pagination pageInfo={pageInfo} pageLimit={ORDLISTA_PER_PAGE} total={totalOrdlista} />
    </>
  );
}
