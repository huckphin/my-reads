import React from 'react';
import ListBooks from '../ListBooks';
import renderer from 'react-test-renderer';

test('will render ListBooks', () => {
    const component = renderer.create(
        <ListBooks
            key="MyReads"
            books={[
                {
                    key: "The Linux Command Line",
                    authors: [ "William E. Shotts, Jr." ],
                    imageLinks: {
                        smallThumbnail: "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
                        thumbnail: "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
                    },
                    title: "The Linux Command Line",
                    shelf: "Currently Reading"
                }
            ]}
        />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});