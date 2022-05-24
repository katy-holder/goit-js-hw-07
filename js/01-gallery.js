import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');
const imageCard = createImgCards(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', imageCard);

console.log(createImgCards(galleryItems));
function createImgCards(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
    <div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
    </div>
    `
    }).join('');
};


galleryContainer.addEventListener('click', onGalleryContainerClick);

function onGalleryContainerClick(evt) {
  evt.preventDefault();
    console.log(evt.target);


    const instance = basicLightbox.create(`
    <img
    src="${evt.target.dataset.source}"
    alt="${evt.target.alt}"
    />
`);

    instance.show();
};

console.log(galleryItems);
