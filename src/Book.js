import React, { Component } from 'react';
import BookAuthor from './BookAuthor';
import BookTitle from './BookTitle';
import PropType from 'prop-types';
import BookShelfChanger from './BookShelfChanger';

class Book extends Component {
    static propTypes = {
        book: PropType.object.isRequired,
        onUpdateBook: PropType.func.isRequired
    };

    render() {
        const { book, onUpdateBook } = this.props;

        return (
            <div className="book">
                <div className="book-top">
                    <div
                        className="book-cover"
                        style={{ backgroundImage: `url(${book.imageLinks ? book.imageLinks.smallThumbnail : null})` }}>
                    </div>
                    <BookShelfChanger
                        book={ book }
                        onUpdateBook={ onUpdateBook }
                        key={ book.id }
                    />
                </div>
                <BookAuthor authors={ book.authors } />
                <BookTitle title={ book.title } />
            </div>
        );
    };
}

export default Book