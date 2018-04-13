import React from 'react';
import BookSearch from '../BookSearch';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

test('will render BookSearch', () => {
    const onUpdateBook = jest.fn();
    const books = [];

    const component = renderer.create(
        <BrowserRouter>
        <BookSearch
            books={ books }
            onUpdateBook={ onUpdateBook } />
        </BrowserRouter>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})