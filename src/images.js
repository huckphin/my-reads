/**
 * Images.js
 * utility to work with images
 */

import url from 'url';
import http from 'http';
import sizeOf from 'image-size';

/**
 * getImageSize
 * returns the dimensions of the given url
 *
 * @param {string} url 
 */
function getImageSize(url) {
    let options = url.parse(url);
    http.get(options, function (response) {
        var chunks = [];
        response.on('data', function (chunk) {
            chunks.push(chunk);
        }).on('end', function() {
            let buffer = Buffer.concat(chunks);
            return buffer;
        })
    })
}

/*

var imgUrl = 'http://my-amazing-website.com/image.jpeg';
var options = url.parse(imgUrl);
 
http.get(options, function (response) {
  var chunks = [];
  response.on('data', function (chunk) {
    chunks.push(chunk);
  }).on('end', function() {
    var buffer = Buffer.concat(chunks);
    console.log(sizeOf(buffer));
  });
});
*/