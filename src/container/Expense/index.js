import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getExpenses } from '../../reduxState/actions';
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

  const dataTable = expensesState.expenses.expenses;
  console.log('🚀 ~ file: index.js ~ line 18 ~ Expense ~ dataTable', dataTable);
  const dataTotal = expensesState.expenses.initData;

  const [showItem, setShowItem] = useState(showItemDefault);

  const [modalState, setModalState] = useState({
    isAdding: false,
    isEditing: false,
    isDeleting: false,
  });

  useEffect(() => {
    dispatch(getExpenses(showItem));
  }, [showItem]);

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

  function handlePage(page) {
    setShowItem({
      ...showItem,
      page,
    });
  }

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

      {modalState.isAdding && <AddExpenseModal />}
    </div>
  );
};

export default Expense;
