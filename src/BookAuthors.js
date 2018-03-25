import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BookAuthors extends Component {
    static propTypes = {
        authors: PropTypes.array.isRequired
    }

    render () {
        const { authors } = this.props;

        return (
            <div className="book-authors">
                {{ authors }}
            </div>
        )
    }
}

export default BookAuthors