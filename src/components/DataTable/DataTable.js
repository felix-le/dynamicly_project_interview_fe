import React, { memo } from 'react';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';

import BootstrapTable from 'react-bootstrap-table-next';

function DataTable({
  tableData,
  columns,
  title,
  handleAddNew,
  btnName,
  total,
  subTotal,
}) {
  return (
    <>
      <h1 className='table-title'>{title}</h1>
      <div className='d-flex justify-content-between mt-2'>
        <div className='total_wrapper '>
          <p>{`The sub-total of expenses is ${subTotal} $`}</p>
          <p>{`The total with taxes is ${total} $`}</p>
        </div>
        <div className='addTableItem'>
          <button className='btn btn-success btn-add' onClick={handleAddNew}>
            {btnName}
          </button>
        </div>
      </div>

      <BootstrapTable
        bordered={false}
        bootstrap4
        keyField='_id'
        columns={columns}
        data={tableData}
        headerClasses='header-class'
      />
    </>
  );
}

export default memo(DataTable);
