/**
 * EasyHTTP Library
 * Library For Making HTTP Requests
 *
 * @version 2.0.0
 * @desc Using Fetch | ES6 - Classes | Promises
 * @author Abhishek Baghel
 * @license MIT
 */

class EasyHTTP {
    // Make GET Request
    get(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        });
    }

    // Make POST Request
    post(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        })
    }

    // Make PUT Request
    put(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        });
    }

    // Make Delete Request
    delete(url) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        });
    }
}