# README

My Reads app in React. This is the first project of the Udacity React Nanodegree.

In MyReads, there are three shelves: Currently Reading, Want to Read, and Read.
Each book listed has a dropdown select menu to allow shifting books from one shelf
to the other.

## Books API

There is a module called BooksAPI, which was given in the
[starter project template](https://github.com/udacity/reactnd-project-myreads-starter)
provided by Udacity. This API accesses Udacity resources from https://reactnd-books-api.udacity.com.

The API has a limited set of valid search terms, so I expanded the BooksAPI to include
these valid search terms, so that the front-end does not hit the server for every query
if we already know that the query is going to fail.

## Components

Here are the components that have been made for this project:

- Book
- BookAuthor
- BookCover
- BookSearch
- BookShelf
- BookShelfChanger
- BookTitle
- ListBooks

## Testing

Testing is done using Jest. To run tests, from a terminal:

```yarn test```

## Running the app

To run the app, from a terminal:

```yarn start```

## Search

Given the nature of the API, only these [search terms](SEARCH_TERMS.md)
are considered valid search terms.

## Contributing

Questions, comments, bug reports are all welcome. Submit them
at the project on [Github](https://github.com/huckphin/my-reads).

Bug reports that include steps to reproduce are preferred.

## Author

[Chad Rhyner](https://chadwick.town)

## License

This software is licensed under the MIT License.

Copyright 2018 Chad Rhyner

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or
sell copies of the Software, and to permit persons to whom
the Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall
be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.