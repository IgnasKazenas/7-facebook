function renderHeader (data, time) {
    // console.log(data);
    return `<header class="post-header">
        <img class="avatar" src="./img/users/${data.photo}" alt="avatar"></img>
        <div class="author">
            <a class="user-link" href="#/users/${data.link}">${data.name} ${data.lastname}</a>
            <div class="timestamp">6h ago (${time})</div>
        </div>
        <i class="fas fa-ellipsis-h"></i>
    </header>`;
}

export default renderHeader