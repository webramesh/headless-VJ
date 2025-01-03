'use client';
import { createContext, useContext, useMemo, useReducer } from 'react';

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const initialState = useMemo(
    () => ({
      storlek: [0, 0],
      pris: [0, 0],
      typ: null,
      sortiment: null,
      ekologisk: false,
      hallbar: false,
    }),
    []
  );

  function reducer(state, action) {
    switch (action.type) {
      case 'RESET': {
        const { minVolume, maxVolume } = action.payload.volumeRange;
        const { minPrice, maxPrice } = action.payload.priceRange;
        return { ...initialState, pris: [minPrice, maxPrice], storlek: [minVolume, maxVolume] };
      }
      case 'UPDATE_RANGE': {
        const { rangeKey, index, value, maxValue } = action.payload;
        const updatedRange = [...state[rangeKey]];
        updatedRange[index] = Math.max(0, Math.min(maxValue, value));

        return {
          ...state,
          [rangeKey]: updatedRange.sort((a, b) => a - b),
        };
      }
      case 'SET_STORLEK':
        return { ...state, storlek: [action.payload.minVolume, action.payload.maxVolume] };
      case 'SET_PRIS':
        return { ...state, pris: [action.payload.minPrice, action.payload.maxPrice] };
      case 'SET_TYP':
        return { ...state, typ: action.payload };
      case 'SET_SORTIMENT':
        return { ...state, sortiment: action.payload };
      case 'SET_EKOLOGISK':
        return { ...state, ekologisk: action.payload };
      case 'SET_HALLBAR':
        return { ...state, hallbar: action.payload };
      case 'INITIAL_STATE': {
        const {
          'max_container-volume': maxVolume,
          'min_container-volume': minVolume,
          max_price: maxPrice,
          min_price: minPrice,
          'container-type': type,
          sortiment: wineSortiment,
          'wine-organic': isOrganic,
          sustainable,
        } = action.payload;

        const newStorlek = [
          minVolume !== undefined ? minVolume : state.storlek[0],
          maxVolume !== undefined ? maxVolume : state.storlek[1],
        ];

        const newPris = [
          minPrice !== undefined ? minPrice : state.pris[0],
          maxPrice !== undefined ? maxPrice : state.pris[1],
        ];

        return {
          ...state,
          storlek: newStorlek,
          pris: newPris,
          typ: type !== undefined ? type : state.typ,
          sortiment: wineSortiment !== undefined ? wineSortiment : state.sortiment,
          ekologisk: isOrganic !== undefined ? isOrganic : state.ekologisk,
          hallbar: sustainable !== undefined ? sustainable : state.hallbar,
        };
      }
      case 'RESET_ONE': {
        const key = inputToKey(action.payload);
        return { ...state, [key]: initialState[key] };
      }
      default:
        return state;
    }
  }

  function inputToKey(input) {
    switch (input) {
      case 'container-type':
        return 'typ';
      case 'wine-organic':
        return 'ekologisk';
      case 'sortiment':
        return 'sortiment';
      case 'sustainable':
        return 'hallbar';
      default:
        return input;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return <FilterContext.Provider value={{ state, dispatch }}>{children}</FilterContext.Provider>;
};

export const useFilters = () => useContext(FilterContext);
