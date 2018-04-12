import React from 'react';
import BookShelf from '../BookShelf';
import renderer from 'react-test-renderer';

test('render a BookShelf', () => {
    const onUpdateBook = jest.fn();
    const book = {};
    const id = "book-id";

    const component = renderer.create(
        <BookShelf
            title="Currently Reading"
            key="Currently Reading"
            onUpdateBook={ onUpdateBook }
            books={[
                {
                    key: "The Linux Command Line",
                    authors: [ "William E. Shotts, Jr." ],
                    id: `${id}`,
                    imageLinks: {
                        smallThumbnail: "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
                        thumbnail: "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
                    },
                    shelf: "wantToRead",
                    title: "The Linux Command Line"
                }
            ]} />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});