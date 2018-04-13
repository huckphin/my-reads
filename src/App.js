import React from 'react';
import { Link, Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './App.css';
import ListBooks from './ListBooks';
import BookSearch from './BookSearch';

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    })
  }

  onUpdateBook = (book, shelf) => {
    BooksAPI.update(book, shelf).then((response) => {

      book.shelf = shelf;
      let updatedBooks = this.state.books.filter((b) => b.id !== book.id );

      updatedBooks.push(book);
      this.setState({ books: updatedBooks });
    })
  }

  render() {
    const { books } = this.state;

    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <ListBooks
              books={ books }
              onUpdateBook={ this.onUpdateBook } />
            <div className="open-search">
              <Link to="/search">Search</Link>
            </div>
          </div>
        )} />
        <Route path="/search" render={({ history }) => (
          <BookSearch
            books={ books }
            onUpdateBook={ this.onUpdateBook } />
        )} />
      </div>
    )
  }
}

export default BooksApp;
