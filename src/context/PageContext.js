'use client';
import { createContext, useContext, useReducer } from 'react';

const initialState = {
  pageNumber: 1,
  after: null,
  before: null,
  first: 10,
  last: 0,
};
function reducer(state, action) {
  switch (action.type) {
    case 'RESET':
      return { ...initialState, first: action.payload };

    case 'HANDLE_NEXT':
      return {
        ...state,
        first: action.payload.pageLimit,
        last: 0,
        before: null,
        after: action.payload.after,
        pageNumber: state.pageNumber + 1,
      };
    case 'HANDLE_PREV':
      return {
        ...state,
        first: 0,
        last: action.payload.pageLimit,
        before: action.payload.before,
        after: null,
        pageNumber: state.pageNumber - 1,
      };

    default:
      return state;
  }
}

const PageContext = createContext();

export const PageProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleNextPage = (pageLimit, endCursor) => {
    dispatch({ type: 'HANDLE_NEXT', payload: { pageLimit: pageLimit, after: endCursor } });
  };

  const handlePreviousPage = (pageLimit, startCursor) => {
    dispatch({ type: 'HANDLE_PREV', payload: { pageLimit: pageLimit, before: startCursor } });
  };

  return (
    <PageContext.Provider value={{ state, dispatch, handleNextPage, handlePreviousPage }}>
      {children}
    </PageContext.Provider>
  );
};

export const usePagination = () => useContext(PageContext);
