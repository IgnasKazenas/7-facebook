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

    const allSeeLessDOM = document.querySelectorAll(".post .less");

    for (let i=0; i<allSeeLessDOM.length; i++) {
        const seeLess = allSeeLessDOM[i];
        seeLess.addEventListener('click', () => {
            const contentDOM = seeLess.closest('.content');
            contentDOM.classList.remove('show');

            //issiaiskinti kokiame aukstyje yra .post elementas
            const postDOM = contentDOM.closest('.post');
            const postHeightPosition = postDOM.offsetTop;
            // console.log(postHeightPosition);
                //scrolliname i nurodyta auksti
            scrollTo({
                top: postHeightPosition,
                behavior: 'smooth'
            });
            //window.scrollTo(0, postHeightPosition);
        });
    }
}

export default renderPosts;