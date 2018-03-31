import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BookShelf from './BookShelf';

class ListBooks extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired
    }

    render () {
        const { books } = this.props;

        const currentlyReading = books.filter((book) => book.shelf === 'currentlyReading');
        const read = books.filter((book) => book.shelf === 'read');
        const wantToRead = books.filter((book) => book.shelf === 'wantToRead');

        console.log(currentlyReading);

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
                        />
                        <BookShelf
                            title="Want to Read"
                            key="Want to Read"
                            books={[
                                {
                                    authors: [ "David McCullugh" ],
                                    imageLinks: {
                                        smallThumbnail: "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
                                        thumbnail: "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
                                    },
                                    title: "1776",
                                    key: "1776"
                                },
                                {
                                    authors: [ "J.K. Rowling" ],
                                    imageLinks: {
                                        smallThumbnail: "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
                                        thumbnail: "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
                                    },
                                    title: "Harry Potter and the Sorcerer's Stone",
                                    key: "Harry Potter and the Sorcerer's Stone"
                                }
                            ]}
                        />
                        <BookShelf
                            title="Read"
                            key="Read"
                            books={[
                                {
                                    authors: [ "J.R.R. Tolkien" ],
                                    imageLinks: {
                                        smallThumbnail: "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
                                        thumbnail: "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
                                    },
                                    title: "The Hobbit",
                                    key: "The Hobbit"
                                },
                                {
                                    authors: [ "Seuss" ],
                                    imageLinks: {
                                        smallThumbnail: "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
                                        thumbnail: "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
                                    },
                                    title: "Oh, the Places You'll Go!",
                                    key: "Oh, the Places You'll Go!"
                                },
                                {
                                    authors: [ "Mark Twain" ],
                                    imageLinks: {
                                        smallThumbnail: "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
                                        thumbnail: "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
                                    },
                                    title: "The Adventures of Tom Sawyer",
                                    key: "The Adventures of Tom Sawyer"
                                }
                            ]}
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