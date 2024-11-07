'use client';
import { getAllProducenter } from '@/src/lib/api/producenterAPI';
import Map from '../../Components/Map';
import Pagination from '../../Components/pagination/Pagination';
import ProducenterCard from '../../Components/producenterCard/ProducenterCard';
import { usePagination } from '@/src/context/PageContext';
import { useEffect, useState } from 'react';

const PRODUCENTER_PER_PAGE = 15;

const ProducenterContainer = () => {
  const { state, dispatch } = usePagination();
  const { pageNumber, after, before, first, last } = state;
  const [producenter, setProducenter] = useState([]);
  const [pageInfo, setPageInfo] = useState({});
  const [isReset, setIsReset] = useState(false);

  useEffect(() => {
    dispatch({ type: 'RESET', payload: PRODUCENTER_PER_PAGE });
    setIsReset(true);
  }, [dispatch]);

  useEffect(() => {
    const fetchProducenters = async () => {
      const { producenters, pageInfo } = await getAllProducenter(first, last, after, before);
      if (producenter && pageInfo) {
        setProducenter(producenters);
        setPageInfo(pageInfo);
      } else {
        console.warn('No products or page info returned from getAllProducts');
      }
    };

    if (isReset) fetchProducenters();
  }, [after, before, isReset]);

  const handleNextPage = () => {
    dispatch({ type: 'HANDLE_NEXT', payload: { pageLimit: PRODUCENTER_PER_PAGE, after: pageInfo.endCursor } });
  };

  const handlePreviousPage = () => {
    dispatch({ type: 'HANDLE_PREV', payload: { pageLimit: PRODUCENTER_PER_PAGE, before: pageInfo.startCursor } });
  };

  return (
    <>
      {/* <div className="h-96">
        <Map />
      </div> */}
      <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {producenter.map((producenter) => (
          <div key={producenter.id}>
            <ProducenterCard producenter={producenter} />
          </div>
        ))}
      </div>
      {/* pagination */}
      <Pagination pageInfo={pageInfo} next={handleNextPage} previous={handlePreviousPage} page={pageNumber} />
    </>
  );
};

export default ProducenterContainer;
