import {
  FETCH_EXPENSE_REQUEST,
  FETCH_EXPENSE_SUCCESS,
  FETCH_EXPENSE_FAILURE,
  ADD_EXPENSE_SUCCESS,
  ADD_EXPENSE_FAILURE,
} from '../types';

const initialState = {
  expenses: [],
  isLoading: false,
  isError: false,
  initData: [],
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
        expenses: payload.expenses,
        initData: payload.initData,
      };
    }
    case FETCH_EXPENSE_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    case ADD_EXPENSE_SUCCESS: {
      return {
        ...state,
        initData: [...state.initData, payload],
      };
    }
    case ADD_EXPENSE_FAILURE: {
      return {
        ...state,
        isError: true,
      };
    }

    default: {
      return state;
    }
  }
};

export default reducer;
