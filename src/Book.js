import React, { Component } from 'react';
import BookShelfChanger from './BookShelfChanger';
import BookCover from './BookCover';
import BookTitle from './BookTitle';
import BookAuthors from './BookAuthors';

class Book extends Component {

    render() {
        return (
            <div className="book">
                <div className="book-top">
                    <BookCover coverProps={this.props} />
                    <BookShelfChanger />
                </div>
                <BookTitle />
                <BookAuthors />
            </div>
        )
    }
}

export default Book