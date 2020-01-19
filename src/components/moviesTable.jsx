import React, { Component } from 'react';

import {
  Button,
  Tag
} from 'antd';

import Like from "./common/like"
import Table from "./common/table"


class MoviesTable extends Component {
  state = {  }

  render() {
    
    const columns = [
      { path: "title", label: "Title" },
      { path: "genre.name", label: "Genre" },
      { path: "numberInStock", content: movie => (<Tag color="geekblue">{ movie.numberInStock }</Tag>) },
      { path: "dailyRentalRate", label: "Rate "},
      { key: "like", content: movie => (<Like liked={ movie.liked } toggleLike={ () => this.props.toggleLike(movie) }></Like>) },
      { key: "delete", content: movie => (<Button type="danger" onClick={ () => this.props.handleMovieDelete(movie._id) }>Delete</Button>) }
    ];
    
    const {
      movies,
      handleMovieSort,
      sortColumn
    } = this.props;
    
    return (
      <table>
        <Table
          sortColumn={ sortColumn }
          handleMovieSort={ handleMovieSort }
          data={ movies }
          columns={ columns }>
        </Table>
      </table>
    );
  }
}
 
export default MoviesTable;