// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import _default from '../../node_modules/simplelightbox/dist/simple-lightbox'
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);
const gallery = document.querySelector(".gallery");
const items = galleryItems
  .map(
    (galleryItems) =>
      `
<a class = "gallery__link" href="${galleryItems.original}"">
<img 
class="gallery__image"
src="${galleryItems.preview}"
alt="${galleryItems.description}"
data-source="${galleryItems.original}"
</a>
`
  )
  .join("");
gallery.insertAdjacentHTML("beforeEnd", items);


let galleryLightbox = new SimpleLightbox ('.gallery a', {
    captionDelay: 250,
    captionsData : "alt",

});



