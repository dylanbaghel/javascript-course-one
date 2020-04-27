const http = new EasyHTTP();

(async () => {
    try {
        const response = await http.get('http://jsonplaceholder.typicode.com/users')
        console.log('GET: ', response);
    } catch (err) {
        console.log('Error: ', err);
    }
})();

(async () => {
    try {
        const response = await http.post('http://jsonplaceholder.typicode.com/users', {
            name: 'Abhishek Baghel',
            email: 'dylan@example.com',
            username: 'dylan_example'
        });
        console.log('POST: ', response);
    } catch (err) {
        console.log('Error: ', err);
    }
})();

(async () => {
    try {
        const response = await http.put('http://jsonplaceholder.typicode.com/users/1', {
            name: 'Dylan Baghel',
            email: 'dylan_put@example.com',
            username: 'dylan_PUT'
        });
        console.log('PUT: ', response);
    } catch (err) {
        console.log('Error: ', err);
    }
})();

(async () => {
    try {
        const response = await http.delete('http://jsonplaceholder.typicode.com/users/1');
        console.log('DELETE: ', response);
    } catch (err) {
        console.log('Error: ', err);
    }
})();