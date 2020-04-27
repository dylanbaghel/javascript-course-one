/**
 * Callbacks
 */

function createUser(user = {}, cb) {
    if (typeof user.name === 'undefined' || !user.name) {
        setTimeout(function () {
            cb(new Error('Please Enter Name'), null);
        }, 1000);
        return;
    } else if (typeof user.age === 'undefined' || !user.age) {
        setTimeout(function () {
            cb(new Error('Please Enter Age'), null);
        }, 1000);
    }
    setTimeout(function () {
        cb(null, user);
    }, 1500);

}

createUser({
    name: 'Abhishek Baghel',
    age: 22
}, function (err, res) {
    if (err) {
        console.log(err.message);
    } else {
        console.log(res);
    }
});

