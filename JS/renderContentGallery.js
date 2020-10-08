function renderContentGallery(data) {
    //validacija
    if (!data) {
        console.warn('ERROR: generuojant galerija, reikia duoti tinkama info');
        return '';
    }

    //logika
    const maxGallerySize = 4;
    const visiblePhotoCount = data.length > maxGallerySize ? maxGallerySize : data.length;


    let extraAttribute = '';
    if ( data.length > maxGallerySize) {
        extraAttribute = `data-extra="${data.length - maxGallerySize}"`
    }

    let extraHTML = `<div class="extra">+${data.length - maxGallerySize}</div>`;
    let imagesHTML = '';
    for (let i=0; i<visiblePhotoCount; i++) {
        if (i === visiblePhotoCount - 1) {
            imagesHTML += `<div class="img" ${extraAttribute}>
                            <img src="./img/posts/${data[i]}" alt="User post gallery picture">
                            </div>`
        } else {
            imagesHTML += `<div class="img"><img src="./img/posts/${data[i]}" alt="User post gallery picture"></div>`
        }

        // if (i >= maxGallerySize) {
        //     break;
        // }

        
    }

 

    // if (data.length > maxGallerySize) {
    //     extraHTML = `<div class="extra">+${data.length - maxGallerySize}</div>`;
    // }



    return `<div class="gallery gallery-${visiblePhotoCount}">
                ${imagesHTML}
            </div>`;
}

export default renderContentGallery;