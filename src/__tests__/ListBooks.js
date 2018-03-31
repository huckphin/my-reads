import React from 'react';
import ListBooks from '../ListBooks';
import renderer from 'react-test-renderer';

test('will render ListBooks', () => {
    const component = renderer.create(
        <ListBooks
            key="MyReads"
            books={[
                {
                    key: "To Kill a Mockingbird",
                    authors: [ "Harper Lee" ],
                    backgroundImageUrl: "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api",
                    height: 193,
                    width: 128,
                    title: "To Kill a Mockingbird",
                    shelf: "Currently Reading"
                },
                {
                    key: "Ender's Game",
                    authors: [ "Orson Scott Card" ],
                    backgroundImageUrl: "http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api",
                    height: 188,
                    width: 128,
                    title: "Ender's Game",
                    shelf: "Currently Reading"
                }
            ]}
        />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});