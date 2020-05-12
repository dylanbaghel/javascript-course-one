import { state } from './state';

class UI {
    constructor() {
        this.posts = document.querySelector('#posts');
        this.postsContainer = document.querySelector('.postsContainer');
        this.titleInput = document.querySelector('#title');
        this.bodyInput = document.querySelector('#body');
        this.postSubmit = document.querySelector('.post-submit');
        this.isEdit = false;
    }

    generatePostMarkup(id, title, body) {
        const listDiv = document.createElement('div');
        listDiv.className = 'list-group-item';
        listDiv.id = `post-${id}`;

        const postContentDiv = document.createElement('div');

        const postTitleP = document.createElement('p');
        postTitleP.appendChild(document.createTextNode(title));

        const postBodyP = document.createElement('p');
        postBodyP.appendChild(document.createTextNode(body));

        postContentDiv.appendChild(postTitleP);
        postContentDiv.appendChild(postBodyP);

        listDiv.appendChild(postContentDiv);

        const postActionDiv = document.createElement('div');

        const editPostButton = document.createElement('i');
        editPostButton.className = 'btn btn-light fas fa-pencil-alt';
        editPostButton.addEventListener('click', () => {

        });

        const deletePostButton = document.createElement('i');
        deletePostButton.className = 'btn btn-danger fas fa-trash';
        deletePostButton.addEventListener('click', async () => {

        });

        postActionDiv.appendChild(editPostButton);
        postActionDiv.appendChild(deletePostButton);

        listDiv.appendChild(postActionDiv);

        return listDiv;
    }

    clearInputs() {
        this.titleInput.value = '';
        this.bodyInput.value = '';
    }

    renderAlert(message, type) {
        const alertDiv = document.createElement('div');
        alertDiv.className = `alert alert-${type} alert-dismissible fade show`;
        alertDiv.setAttribute('role', 'alert');

        alertDiv.appendChild(document.createTextNode(message));

        const alertDismissButton = document.createElement('button');
        alertDismissButton.className = 'close';
        alertDismissButton.setAttribute('data-dismiss', 'alert');
        alertDismissButton.setAttribute('aria-label', 'close');
        alertDismissButton.innerHTML = '<span aria-hidden="true">&times;</span>';

        alertDiv.appendChild(alertDismissButton);

        this.postsContainer.insertBefore(alertDiv, this.postsContainer.firstChild);
    }

    renderEditState() {
        if (state.isEdit) {
            this.titleInput.value = state.currentPost.title;
            this.bodyInput.value = state.currentPost.body;
            this.postSubmit.textContent = 'Update';
            this.postSubmit.className = 'btn btn-block btn-warning';

            const cancelEditStateButton = document.createElement('button');
            cancelEditStateButton.className = 'btn btn-block btn-light mt-1';
            cancelEditStateButton.id = 'cancel';
            cancelEditStateButton.appendChild(document.createTextNode('Cancel'));

            if (!document.querySelector('#cancel')) {
                this.postSubmit.insertAdjacentElement('afterend', cancelEditStateButton);
            }

        } else {
            this.clearInputs();
            this.postSubmit.textContent = 'Post It';
            this.postSubmit.classList.remove('btn-warning');
            this.postSubmit.classList.add('btn-primary');

            document.querySelector('#cancel').remove();
        }
    }

    renderPosts() {
        this.posts.innerHTML = '';
        state.getPosts().forEach((post) => {
            const listDiv = this.generatePostMarkup(post.id, post.title, post.body);
            this.posts.appendChild(listDiv);
        });
    }

    createPost(post = {}) {
        const listDiv = this.generatePostMarkup(post.id, post.title, post.body);
        this.posts.appendChild(listDiv);
    }

    removePost(postId) {
        document.querySelector(`#post-${postId}`).remove();
    }

    updatePost(postId, title, body) {
        const postEl = document.querySelector(`#post-${postId}`);
        const postContent = postEl.firstElementChild;

        Array.from(postContent.children).forEach((ch) => {
            ch.remove();
        });
        
        const titleP = document.createElement('p');
        titleP.appendChild(document.createTextNode(title));

        const bodyP = document.createElement('p');
        bodyP.appendChild(document.createTextNode(body));

        postContent.appendChild(titleP);
        postContent.appendChild(bodyP);
    }
}

export const ui = new UI();