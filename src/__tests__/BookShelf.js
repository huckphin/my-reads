import React from 'react';
import BookShelf from '../BookShelf';
import renderer from 'react-test-renderer';

test('render a BookShelf', () => {
    const component = renderer.create(
        <BookShelf
            title="Currently Reading"
            books={[
                { 
                    width: 128, 
                    height: 193,
                    backgroundImageURL: "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api",
                    title: "To Kill a Mockingbird",
                    authors: [ "Harper Lee" ]
                },
                {
                    width: 128,
                    height: 188,
                    backgroundImageURL: "http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api",
                    title: "Ender's Game",
                    authors: [ "Orson Scott Card" ]
                }
            ]} />
    )
})