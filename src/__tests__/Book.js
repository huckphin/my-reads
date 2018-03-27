import React from 'react';
import Book from '../Book';
import renderer from 'react-test-renderer';

test('will render a Book', () => {
    const component = renderer.create(
        <Book
            title="Fight Club"      
            height={ 100 }
            width={ 100 }
            authors={ [ "Chuck Palahniuk" ] }
            backgroundImageURL="http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api"
            />
    )
});