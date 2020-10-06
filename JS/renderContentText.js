function renderContentText(text) {
    if (!text) {
        console.error('ERROR: posto tekstui nedave reiksmes, bet bando spausdinti.');
        return '';  
    }

    if (text.length < 61) {
        return `<p class="big-size">${text}</p>` 
    } else if (text.length < 301) {
        return `<p>${text}</p>`;
    } else {
        let shortedText = '';
        for (let i = 0; i < 300; i++) {
            shortedText += text [i];
        }
        return `<p>${shortedText}...<span class="more">See more</span>`;
    }
}

export default renderContentText;