import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BookShelf from './BookShelf';

class ListBooks extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        onUpdateBook: PropTypes.func.isRequired
    }

    render () {
        const { books, onUpdateBook } = this.props;

        const currentlyReading = books.filter((book) => book.shelf === 'currentlyReading');
        const read = books.filter((book) => book.shelf === 'read');
        const wantToRead = books.filter((book) => book.shelf === 'wantToRead');

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <BookShelf
                            title="Currently Reading"
                            key="Currently Reading"
                            books={currentlyReading}
                            onUpdateBook={onUpdateBook}
                        />
                        <BookShelf
                            title="Want to Read"
                            key="Want to Read"
                            books={wantToRead}
                            onUpdateBook={onUpdateBook}
                        />
                        <BookShelf
                            title="Read"
                            key="Read"
                            books={read}
                            onUpdateBook={onUpdateBook}
                        />
                    </div>
                </div> {/* list-books-content */}
                <div className="open-search">
                    <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
                </div>
            </div>
        )
    }
}

export default ListBooks;