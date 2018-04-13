import React, { Component } from 'react';

class BookAuthor extends Component {
    render () {
        const authors = this.props.authors !== undefined ? this.props.authors.join(', ') : 'Unknown author';

        return (
            <div className="book-authors">
                {authors}
            </div>
        )
    }
}

export default BookAuthor