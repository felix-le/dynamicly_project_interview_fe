import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getExpenses,
  addExpense,
  updateExpense,
  delExpense,
} from '../../reduxState/actions';
import Loading from '../../components/commons/Loading';
import ExpenseTable from './ExpenseTable';
// Modals
import AddExpenseModal from './Modals/AddExpenseModal';
import EditExpenseModal from './Modals/EditExpenseModal';
import ConfirmModal from '../../components/Modal/ConfirmModal';
const showItemDefault = {
  page: 1,
  limit: 3,
  sort: 'amount',
};

const Expense = () => {
  const dispatch = useDispatch();

  // Get state
  const expensesState = useSelector((state) => state.expenseReducer);
  const dataTable = expensesState.expenses;
  const dataTotal = expensesState.initData;

  // Set current expense
  const [currExpense, setCurrExpense] = useState({});

  // Set default Data show
  const [showItem, setShowItem] = useState(showItemDefault);

  // Set Modal Show
  const [modalState, setModalState] = useState({
    isAdding: false,
    isEditing: false,
    isDeleting: false,
  });

  // Get Data from API
  useEffect(() => {
    dispatch(getExpenses(showItem));
  }, [dispatch, showItem]);

  // Open eddit modal
  function handleEdit(e, id) {
    e.preventDefault();
    handleModalState('isEditing', true);
    const _currExpense = dataTable.find((item) => item._id === id);
    setCurrExpense(_currExpense);
  }
  function editExpenseFn(data) {
    dispatch(updateExpense(currExpense._id, data));
    setCurrExpense({});
  }

  // Open remove modal
  function handleRemove(e, id) {
    e.preventDefault();
    handleModalState('isDeleting', true);
    const _currExpense = dataTable.find((item) => item._id === id);
    setCurrExpense(_currExpense);
  }
  function confirmDelete() {
    dispatch(delExpense(currExpense._id));
    setCurrExpense({});
  }

  // Add new expense
  function handleAddNew() {
    handleModalState('isAdding', true);
  }
  function addExpenseFn(data) {
    dispatch(addExpense(data));
    handleModalState('isAdding', false);
  }

  // handle page panigation
  function handlePage(page) {
    setShowItem({
      ...showItem,
      page,
    });
  }

  const handleModalState = (modal, value) => {
    setModalState({
      ...modalState,
      [modal]: value,
    });
  };
  return (
    <div className='mt-5'>
      <div className='container'>
        <div className='table_wrapper'>
          {expensesState.isLoading && <Loading />}
          {dataTable && dataTable.length > 0 && (
            <ExpenseTable
              data={dataTable}
              handleRemove={handleRemove}
              handleAddNew={handleAddNew}
              handleEdit={handleEdit}
              dataTotal={dataTotal}
              limit={showItemDefault.limit}
              handlePage={handlePage}
            />
          )}
        </div>
        {modalState.isAdding && (
          <AddExpenseModal
            addFn={addExpenseFn}
            closeModal={() => handleModalState('isAdding', false)}
          />
        )}
        {modalState.isEditing && (
          <EditExpenseModal
            data={currExpense}
            editFn={editExpenseFn}
            closeModal={() => handleModalState('isEditing', false)}
          />
        )}
        {modalState.isDeleting && (
          <ConfirmModal
            title='Delete Expense'
            closeModal={() => handleModalState('isDeleting', false)}
            excute={confirmDelete}
          />
        )}
      </div>
    </div>
  );
};

export default Expense;
