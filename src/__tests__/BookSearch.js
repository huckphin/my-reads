import React from 'react';
import BookSearch from '../BookSearch';
import renderer from 'react-test-renderer';

test('will render BookSearch', () => {
    const component = renderer.create(
        <BookSearch />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})