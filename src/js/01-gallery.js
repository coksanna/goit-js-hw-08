import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// console.log(galleryItems);
function createGallery(items) {
    return items.map(({preview, original, description})=> `<a class="gallery__item" href='${original}'> 
      <img
        class="gallery__image"
        src='${preview}'
        alt='${description}'
      />
    </a>`).join('');
};
// console.log(galleryItems);

const galleryMarkup = createGallery(galleryItems);
const galleryEl = document.querySelector('.gallery');
galleryEl.insertAdjacentHTML('beforeend', galleryMarkup);
let gallery = new SimpleLightbox('.gallery a', { 
    captionsData: 'alt',
    captionDelay: 250,    
    scrollZoom: false,
});

