import React from 'react';
import BookTitle from '../BookTitle'
import renderer from 'react-test-renderer'

test('render a BookTitle', () => {
    const component = renderer.create(
        <BookTitle title="Fight Club" />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});