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

    // susirasti dominančius elementus .more
    const allSeeMoreDOM = document.querySelectorAll('.post .more')
    console.log(allSeeMoreDOM);

    //pradedam stebėt paspaudimus ant jų
    for (let i = 0; i < allSeeMoreDOM.length; i++) {
        const seeMore = allSeeMoreDOM[i];
        seeMore.addEventListener('click', () => {
            seeMore.closest('.content').classList.add('show');
        });
    }
}

export default renderPosts;