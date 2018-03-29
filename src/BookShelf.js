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
                        {books.length !== 0 && books.map((book) => {
                            <li>
                                <Book
                                    width={ book.width }
                                    height={ book.height }
                                    backgroundImageURL={ book.backgroundImageURL }
                                    title={ book.title }
                                    authors={ book.authors } />
                            </li>
                        })}
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookShelf;