'use client';
import { usePagination } from '@/src/context/PageContext';
import { getAllVinimportorer } from '@/src/lib/api/vinimportorAPI';
import { useEffect, useState } from 'react';
import VinimportorerCard from './VinimportorerCard';
import Pagination from '../../Components/pagination/Pagination';

const IMPORTOR_PER_PAGE = 15;

function VinImportorContainer({ totalVinImportors }) {
  const { state, dispatch } = usePagination();
  const { after, before, first, last } = state;
  const [importors, setImportors] = useState([]);
  const [pageInfo, setPageInfo] = useState({});
  const [isReset, setIsReset] = useState(false);

  useEffect(() => {
    dispatch({ type: 'RESET', payload: IMPORTOR_PER_PAGE });
    setIsReset(true);
  }, [dispatch]);

  useEffect(() => {
    const fetchImportor = async () => {
      dispatch({ type: 'CHANGE_LOADING', payload: true });

      const { importors, pageInfo } = await getAllVinimportorer(first, last, after, before);
      if (importors && pageInfo) {
        setImportors(importors);
        setPageInfo(pageInfo);
        dispatch({ type: 'CHANGE_LOADING', payload: false });
      } else {
        console.warn('No products or page info returned from getAllVinimportorer');
      }
    };

    if (isReset) fetchImportor();
  }, [after, before, first, isReset, last, dispatch]);

  return (
    <>
      <div className="w-full md:mx-auto mt-5 block md:grid md:grid-cols-2 lg:grid-cols-3  md:gap-4 ">
        {importors.map((importor) => (
          <div key={importor.id}>
            <VinimportorerCard data={importor} />
          </div>
        ))}
      </div>
      {/* pagination */}
      <Pagination pageInfo={pageInfo} pageLimit={IMPORTOR_PER_PAGE} total={totalVinImportors} />
    </>
  );
}

export default VinImportorContainer;
