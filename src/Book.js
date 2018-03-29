import React, { Component } from 'react';
import BookShelfChanger from './BookShelfChanger';
import BookCover from './BookCover';
import BookTitle from './BookTitle';
import BookAuthor from './BookAuthor';
import PropType from 'prop-types';

class Book extends Component {
    static propTypes = {
        height: PropType.number.isRequired,
        width: PropType.number.isRequired,
        backgroundImageURL: PropType.string.isRequired,
        title: PropType.string.isRequired,
        authors: PropType.array.isRequired
    }

    render() {
        const { height, width, backgroundImageURL, title, authors } = this.props;

        return (
            <div className="book">
                <div className="book-top">
                    <BookCover
                        height={ height }
                        width={ width }
                        backgroundImageURL={ backgroundImageURL }
                    />
                    <BookShelfChanger />
                </div>
                <BookTitle title={ title } />
                <BookAuthor authors={ authors } />
            </div>
        );
    };
}

export default Book