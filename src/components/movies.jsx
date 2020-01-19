import React, { Component } from 'react';
import _ from 'loadsh';

import {
  Pagination,
  List
} from 'antd';

import MoviesTable from "./moviesTable"
import { paginate } from "./../utils"
import { getMovies } from "../services/fakeMovieService"
import { getGenres } from "../services/fakeGenreService"

class Movies extends Component {
  state = { 
    movies: [],
    genres: [],
    pageSize: 3,
    currentPage: 1,
    sortColumn: { path: 'title', order: 'asc' },
    selectedGenre: ""
  }

  componentDidMount() {
    let genres = [{ _id: "", name: "All Genres" } , ...getGenres()]
    this.setState({ movies: getMovies(), genres })
  }
  
  toggleLike = (movie) => {
    let movies = [...this.state.movies]
    let index = movies.indexOf(movie);
    movies[index].liked = !movies[index].liked;    
    this.setState({ movies })
  }

  handleMovieSort = (sortColumn) => {
    this.setState({ sortColumn });
  }

  handleGenreSelect = (genre) => {
    const selectedGenre = genre;
    this.setState({ selectedGenre, currentPage: 1 })
  }

  handlePageChange = (page) => {
    this.setState({ currentPage: page })
  }

  handleMovieDelete = (id) => {
    let movies = this.state.movies.filter(movie => movie._id !== id);
    this.setState({ movies })
  }

  getPagedData = () => {
    const {
      pageSize,
      sortColumn,
      currentPage,
      selectedGenre,
      movies: allMovies
    } = this.state;

    const filteredMovies = selectedGenre._id
                            ? allMovies.filter(movie => movie.genre._id === selectedGenre._id)
                            : allMovies;
    
    const sortedMovies = _.orderBy(filteredMovies, [sortColumn.path], [sortColumn.order]);
    
    const data = paginate(sortedMovies, currentPage, pageSize);
    const totalCount =filteredMovies.length;

    return {
      totalCount,
      data
    };
  }

  render() {
    const {
      genres,
      sortColumn
    } = this.state;
    
    const { totalCount, data: movies} = this.getPagedData();
    
    if(totalCount === 0)
      return <p>There are no movies in the database.</p>

    return (
      <React.Fragment>
      <p>Showing { totalCount } movies in the database.</p>
      <List
        size="small"
        bordered
        dataSource={genres}
        renderItem={item => (
          <List.Item onClick={ () => this.handleGenreSelect(item) }>{ item.name }</List.Item>
        )}>
      </List>
      <MoviesTable
        movies={ movies }
        toggleLike={ this.toggleLike }
        sortColumn={ sortColumn }
        handleMovieSort={ this.handleMovieSort }
        handleMovieDelete={ this.handleMovieDelete }>
      </MoviesTable>
      <Pagination
        pageSize={ this.state.pageSize }
        defaultCurrent={1}
        hideOnSinglePage={ true }
        onChange={ this.handlePageChange }
        total={ totalCount }>
      </Pagination>
      </React.Fragment>
    );
  }
}
 
export default Movies;