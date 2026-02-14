import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

window.addEventListener('load', function () {
  alert("It's loaded!")
  const lightbox = new PhotoSwipeLightbox({
    gallery: '#img',
    children: 'img',
    pswpModule: () => import('photoswipe')
  });
  lightbox.init();
})

