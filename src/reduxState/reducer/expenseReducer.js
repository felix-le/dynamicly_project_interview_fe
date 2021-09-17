import {
  FETCH_EXPENSE_REQUEST,
  FETCH_EXPENSE_SUCCESS,
  FETCH_EXPENSE_FAILURE,
} from '../types';

const initialState = {
  expenses: [],
  isLoading: false,
  isError: false,
  length: 0,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_EXPENSE_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case FETCH_EXPENSE_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        expenses: payload,
        length: payload.length,
      };
    }
    case FETCH_EXPENSE_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
