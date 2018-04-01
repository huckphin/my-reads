import React, { Component } from 'react';
import BookAuthor from './BookAuthor';
import BookTitle from './BookTitle';
import BookShelfChanger from './BookShelfChanger';
import PropType from 'prop-types';

class Book extends Component {
    static propTypes = {
        authors: PropType.array.isRequired,
        imageLinks: PropType.object.isRequired,
        title: PropType.string.isRequired
    }

    render() {
        const { authors, imageLinks, title } = this.props;

        return (
            <div className="book">
                <div className="book-top">
                    <div
                        className="book-cover"
                        style={{
                            height: 188,
                            width: 192,
                            backgroundImage: `url(${imageLinks.smallThumbnail})` }}>
                    </div>
                    <BookShelfChanger />
                </div>
                <BookAuthor authors={ authors } />
                <BookTitle title={ title } />
            </div>
        );
    };
}

export default Book