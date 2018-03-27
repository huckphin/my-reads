import React, { Component } from 'react';
import BookShelfChanger from './BookShelfChanger';
import BookCover from './BookCover';
import BookTitle from './BookTitle';
import BookAuthor from './BookAuthor';

class Book extends Component {

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