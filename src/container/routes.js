import { lazy } from 'react';
const HomePage = lazy(() => import('./Home'));
const Expense = lazy(() => import('./Expense'));

const routes = [
  {
    path: '/home',
    exact: true,
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/expense',
    exact: true,
    name: 'expense',
    component: Expense,
  },
];
export default routes;
