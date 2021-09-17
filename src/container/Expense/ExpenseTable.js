import DataTable from '../../components/DataTable';
import { sumAllElementsByNameSingleLine } from '../../helpers/sumTotal';
const ExpenseTable = ({ data, handleEdit, handleRemove, handleAddNew }) => {
  const columns = [
    { dataField: 'description', text: 'description', sort: true },
    { dataField: 'amount', text: 'Amount', sort: true },
    { dataField: 'taxes', text: 'Taxes (15%)', sort: true },
    { dataField: 'date', text: 'Date', sort: true },
    { dataField: 'actions', text: 'Actions' },
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
              className='btn btn-default btn-primary'
              onClick={(e) => {
                handleEdit(e, item._id);
              }}
            >
              Edit
            </button>
            <button
              className='btn btn-default btn-danger'
              onClick={(e) => {
                handleRemove(e, item._id);
              }}
            >
              Remove
            </button>
          </div>
        ),
      };
      tableData.push(newObj);
    });
  const subTotal = sumAllElementsByNameSingleLine(data, 'amount');
  const total = subTotal + subTotal * 0.15;

  return (
    <DataTable
      tableData={tableData}
      columns={columns}
      title='Expense tracker'
      handleAddNew={handleAddNew}
      btnName='Add A New Page'
      subTotal={subTotal}
      total={total}
    />
  );
};

export default ExpenseTable;