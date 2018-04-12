import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';

class BookSearch extends Component {

    state = {
        books: [],
        query: ''
    }

    searchBooks = (e) => {
        const query = e.target.value.trim();
        this.setState({ query: query });

        if (query) {
            BooksAPI.search(query).then((books) => {
                if (books.length > 0) {
                    this.setState({ books: books });
                }
            })
        }
    }

    render () {
        const { books, query } = this.state;

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close Search</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" onChange={this.searchBooks} value={query} />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid"></ol>
                </div>
            </div>
        )
    }
};

export default BookSearch;