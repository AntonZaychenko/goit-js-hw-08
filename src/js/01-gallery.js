
import { galleryItems } from './gallery-items.js';

// Описан в документации
import SimpleLightbox from "simplelightbox/dist/simple-lightbox.esm";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = createItemsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

function createItemsMarkup(item) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<ul class="gallery">
      <li>
      <a class="gallery__item" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"          
          alt="${description}"
        />
      </a>
      </li>
     
    </ul>`;
    })
    .join("");
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  captionType: "alt",
});

