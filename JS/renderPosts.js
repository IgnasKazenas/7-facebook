function renderPosts(data) {
    console.log('labukas');


    let HTML = '';

    for (let i=0; i<data.length; i++){
        const post = data [i];

        HTML += `<div class="post">
        ${post.author.name}${post.author.lastname}
        </div>`;

        // console.log(post.author.name);
    }

    console.log(HTML);

    // susirandame elementa kuriame norime perrasyti turini
    const feedDOM = document.querySelector('main');
    console.log(feedDOM);

    // i ta elementa ikeliame HTML kintamojo reiksme

    feedDOM.innerHTML = HTML
}

export default renderPosts;