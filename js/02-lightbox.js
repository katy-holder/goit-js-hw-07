import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');
const imageCard = createImgCards(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', imageCard);

console.log(createImgCards(galleryItems));
function createImgCards(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
    <a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
    `
    }).join('');
};

const lightbox = new SimpleLightbox('.gallery a ', {
    captionDelay: 250,
});
