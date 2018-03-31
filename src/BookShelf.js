import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

class BookShelf extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        books: PropTypes.array.isRequired
    };

    render () {
        const { title, books } = this.props;

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{ title }</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.length !== 0 && books.map((book => (
                                <li key={ book.title }>
                                    <Book
                                        authors={ book.authors }
                                        imageLinks={ book.imageLinks }
                                        title={ book.title }
                                        key={ book.title } />
                                </li>
                        )))} 
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookShelf;