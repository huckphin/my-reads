import React from 'react';

function BookAuthor(props) {
    return (
        <div className="book-authors">
            {props.authors !== undefined ? props.authors.join(', ') : 'Unknown author'}
        </div>
    );
}

export default BookAuthor;