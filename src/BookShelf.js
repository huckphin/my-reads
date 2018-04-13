import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

class BookShelf extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        onUpdateBook: PropTypes.func.isRequired
    };

    render () {
        const { books, onUpdateBook, title } = this.props;

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{ title }</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.length !== 0 && books.map((book => (
                                <li key={ book.title }>
                                    <Book
                                        book={ book }
                                        key={ book.title }
                                        onUpdateBook={ onUpdateBook }
                                    />
                                </li>
                        )))} 
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookShelf;