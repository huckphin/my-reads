import React from 'react';
import Book from '../Book';
import renderer from 'react-test-renderer';

test('will render a Book', () => {
  const onUpdateBook = jest.fn();
  const book = {"title": "Fight Club"};
  const id = "book-id";

  const component = renderer.create(
    <Book
          book={ book }
          key={ id }
          onUpdateBook={ onUpdateBook }
          imageLinks={{
            smallThumbnail: "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
            thumbnail: "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
          }}
      />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('will render a Book with no imageLinks', () => {
  const onUpdateBook = jest.fn();
  const book = {"title": "Fight Club"};
  const id = "book-id";

  const component = renderer.create(
      <Book
          book={ book }
          key={ id }
          onUpdateBook={ onUpdateBook }
      />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
