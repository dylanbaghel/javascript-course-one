/**
 * External API With XHR
 *  --> Making Chunk Norris Joke Generator
 */

document.querySelector('.btn').addEventListener('click', getJokes);

function getJokes(e) {
    e.preventDefault();
    const number = document.querySelector('input').value;

    if (number) {
        const url = 'http://api.icndb.com/jokes/random/' + number;

        const xhr = new XMLHttpRequest();

        xhr.open('GET', url);

        xhr.onload = function () {
            if (this.status === 200) {
                const response = JSON.parse(this.response);

                if (response.type === 'success') {
                    renderJokes(response.value);
                } else {
                    alert('Something Goes Wrong!');
                }
            }
        }

        xhr.send();
    }
}

function renderJokes(jokes) {
    const jokesView = document.querySelector('.jokes');
    jokesView.innerHTML = '';
    jokes.forEach(function (joke) {
        const jokeView = createJokeView(joke);
        jokesView.appendChild(jokeView);
    });
}

function createJokeView(joke) {
    const div = document.createElement('div');
    div.appendChild(document.createTextNode(joke.joke));
    return div;
}