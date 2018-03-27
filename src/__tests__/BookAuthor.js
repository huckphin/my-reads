import React from 'react';
import BookAuthor from '../BookAuthor';
import renderer from 'react-test-renderer';

test('render a BookAuthor', () => {
    const component = renderer.create(
        <BookAuthor authors={ ["Chuck Palahniuk"] } />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});