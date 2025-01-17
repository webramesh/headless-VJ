'use client';

import { getAllLanders } from '@/src/lib/api/landerAPI';
import LanderCardItem from './LanderCardItem';
import { usePagination } from '@/src/context/PageContext';
import { useEffect, useState } from 'react';
import Pagination from '../../Components/pagination/Pagination';

const LANDERS_PER_PAGE = 15;

const LanderContainer = ({ totalLanders }) => {
  const { state, dispatch } = usePagination();
  const { after, before, first, last } = state;
  const [landers, setLanders] = useState([]);
  const [pageInfo, setPageInfo] = useState({});
  const [isReset, setIsReset] = useState(false);

  useEffect(() => {
    dispatch({ type: 'RESET', payload: LANDERS_PER_PAGE });
    setIsReset(true);
  }, [dispatch]);

  useEffect(() => {
    const fetchLanders = async () => {
      dispatch({ type: 'CHANGE_LOADING', payload: true });

      const { landers, pageInfo } = await getAllLanders(first, last, after, before);
      if (landers && pageInfo) {
        setLanders(landers);
        setPageInfo(pageInfo);
        dispatch({ type: 'CHANGE_LOADING', payload: false });
      } else {
        console.warn('No landers or page info returned from getAllLanders');
      }
    };

    if (isReset) fetchLanders();
  }, [after, before, first, isReset, last, dispatch]);

  return (
    <>
      <div className=" w-full grid container mx-auto justify-between gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6">
        {landers.map((lander) => (
          <div key={lander.id}>
            <LanderCardItem lander={lander} />
          </div>
        ))}
      </div>
      {/* pagination */}
      <Pagination pageInfo={pageInfo} pageLimit={LANDERS_PER_PAGE} total={totalLanders} />
    </>
  );
};

export default LanderContainer;
