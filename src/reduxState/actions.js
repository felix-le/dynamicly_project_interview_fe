import * as actionsTypes from './types';
import * as expenseApi from '../api/expenseApi';

export const expenseList = (payload) => ({
  type: actionsTypes.FETCH_EXPENSE_SUCCESS,
  payload,
});

export const getExpenses =
  ({ page, limit, sort = '' }) =>
  async (dispatch) => {
    dispatch({ type: actionsTypes.FETCH_EXPENSE_REQUEST });
    try {
      const expenses = await expenseApi.getExpensesApi(page, limit, sort);

      const { data } = expenses;

      dispatch(expenseList(data));
    } catch (error) {
      dispatch({ type: actionsTypes.FETCH_EXPENSE_FAILURE, error });
    }
  };

export const addExpense = (dataInput) => async (dispatch) => {
  try {
    const res = await expenseApi.createExpenseApi(dataInput);
    const { data } = res;
    dispatch({
      type: actionsTypes.ADD_EXPENSE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({ type: actionsTypes.ADD_EXPENSE_FAILURE, error });
  }
};
