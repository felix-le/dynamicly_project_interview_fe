import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getExpenses } from '../../reduxState/actions';
import Loading from '../../components/commons/Loading';
import ExpenseTable from './ExpenseTable';
import AddExpenseModal from './Modals/AddExpenseModal';
const showItemDefault = {
  page: 1,
  limit: 5,
  sort: 'amount',
};

const Expense = () => {
  const dispatch = useDispatch();
  const expensesState = useSelector((state) => state.expenseReducer);

  const data = expensesState.expenses;
  const [modalState, setModalState] = useState({
    isAdding: false,
    isEditing: false,
    isDeleting: false,
  });

  useEffect(() => {
    dispatch(getExpenses(showItemDefault));
  }, [dispatch]);

  function handleRemove(e, id) {
    e.preventDefault();
    console.log('🚀   handleRemove ~ id', id);
  }

  function handleEdit(e, id) {
    e.preventDefault();
    console.log('🚀  handleEdit ~ id', id);
  }

  function confirmDelete(e, id) {
    e.preventDefault();
    console.log('🚀  confirmDelete ~ id', id);
  }

  function handleAddNew() {
    setModalState({
      ...modalState,
      isAdding: true,
    });
    console.log('🚀 handleAddNew');
  }

  return (
    <div className='container'>
      <div className='table_wrapper'>
        {expensesState.isLoading && <Loading />}
        {data && data.length > 0 && (
          <ExpenseTable
            data={data}
            handleRemove={handleRemove}
            handleAddNew={handleAddNew}
            handleEdit={handleEdit}
          />
        )}
      </div>

      {modalState.isAdding && <AddExpenseModal />}
    </div>
  );
};

export default Expense;
