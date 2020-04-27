/**
 * Custom AJAX Library Using Callbacks
 */

var http = new EasyHttp();

http.get('http://jsonplaceholder.typicode.com/posts', function (err, posts) {
    if (err) {
        console.log('Error: ', err);
    } else {
        console.log(posts);
    }
});

http.get('http://jsonplaceholder.typicode.com/posts/1', function (err, posts) {
    if (err) {
        console.log('Error: ', err);
    } else {
        console.log(posts);
    }
});

// http.post('http://jsonplaceholder.typicode.com/posts', {
//     title: 'Another Post',
//     body: 'World Goes Here'
// }, function (err, response) {
//     if (err) {
//         console.error('Error: ', err.message);
//     } else {
//         console.log(response);
//     }
// });

// http.put('http://jsonplaceholder.typicode.com/posts/1', { title: 'UPdated Title' }, function (err, response) {
//     if (err) {
//         console.error('Error: ', err.message);
//     } else {
//         console.log(response);
//     }
// });

// http.delete('http://jsonplaceholder.typicode.com/posts/1', function (err, response) {
//     if (!err) {
//         console.log(response);
//     } else {
//         console.error('Error: ', err.message);
//     }
// });