import React from 'react';
import renderer from 'react-test-renderer';
import BookSearch from '../Book';

test('render BookSearch', () => {
    const component = renderer.create(
        <BookSearch />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});