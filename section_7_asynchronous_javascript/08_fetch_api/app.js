fetch('http://jsonplaceholder.typicode.com/posts')
    .then(function (res) {
        if (res.status !== 200 && res.status !== 201) {
            throw new Error(res.statusText);
        } else {

            return res.json();
        }
    })
    .then(function (data) {
        console.log(data);
    })
    .catch(function (err) {
        console.log('Error: ', err.message);
    });