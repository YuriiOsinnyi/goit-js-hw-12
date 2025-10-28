import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export const gallery = document.querySelector('.gallery');
export const loader = document.querySelector('.loader');

export const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
  disableScroll: true,
});

export function createGallery(images) {
  const markup = images
    .map(
      ({
        likes,
        views,
        comments,
        downloads,
        largeImageURL,
        webformatURL,
        tags,
      }) => {
        const altText = tags.split(',').slice(0, 3).join(',');
        return `
        <li class="gallery-item">
  <a class="gallery-link" href="${largeImageURL}">
    <img
      class="gallery-image"
      src="${webformatURL}"
      alt="${altText}"
    />
  </a>
  <div class="info">
  ${createInfoBlock('Likes', likes)}
   ${createInfoBlock('Views', views)}
    ${createInfoBlock('Comments', comments)}
     ${createInfoBlock('Downloads', downloads)}
  </div>
</li>
        `;
      }
    )
    .join('');
  gallery.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

const createInfoBlock = (label, value) => `
<div class="info-block">
<h4 class="card-heading">${label}</h4>
<p class="info-text">${value}</p>
</div>
`;

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  loader.classList.add('active');
}
export function hideLoader() {
  loader.classList.remove('active');
}
export function showLoadMoreButton() {
  document.querySelector('.load-more').classList.remove('hidden');
}
export function hideLoadMoreButton() {
  document.querySelector('.load-more').classList.add('hidden');
}
