import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BookShelfChanger extends Component {
    static propTypes = {
        book: PropTypes.object.isRequired,
        onUpdateBook: PropTypes.func.isRequired
    }

    render () {
        const { book, onUpdateBook } = this.props;

        return (
            <div className="book-shelf-changer">
                <select onChange={(event) => onUpdateBook(book, event.target.value)} defaultValue="move-to">
                    <option value="move-to">Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }
};

export default BookShelfChanger;