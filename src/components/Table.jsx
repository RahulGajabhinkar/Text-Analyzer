import React from 'react';
import DataTable from 'react-data-table-component';

class Table extends React.Component {
  render() {
    const data = [
      { id: 1, name: 'John', age: 30 },
      { id: 2, name: 'Jane', age: 25 },
      { id: 3, name: 'Smith', age: 35 }
    ];

    const columns = [
      { name: 'ID', selector: 'id', sortable: true },
      { name: 'Name', selector: 'name', sortable: true },
      { name: 'Age', selector: 'age', sortable: true }
    ];

    return (
      <div className="Table">
        <h2>Sample DataTable</h2>
        <DataTable
          title="Users"
          columns={columns}
          data={data}
        />
      </div>
    );
  }
}

export default Table;
