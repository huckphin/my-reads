import React, { Component } from 'react';
import BookAuthor from './BookAuthor';
import BookTitle from './BookTitle';
import BookShelfChanger from './BookShelfChanger';
import PropType from 'prop-types';

class Book extends Component {
    static propTypes = {
        authors: PropType.array.isRequired,
        backgroundImageUrl: PropType.string.isRequired,
        height: PropType.number.isRequired,
        width: PropType.number.isRequired,
        title: PropType.string.isRequired
    }

    render() {
        const { authors, backgroundImageUrl, height, width, title } = this.props;

        return (
            <div className="book">
                <div className="book-top">
                    <div
                        className="book-cover"
                        style={{
                            width: width, 
                            height: height,
                            backgroundImage: `url(${backgroundImageUrl})` }}>
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