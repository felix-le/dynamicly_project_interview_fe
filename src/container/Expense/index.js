import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getExpenses, addExpense } from '../../reduxState/actions';
import Loading from '../../components/commons/Loading';
import ExpenseTable from './ExpenseTable';
import AddExpenseModal from './Modals/AddExpenseModal';
const showItemDefault = {
  page: 1,
  limit: 3,
  sort: 'amount',
};

const Expense = () => {
  const dispatch = useDispatch();
  const expensesState = useSelector((state) => state.expenseReducer);

  const dataTable = expensesState.expenses;

  const dataTotal = expensesState.initData;

  const [showItem, setShowItem] = useState(showItemDefault);

  const [modalState, setModalState] = useState({
    isAdding: false,
    isEditing: false,
    isDeleting: false,
  });

  const [isRender, setIsRender] = useState(false);

  useEffect(() => {
    dispatch(getExpenses(showItem));
  }, [dispatch, showItem, isRender]);

  function handleRemove(e, id) {
    e.preventDefault();
    console.log('🚀   handleRemove ~ id', id);
  }

  function handleEdit(e, id) {
    e.preventDefault();
    console.log('🚀  handleEdit ~ id', id);
  }

  // function confirmDelete(e, id) {
  //   e.preventDefault();
  //   console.log('🚀  confirmDelete ~ id', id);
  // }

  function handleAddNew() {
    handleModalState('isAdding', true);
  }

  function handlePage(page) {
    setShowItem({
      ...showItem,
      page,
    });
  }
  function addExpenseFn(data) {
    dispatch(addExpense(data));
    handleModalState('isAdding', false);
    setIsRender(!isRender);
  }

  const handleModalState = (modal, value) => {
    setModalState({
      ...modalState,
      [modal]: value,
    });
  };
  return (
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
    </div>
  );
};

export default Expense;
