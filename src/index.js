import './assets/styles/main.scss';
import phone from './assets/images/front-purple.png';
import phoneInHandOne from './assets/images/phone-in-hand-1.png';
import phoneInHandTwo from './assets/images/phone-in-hand-2.png';
import modulesPhotoOne from './assets/images/modules-photo-one.png';
import modulesPhotoTwo from './assets/images/modules-photo-two.png';
import modulesPhotoThree from './assets/images/modules-photo-three.png';

document.getElementById('phone-image').setAttribute('src', phone);
document.getElementById('phone-in-hand-one').setAttribute('src', phoneInHandOne);
document.getElementById('phone-in-hand-two').setAttribute('src', phoneInHandTwo);
document.getElementById('first-module-photo').setAttribute('src', modulesPhotoOne);
document.getElementById('second-module-photo').setAttribute('src', modulesPhotoTwo);
document.getElementById('third-module-photo').setAttribute('src', modulesPhotoThree);
const burger = document.getElementsByClassName('nav-buttons')[0];
let isNavOpened = false;
function toggleNavigation() {
  isNavOpened = !isNavOpened;
  openNavigation();
}
function resizeWindow() {
  isNavOpened = false;
  openNavigation();
}
function openNavigation() {
  if (window.innerWidth < 890 && isNavOpened) {
    burger.classList.toggle('nav-buttons_close');
    if (burger.classList.contains('nav-buttons_close')) {
      document.getElementsByTagName('body')[0].style.overflow = 'hidden';
      document.getElementsByClassName('nav')[0].classList.toggle('nav_full');
      document.getElementsByClassName('nav-mobile')[0].classList.toggle('nav-mobile_open');
    } else {
      document.getElementsByTagName('body')[0].style.overflow = 'initial';
      document.getElementsByClassName('nav')[0].classList.toggle('nav_full');
      document.getElementsByClassName('nav-mobile')[0].classList.toggle('nav-mobile_open');
    }
  }
}
burger.addEventListener('click', () => toggleNavigation());
window.addEventListener('resize', () => resizeWindow());
