import Swiper from 'swiper';
import 'swiper/css';


function bookSlider() {
  const swiper = new Swiper('.mySwiper', {
    slidesPerView: 3,
    spaceBetween: 30,
  });
}
export { bookSlider };

