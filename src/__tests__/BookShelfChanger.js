import React from 'react';
import BookShelfChanger from '../BookShelfChanger';
import renderer from 'react-test-renderer';

test('will render a BookShelfChanger', () => {
    const onUpdateBook = jest.fn();
    const book = {};
    const id = "book-id";
    const shelf = "read";

    const component = renderer.create(
        <BookShelfChanger 
            book={ book }
            onUpdateBook={ onUpdateBook }
        />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});