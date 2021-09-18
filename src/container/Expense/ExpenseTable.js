import DataTable from '../../components/DataTable';
import { sumAllElementsByNameSingleLine } from '../../helpers/sumTotal';
import Pagination from '../../components/Pagination';

const ExpenseTable = ({
  data,
  handleEdit,
  handleRemove,
  handleAddNew,
  dataTotal,
  limit,
  handlePage,
}) => {
  const columns = [
    { dataField: 'description', text: 'Description', sort: true },
    { dataField: 'amount', text: 'Amount', sort: true },
    { dataField: 'taxes', text: 'Taxes (15%)', sort: true },
    { dataField: 'date', text: 'Date', sort: true },
    { dataField: 'actions', text: '' },
  ];
  const tableData = [];
  data &&
    data.length > 0 &&
    data.forEach((item) => {
      const itemDate = item.createdAt.split('T')[0];
      const itemTime = item.createdAt.split('T')[1].split('.')[0];
      const newObj = {
        ...item,
        date: itemDate + ' at ' + itemTime,
        taxes: (item.amount * 0.15).toFixed(2),
        actions: (
          <div className='btn-wrapper btn-table d-flex flex-md-row flex-column'>
            <button
              className='btn btn-warning'
              onClick={(e) => {
                handleEdit(e, item._id);
              }}
            >
              Edit
            </button>
            <button
              className='btn  btn-danger'
              onClick={(e) => {
                handleRemove(e, item._id);
              }}
            >
              Delete
            </button>
          </div>
        ),
      };
      tableData.push(newObj);
    });
  const subTotal = sumAllElementsByNameSingleLine(dataTotal, 'amount');
  const total = subTotal + subTotal * 0.15;
  const dataTotalLength = dataTotal.length;
  return (
    <>
      <DataTable
        tableData={tableData}
        columns={columns}
        title='Expense tracker'
        handleAddNew={handleAddNew}
        btnName='Add new expense'
        subTotal={subTotal}
        total={total}
      />
      <Pagination
        totalItems={dataTotalLength}
        limit={limit}
        getPage={handlePage}
      />
    </>
  );
};

export default ExpenseTable;
