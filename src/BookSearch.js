import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as BooksAPI from './BooksAPI';
import Book from './Book';

class BookSearch extends Component {
    static propTypes = {
        onUpdateBook: PropTypes.func.isRequired
    }

    state = {
        booksFound: [],
        query: '',
        queryError: ''
    }

    searchBooks = (e) => {
        const query = e.target.value.trim();
        this.setState({ query: query });

        if (BooksAPI.validSearchTermsToLowerCase.indexOf(query.toLowerCase()) !== -1) {
            BooksAPI.search(query).then((books) => {
                if ("error" in books) {
                    this.setState({ queryError: books.error, booksFound: [] });
                }
                if (books.length > 0) {
                    this.setState({ booksFound: books, queryError: '' });
                }
            })
        } else {
            this.setState({ queryError: `invalid search term`, booksFound: [] });
        }
    }

    render () {
        const { booksFound, query, queryError } = this.state;
        const { onUpdateBook } = this.props;

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close Search</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" onChange={this.searchBooks} value={query} />
                    </div>
                </div>
                <div className="search-books-results">
                    {queryError && (
                        <div>
                            <h3>Error querying for books: {queryError}</h3>
                        </div>
                    )}
                    {booksFound.length > 0 && (
                        <div>
                            <h3>Now showing {booksFound.length} new books</h3>
                        </div>
                    )}
                    <ol className="books-grid">
                        {booksFound.map((book) => (
                            <li key={book.id}>
                                <Book
                                    book={ book }
                                    key={ book.title }
                                    onUpdateBook={ onUpdateBook }
                                />
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
};

export default BookSearch;