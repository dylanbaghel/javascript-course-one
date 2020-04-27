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
        }, 5000);
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

const creatingUser = async () => {
    try {
        const newUser = await createUser({
            name: 'Abhishek Baghel',
            age: 21
        });
        console.log('New User: ', newUser);
        const newPost = await createPost({
            title: 'My First Post',
            body: 'This is My First Post Body',
            userId: newUser.data.name
        });
        console.log('New Post: ', newPost);
    } catch (err) {
        console.log('ERROR --> ', err.message);
    }
};

creatingUser();

