import React from 'react';
import { Link, Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './App.css';
import ListBooks from './ListBooks';
import BookSearch from './BookSearch';

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  onUpdateBook = (book, shelf) => {
      BooksAPI.update(book, shelf).then((response) => {

      book.shelf = shelf
      let updatedBooks = this.state.books.filter((b) => b.id !== book.id )

      updatedBooks.push(book);
      this.setState({ books: updatedBooks })
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <ListBooks
              books={this.state.books}
              onUpdateBook={this.onUpdateBook} />
            <div className="open-search">
              <Link to="/search">Search</Link>
            </div>
          </div>
        )} />
        <Route path="/search" render={() => (
          <BookSearch />
        )} />
      </div>
    )
  }
}

export default BooksApp;
