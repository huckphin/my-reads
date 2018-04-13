import React from 'react';
import Book from '../Book';
import renderer from 'react-test-renderer';

test('will render a Book', () => {
  const onUpdateBook = jest.fn();
  const book = {};
  const id = "book-id";

  const component = renderer.create(
      <Book
          authors={ [ "William E. Shotts, Jr." ] }
          book={ book }
          id={ id }
          key={ id }
          onUpdateBook={ onUpdateBook }
          shelf="Want to Read"
          title="The Linux Command Line"
          imageLinks={{
            smallThumbnail: "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
            thumbnail: "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
          }}
      />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
