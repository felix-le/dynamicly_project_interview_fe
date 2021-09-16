import { get, post, update, deleteR } from './baseApi';

export async function getExpensesApi(page = 1, limit, sort) {
  return get(`/expenses?page=${page}&limit=${limit}&sort=${sort}`);
}

export async function createExpenseApi(expense) {
  return post('/expenses', expense);
}

export async function updateExpenseApi(expenseId, data) {
  return update(`/expenses/${expenseId}`, data);
}
export async function deleteExpenseApi(expenseId) {
  return deleteR(`/expenses/${expenseId}`);
}
