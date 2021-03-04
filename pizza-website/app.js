// redesign nav
const lineForMenu = document.querySelector('.height');
const menu = document.querySelector('.menu');

// animation on reload
const loading = document.querySelector('#loader');

// hamburger

const hamburger = document.querySelector('.hamburger');

// close menu on click/touch on small media screen

const bodyNav = document.querySelector('body nav');

// redesign nav

const stickyNav = () => {
  window.addEventListener('scroll', () => {
    const top = window.pageYOffset;
    if (top > 100) {
      lineForMenu.style.height = '45px';
      lineForMenu.style.boxShadow = '0px 0px 5px';
      menu.style.top = '45px';
      menu.style.transition = 'top 0.3s ease-in-out';
      hamburger.style.transform = 'translate(-50%, 7%)';
    } else {
      lineForMenu.style.height = '54px';
      lineForMenu.style.boxShadow = 'unset';
      menu.style.top = '54px';
      menu.style.transition = 'top 0.3s ease-in-out';
      hamburger.style.transform = 'translate(-50%, 30%)';
    }
  });
};

stickyNav();

// animation on reload

const onReload = () => {
  window.addEventListener('load', () => {
    setTimeout(function () {
      loading.style.display = 'none';
    }, 2200);
  });
};

onReload();

// section 1 slider

const sliderSection1 = () => {
  $('.center').slick({
    dots: false,
    infinite: false,
    centerMode: false,
  });
};

sliderSection1();

// hamburger

const showMenuOnMObile = () => {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('changeHamburger');
    menu.classList.toggle('openMenu');
    menu.style.transition = 'transform 0.3s ease-in-out';
  });
};

showMenuOnMObile();

// close menu on click/touch on small media screen

const closeMenuOutside = () => {
  document.addEventListener('click', (e) => {
    if (bodyNav.contains(e.target)) {
      // ok
    } else {
      hamburger.classList.remove('changeHamburger');
      menu.classList.remove('openMenu');
      menu.style.transition = 'transform 0.3s ease-in-out';
    }
  });
};

closeMenuOutside();
