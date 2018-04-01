import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BookAuthor extends Component {
    static propTypes = {
        authors: PropTypes.array.isRequired
    }

    render () {
        const authors = this.props.authors.join(', ');

        return (
            <div className="book-authors">
                {authors}
            </div>
        )
    }
}

export default BookAuthor