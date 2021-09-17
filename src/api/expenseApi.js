import { get, post, update, deleteR } from './baseApi';

export async function getExpensesApi(page = 1, limit, sort) {
  return get(`/expense?page=${page}&limit=${limit}&sort=${sort}`);
}

export async function createExpenseApi(expense) {
  return post('/expense', expense);
}

export async function updateExpenseApi(expenseId, data) {
  return update(`/expense/${expenseId}`, data);
}
export async function deleteExpenseApi(expenseId) {
  return deleteR(`/expense/${expenseId}`);
}
