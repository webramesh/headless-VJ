'use client';

import { getAllRegions } from '@/src/lib/api/regionerAPI';
import Map from '../../Components/Map';
import RegionalCardItem from '../../Components/regionalCard/RegionalCardItem';
import { usePagination } from '@/src/context/PageContext';
import { useEffect, useState } from 'react';
import Pagination from '../../Components/pagination/Pagination';

const REGIONS_PER_PAGE = 15;

const RegionerContainer = () => {
  const { state, dispatch, handleNextPage, handlePreviousPage } = usePagination();
  const { pageNumber, after, before, first, last } = state;
  const [regions, setRegions] = useState([]);
  const [pageInfo, setPageInfo] = useState({});
  const [isReset, setIsReset] = useState(false);

  useEffect(() => {
    dispatch({ type: 'RESET', payload: REGIONS_PER_PAGE });
    setIsReset(true);
  }, [dispatch]);

  useEffect(() => {
    const fetchRegions = async () => {
      const { regions, pageInfo } = await getAllRegions(first, last, after, before);
      if (regions && pageInfo) {
        setRegions(regions);
        setPageInfo(pageInfo);
      } else {
        console.warn('No products or page info returned from getAllRegions');
      }
    };

    if (isReset) fetchRegions();
  }, [after, before, isReset]);

  return (
    <>
      <div className="h-[50vh] mx-4 md:mx-auto">
        <Map />
      </div>

      <div className="w-full mx-4 md:mx-auto mt-5 block md:grid md:grid-cols-2 lg:grid-cols-3  gap-4 ">
        {regions.map((region) => (
          <div key={region.id}>
            <RegionalCardItem region={region} />
          </div>
        ))}
      </div>
      {/* pagination */}
      <Pagination
        pageInfo={pageInfo}
        next={() => handleNextPage(REGIONS_PER_PAGE, pageInfo.endCursor)}
        previous={() => handlePreviousPage(REGIONS_PER_PAGE, pageInfo.startCursor)}
        page={pageNumber}
      />
    </>
  );
};

export default RegionerContainer;
