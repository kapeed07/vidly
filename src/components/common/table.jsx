import React from 'react';
import TableHeader from "./tableHeader"
import TableBody from "./tableBody"

const Table = (props) => {
  const {
    sortColumn,
    handleMovieSort,
    data,
    columns
  } = props;
  
  return (
    <React.Fragment>
      <TableHeader
        sortColumn={ sortColumn }
        handleMovieSort={ handleMovieSort }
        columns={ columns }>
      </TableHeader>

      <TableBody
        data={ data }
        columns={ columns }>
      </TableBody>
    </React.Fragment>
  );
}
 
export default Table;