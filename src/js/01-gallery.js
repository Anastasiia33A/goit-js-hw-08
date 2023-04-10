// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery')
const galleryMarkup = galleryItems
    .map(({ preview, original, description }) =>
        `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image"
            src="${preview}" data-source="${original}" alt="${description}"/>
            </a>
        </li>`
)
    .join('');
galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup)
    
const galleryBox = new SimpleLightbox('.gallery a', {
    captionType: 'attr',
    captionsData: 'alt',
    captionDelay: '100',
    navText: ['⇦', '⇨']

});
// console.log(galleryItems);
