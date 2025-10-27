import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
  loadMore,
  gallery,
  lightbox,
} from './js/render-functions.js';

const form = document.querySelector('.form');

let page = 1;
let query = '';
let totalHits = 0;

loadMore.addEventListener('click', onLoadMore);
form.addEventListener('submit', handlerSubmit);

async function handlerSubmit(event) {
  event.preventDefault();
  query = event.target.elements['search-text'].value.trim();

  if (!query) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search query.',
      position: 'topRight',
    });
    return;
  }

  clearGallery();
  page = 1;
  showLoader();
  try {
    const data = await getImagesByQuery(query, page);
    totalHits = data.totalHits;
    if (data.hits.length === 0) {
      iziToast.info({
        title: 'No results',
        message: 'Sorry, no images found.',
      });
      return;
    }
    createGallery(data.hits);
    if (totalHits > page * 15) showLoadMoreButton();
  } catch (error) {
    iziToast.error({ title: 'Error', message: error.message });
  } finally {
    hideLoader();
    event.target.reset();
  }
}

async function onLoadMore() {
  page += 1;

  showLoader();
  try {
    const data = await getImagesByQuery(query, page);
    createGallery(data.hits);
    smoothScroll();
    if (page * 15 >= totalHits) {
      hideLoadMoreButton();
      iziToast.warning({
        title: 'End',
        message: "We're sorry, but you've reached the end of search results.",
      });
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong. Try again later.',
    });
  } finally {
    hideLoader();
  }
}
function smoothScroll() {
  const card = document.querySelector('.gallery .gallery-item');
  const info = card.getBoundingClientRect();
  const height = info.height;
  window.scrollBy({ top: height * 1.5, behavior: 'smooth' });
}
