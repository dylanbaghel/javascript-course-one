/**
 * Promises
 */

function createUser(user) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (typeof user.name === 'undefined' || !user.name) {
                reject(new Error('Please Enter Name'));
            } else if (typeof user.age === 'undefined' || !user.age) {
                reject(new Error('Please Enter Age'));
            } else {
                resolve({
                    success: true,
                    data: user
                });
            }
        }, 1000);
    });
}

function createPost(post) {
    if (!post.title) {
        return Promise.reject(new Error('Please Enter Title'))
    } else if (!post.body) {
        return Promise.reject(new Error('Please Enter Post Body'));
    } else if (!post.userId) {
        return Promise.reject(new Error('Please Enter User Id Associated With This Post.'));
    } else {
        return Promise.resolve({
            success: true,
            data: post
        });
    }
}

createUser({
    name: 'Abhishek Baghel',
    age: 21
}).then(function (res) {
    return res.data;
})
    .then(function (user) {
        return createPost({
            title: 'Another Post',
            body: 'Another Post Body',
            userId: user.name
        });
    })
    .then(function (res) {
        {
            console.log(res);
        }
    })
    .catch(function (err) {
        console.log(err.message);
    });

