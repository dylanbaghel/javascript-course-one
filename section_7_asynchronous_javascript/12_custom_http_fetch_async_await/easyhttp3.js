/**
 * EasyHTTP Library
 * Library For Making HTTP Requests
 *
 * @version 3.0.0
 * @desc Using Fetch | ES6 - Classes | Async / Await
 * @author Abhishek Baghel
 * @license MIT
 */

class EasyHTTP {
    // Make GET Request
    get(url) {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await fetch(url);
                const data = await res.json();
                resolve(data);
            } catch (err) {
                reject(err);
            }

        });
    }

    // Make POST Request
    post(url, data) {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });
                resolve(await res.json());
            } catch (err) {
                reject(err);
            }
        });
    }

    // Make PUT Request
    put(url, data) {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await fetch(url, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });
                resolve(await res.json());
            } catch (err) {
                reject(err);
            }
        });
    }

    // Make Delete Request
    delete(url) {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await fetch(url, {
                    method: 'DELETE'
                });
                resolve('Resource Deleted');
            } catch (err) {
                reject(err);
            }
        });
    }
}