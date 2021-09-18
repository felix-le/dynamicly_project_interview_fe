import {
  FETCH_EXPENSE_REQUEST,
  FETCH_EXPENSE_SUCCESS,
  FETCH_EXPENSE_FAILURE,
  ADD_EXPENSE_SUCCESS,
  ADD_EXPENSE_FAILURE,
  EDIT_EXPENSE_SUCCESS,
  EDIT_EXPENSE_FAILURE,
  DELETE_EXPENSE_SUCCESS,
  DELETE_EXPENSE_FAILURE,
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
      console.log('payload', payload);
      return {
        ...state,
        initData: [...state.initData, payload],
        expenses: [payload, ...state.expenses],
      };
    }
    case ADD_EXPENSE_FAILURE: {
      return {
        ...state,
        isError: true,
      };
    }
    case EDIT_EXPENSE_SUCCESS: {
      const newExpense = state.expenses.map((expense) => {
        if (expense._id === payload._id) {
          const newObj = {
            ...expense,
            ...payload,
          };
          return newObj;
        } else {
          return expense;
        }
      });

      return {
        ...state,
        expenses: [...newExpense],
      };
    }
    case EDIT_EXPENSE_FAILURE: {
      return {
        ...state,
        isError: true,
      };
    }
    case DELETE_EXPENSE_SUCCESS: {
      console.log('payload', payload);
      return {
        ...state,
        expenses: state.expenses.filter((expense) => expense._id !== payload),
      };
    }
    case DELETE_EXPENSE_FAILURE: {
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
