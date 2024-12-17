'use client';

import { getAllRegions } from '@/src/lib/api/regionerAPI';
// import Map from '../../Components/Map';
import RegionalCardItem from '../../Components/regionalCard/RegionalCardItem';
import { usePagination } from '@/src/context/PageContext';
import { useEffect, useState } from 'react';
import Pagination from '../../Components/pagination/Pagination';

const REGIONS_PER_PAGE = 12;

const RegionerContainer = ({ totalRegioners }) => {
  const { state, dispatch } = usePagination();
  const { after, before, first, last } = state;
  const [regions, setRegions] = useState([]);
  const [pageInfo, setPageInfo] = useState({});
  const [isReset, setIsReset] = useState(false);

  useEffect(() => {
    dispatch({ type: 'RESET', payload: REGIONS_PER_PAGE });
    setIsReset(true);
  }, [dispatch]);

  useEffect(() => {
    const fetchRegions = async () => {
      dispatch({ type: 'CHANGE_LOADING', payload: true });

      const { regions, pageInfo } = await getAllRegions(first, last, after, before);
      if (regions && pageInfo) {
        setRegions(regions);
        setPageInfo(pageInfo);
        dispatch({ type: 'CHANGE_LOADING', payload: false });
      } else {
        console.warn('No products or page info returned from getAllRegions');
      }
    };

    if (isReset) fetchRegions();
  }, [after, before, first, isReset, last, dispatch]);

  return (
    <>
      {/* <div className="h-[50vh] px-2 md:px-4">
        <Map />
      </div> */}

      <div className=" w-full grid container mx-auto justify-between gap-6  grid-cols-1 md:grid-cols-2 lg:grid-cols-4   mt-6">
        {/* <div className="w-full mx-4 md:mx-auto mt-5 block md:grid md:grid-cols-2 lg:grid-cols-3  gap-4 "> */}
        {regions.map((region) => (
          <div key={region.id}>
            <RegionalCardItem region={region} />
          </div>
        ))}
      </div>
      {/* pagination */}
      <Pagination pageInfo={pageInfo} pageLimit={REGIONS_PER_PAGE} total={totalRegioners} />
    </>
  );
};

export default RegionerContainer;
