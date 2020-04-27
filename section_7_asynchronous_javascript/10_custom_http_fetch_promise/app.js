const http = new EasyHTTP();

http.get('http://jsonplaceholder.typicode.com/users')
    .then(data => {
        console.log('Data: ', data);
    })
    .catch(err => {
        console.log('Error: ', err);
    });

http.post('http://jsonplaceholder.typicode.com/users', {
    name: 'Abhishek Baghel',
    email: 'dylan@example.com',
    username: 'dylan_example'
})
    .then(data => {
        console.log('Data: ', data);
    })
    .catch(err => {
        console.log('Error: ', err);
    });

http.put('http://jsonplaceholder.typicode.com/users/1', {
    name: 'Dylan Baghel',
    email: 'dylan_put@example.com',
    username: 'dylan_PUT'
})
    .then(data => {
        console.log('Data: ', data);
    })
    .catch(err => {
        console.log('Error: ', err);
    });

http.delete('http://jsonplaceholder.typicode.com/users/1')
    .then(data => {
        console.log('Data: ', data);
    })
    .catch(err => {
        console.log('Error: ', err);
    });