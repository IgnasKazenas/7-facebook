import renderSinglePost from './renderSinglePost.js';

function renderPosts(data) {
    // validacija

    // logika, kuri generuoja turini
    let HTML = '';

    for (let i = 0; i < data.length; i++) {
        const post = data[i];
        HTML += renderSinglePost(post);
    }

    // susirandame elementa, kuriame norime perrasyti turini
    const feedDOM = document.querySelector('main');

    // i ta elementa ikeliame HTML kintamojo reiksme
    feedDOM.innerHTML = HTML;
}

export default renderPosts;