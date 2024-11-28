'use client';
import { createContext, useContext, useReducer } from 'react';

const initialState = {
  pageNumber: 1,
  after: null,
  before: null,
  first: 0,
  last: 0,
  loading: false,
};
function reducer(state, action) {
  switch (action.type) {
    case 'CHANGE_PAGE':
      return { ...state, pageNumber: action.payload };
    case 'CHANGE_LOADING':
      return { ...state, loading: action.payload };
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
    case 'HANDLE_LAST':
      return {
        ...initialState,
        last: action.payload.pageLimit,
        pageNumber: action.payload.lastPage,
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

  const handleFirstPage = (pageLimit) => {
    dispatch({ type: 'RESET', payload: pageLimit });
  };

  const handleLastPage = (pageLimit, lastPage) => {
    dispatch({ type: 'HANDLE_LAST', payload: { pageLimit: pageLimit, lastPage: lastPage } });
  };
  return (
    <PageContext.Provider
      value={{ state, dispatch, handleNextPage, handlePreviousPage, handleFirstPage, handleLastPage }}
    >
      {children}
    </PageContext.Provider>
  );
};

export const usePagination = () => useContext(PageContext);
