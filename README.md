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