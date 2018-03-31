import React from 'react';
import BookShelfChanger from '../BookShelfChanger';
import renderer from 'react-test-renderer';

test('will render a BookShelfChanger', () => {
    const component = renderer.create(
        <BookShelfChanger />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});