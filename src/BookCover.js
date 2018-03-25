import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BookCover extends Component {
    static propTypes = {
        height: PropTypes.number.isRequired,
        width: PropTypes.number.isRequired,
        backgroundImageURL: PropTypes.string.isRequired
    }

    render () {
        const { height, width, backgroundImageURL } = this.props.coverProps;

        return (
            <div className="book-cover" style={{ width: width, height: height, backgroundImage: `url(${backgroundImageURL})` }}>
            </div>
        );
    }
}

export default BookCover;