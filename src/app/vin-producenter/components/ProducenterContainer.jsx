'use client';
import { getAllProducenter } from '@/src/lib/api/producenterAPI';
// import Map from '../../Components/Map';
import Pagination from '../../Components/pagination/Pagination';
import ProducenterCard from '../../Components/producenterCard/ProducenterCard';
import { usePagination } from '@/src/context/PageContext';
import { useEffect, useState } from 'react';

const PRODUCENTER_PER_PAGE = 15;

const ProducenterContainer = () => {
  const { state, dispatch, handleNextPage, handlePreviousPage } = usePagination();
  const { pageNumber, after, before, first, last } = state;
  const [producenter, setProducenter] = useState([]);
  const [pageInfo, setPageInfo] = useState({});
  const [isReset, setIsReset] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch({ type: 'RESET', payload: PRODUCENTER_PER_PAGE });
    setIsReset(true);
  }, [dispatch]);

  useEffect(() => {
    const fetchProducenters = async () => {
      setIsLoading(true);
      const { producenters, pageInfo } = await getAllProducenter(first, last, after, before);
      if (producenters && pageInfo) {
        setProducenter(producenters);
        setPageInfo(pageInfo);
        setIsLoading(false);
      } else {
        console.warn('No products or page info returned from getAllProducenters');
      }
    };

    if (isReset) fetchProducenters();
  }, [after, before, first, isReset, last]);

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
      <Pagination
        pageInfo={pageInfo}
        next={() => handleNextPage(PRODUCENTER_PER_PAGE, pageInfo.endCursor)}
        previous={() => handlePreviousPage(PRODUCENTER_PER_PAGE, pageInfo.startCursor)}
        page={pageNumber}
        loading={isLoading}
      />
    </>
  );
};

export default ProducenterContainer;
