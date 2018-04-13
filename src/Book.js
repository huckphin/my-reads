import React, { Component } from 'react';
import BookAuthor from './BookAuthor';
import BookTitle from './BookTitle';
import PropType from 'prop-types';
import BookShelfChanger from './BookShelfChanger';

class Book extends Component {
    static propTypes = {
        authors: PropType.array.isRequired,
        book: PropType.object.isRequired,
        id: PropType.string.isRequired,
        onUpdateBook: PropType.func.isRequired,
        title: PropType.string.isRequired
    };

    render() {
        const { authors, book, id, imageLinks, onUpdateBook, title } = this.props;

        return (
            <div className="book">
                <div className="book-top">
                    <div
                        className="book-cover"
                        style={{
                            height: 188,
                            width: 192,
                            backgroundImage: `url(${imageLinks ? imageLinks.smallThumbnail : null})` }}>
                    </div>
                    <BookShelfChanger
                        book={ book }
                        onUpdateBook={ onUpdateBook }
                        key={ id }
                    />
                </div>
                <BookAuthor authors={ authors } />
                <BookTitle title={ title } />
            </div>
        );
    };
}

export default Book