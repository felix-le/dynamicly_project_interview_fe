import * as actionsTypes from './types';
import * as expenseApi from '../api/expenseApi';
import { toast } from 'react-toastify';
export const expenseList = (payload) => ({
  type: actionsTypes.FETCH_EXPENSE_SUCCESS,
  payload,
});

export const getExpenses =
  ({ page, limit, sort = '' }) =>
  async (dispatch) => {
    dispatch({ type: actionsTypes.FETCH_EXPENSE_REQUEST });
    try {
      const res = await expenseApi.getExpensesApi(page, limit, sort);

      const { data } = res;
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
    toast.success(res.message);
  } catch (error) {
    dispatch({ type: actionsTypes.ADD_EXPENSE_FAILURE, error });
  }
};

export const updateExpense = (expenseId, dataInput) => async (dispatch) => {
  try {
    const res = await expenseApi.updateExpenseApi(expenseId, dataInput);
    const newObj = {
      ...res.data,
      ...dataInput,
    };
    dispatch({
      type: actionsTypes.EDIT_EXPENSE_SUCCESS,
      payload: newObj,
    });
    toast.success(res.message);
  } catch (error) {
    dispatch({ type: actionsTypes.EDIT_EXPENSE_FAILURE, error });
  }
};

export const delExpense = (expenseId) => async (dispatch) => {
  try {
    const res = await expenseApi.deleteExpenseApi(expenseId);
    dispatch({
      type: actionsTypes.DELETE_EXPENSE_SUCCESS,
      payload: expenseId,
    });
    toast.success(res.message);
  } catch (error) {
    dispatch({ type: actionsTypes.DELETE_EXPENSE_FAILURE, error });
  }
};
