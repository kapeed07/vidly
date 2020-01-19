import React, { Component } from 'react';

import {
  Icon
} from "antd";

class TableHeader extends Component {
  raiseSort = (path) => {
    let sortColumn = {...this.props.sortColumn}
    if(sortColumn.path === path) {
      sortColumn.order = sortColumn.order === 'asc' ? 'desc' : 'asc';
    } else {
      sortColumn.path = path;
      sortColumn.order = 'asc';
    }
    this.props.handleMovieSort(sortColumn)
  }

  render() {

    const {
      columns,
      sortColumn
    } = this.props;

    const order = sortColumn.order === "asc" ? "sort-ascending" : "sort-descending";

    return (
      <thead>
        <tr>
          { columns.map(column => (
            <th
              key={ column.path || column.key }
              onClick={ () => this.raiseSort(column.path) }>
                { column.label }
                <Icon type={ order } />
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}
 
export default TableHeader;