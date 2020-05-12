import axios from 'axios';
import { v4 as uuid } from 'uuid';

import { BASE_URL } from './utils';
import { ui } from './ui';
import { state } from './state';

// Get Posts On DOM Load
document.addEventListener('DOMContentLoaded', getPosts);

async function getPosts() {
    const url = `${BASE_URL}/posts`;

    try {
        const response = await axios.get(url);
        state.setPosts(response.data);
        ui.renderPosts();
    } catch (err) {
        ui.renderAlert(err.message, 'danger');
    }
};

document.querySelector('.post-submit').addEventListener('click', addPost);

async function addPost() {
    const title = document.querySelector('#title').value;
    const body = document.querySelector('#body').value;

    if (title && body) {
        const post = {
            id: uuid(),
            title, body
        };

        try {
            if (!state.isEdit) {
                const response = await axios.post(`${BASE_URL}/posts`, post);
                state.addPost(response.data);
                ui.createPost(response.data);
                ui.renderAlert('Post Created', 'success');
            } else {
                await axios.put(`${BASE_URL}/posts/${state.currentPost.id}`, { title, body });
                state.updatePost(state.currentPost.id, title, body);
                ui.updatePost(state.currentPost.id, title, body);
                ui.renderAlert('Post Updated', 'success');
                disableEditState();
            }
            ui.clearInputs();
        } catch (err) {
            ui.renderAlert(err.message, 'danger');
        }

    } else {
        ui.renderAlert('Please Enter Title and Body', 'danger');
    }
}

document.querySelector('#posts').addEventListener('click', async (event) => {
    if (event.target.className.includes('trash')) {
        const postId = event.target.parentElement.parentElement.id.replace('post-', '').trim();

        try {
            await axios.delete(`${BASE_URL}/posts/${postId}`);
            state.removePost(postId);
            ui.removePost(postId);
            ui.renderAlert('Post Deleted', 'success');
        } catch (err) {
            ui.renderAlert(err.message, 'danger');
        }
    }

    if (event.target.className.includes('pencil')) {
        const postId = event.target.parentElement.parentElement.id.replace('post-', '').trim();
        const post = state.getPostById(postId);
        enableEditState(post);
    }
});

document.querySelector('.postsContainer').addEventListener('click', (event) => {
    if (event.target.id === 'cancel') {
        disableEditState();
    }
});

const disableEditState = () => {
    state.setCurrentPost(null);
    state.setIsEdit(false);
    ui.renderEditState();
}

const enableEditState = (post) => {
    state.setCurrentPost(post);
    state.setIsEdit(true);
    ui.renderEditState();
}