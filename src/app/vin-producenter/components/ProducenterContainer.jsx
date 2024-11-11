'use client';
import { getAllProducenter } from '@/src/lib/api/producenterAPI';
// import Map from '../../Components/Map';
import Pagination from '../../Components/pagination/Pagination';
import ProducenterCard from '../../Components/producenterCard/ProducenterCard';
import { usePagination } from '@/src/context/PageContext';
import { useEffect, useState } from 'react';

const PRODUCENTER_PER_PAGE = 15;

const ProducenterContainer = ({ totalProducenters }) => {
  const { state, dispatch } = usePagination();
  const { after, before, first, last } = state;
  const [producenter, setProducenter] = useState([]);
  const [pageInfo, setPageInfo] = useState({});
  const [isReset, setIsReset] = useState(false);
  const totalPages = Math.ceil(totalProducenters / PRODUCENTER_PER_PAGE);

  useEffect(() => {
    dispatch({ type: 'RESET', payload: PRODUCENTER_PER_PAGE });
    setIsReset(true);
  }, [dispatch]);

  useEffect(() => {
    const fetchProducenters = async () => {
      dispatch({ type: 'CHANGE_LOADING', payload: true });
      const { producenters, pageInfo } = await getAllProducenter(first, last, after, before);
      if (producenters && pageInfo) {
        setProducenter(producenters);
        setPageInfo(pageInfo);
        dispatch({ type: 'CHANGE_LOADING', payload: false });
      } else {
        console.warn('No products or page info returned from getAllProducenters');
      }
    };

    if (isReset) fetchProducenters();
  }, [after, before, first, isReset, last, dispatch]);

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

      <Pagination pageInfo={pageInfo} pageLimit={PRODUCENTER_PER_PAGE} totalPages={totalPages} />
    </>
  );
};

export default ProducenterContainer;
