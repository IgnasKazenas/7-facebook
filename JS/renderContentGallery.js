function renderContentGallery(data) {
    //validacija
    if (!data) {
        console.warn('ERROR: generuojant galerija, reikia duoti tinkama info');
        return '';
    }

    //logika
    const maxGallerySize = 4;
    const visiblePhotoCount = data.length > maxGallerySize ? maxGallerySize : data.length;


    let imagesHTML = '';
    for (let i=0; i<visiblePhotoCount; i++) {
        if (i >= maxGallerySize) {
            break;
        }

        imagesHTML += `<img src="./img/posts/${data[i]}" alt="User post gallery picture">`
    }

    let extraHTML = '';

    if (data.length > maxGallerySize) {
        extraHTML = `<div class="extra">+${data.length - maxGallerySize}</div>`;
    }



    return `<div class="gallery gallery-${visiblePhotoCount}">
                ${imagesHTML}
                ${extraHTML}
            </div>`;
}

export default renderContentGallery;