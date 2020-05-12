import { v4 as uuid } from 'uuid';

class State {
    constructor() {
        this.posts = [];
        this.currentPost = null;
        this.isEdit = false;
    }

    getPosts() {
        return this.posts;
    }

    getPostById(id) {
        return this.posts.find((post) => post.id === id);
    }

    setCurrentPost(post) {
        this.currentPost = post;
    }

    setIsEdit(isEdit) {
        this.isEdit = isEdit;
    }

    setPosts(posts) {
        this.posts = posts;
    }

    addPost(post) {
        this.posts = [...this.posts, post];
    }

    removePost(id) {
        this.posts = this.posts.filter(post => post.id !== id);
    }

    updatePost(id, title, body) {
        this.posts = this.posts.map(post => {
            if (post.id === id) {
                return {
                    ...post,
                    title, body
                };
            }
            return post;
        });
    }
}

export const state = new State();