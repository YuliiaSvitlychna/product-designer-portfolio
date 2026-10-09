if(jQuery('#services-carousel').length){
  jQuery('#services-carousel').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      autoplay: false,
      appendDots: '.services .slider-dots',
      respondTo: 'window',
      responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }
    ]
  });
}

if(jQuery('#portfolio').length){
    jQuery('#portfolio').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: false,
        appendDots: '.portfolio .slider-dots',
        respondTo: 'window',
        responsive: [
          {
              breakpoint: 992,
              settings: {
                  slidesToShow: 2
              }
          },
          {
              breakpoint: 768,
              settings: {
                  slidesToShow: 1
              }
          }
      ]
    });
}

if(jQuery('#reviews-carousel').length){
    jQuery('#reviews-carousel').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: false,
        appendDots: '.reviews .slider-dots',
        respondTo: 'window',
        responsive: [
          {
              breakpoint: 992,
              settings: {
                  slidesToShow: 2
              }
          },
          {
              breakpoint: 768,
              settings: {
                  slidesToShow: 1
              }
          }
      ]
    });
}

if(jQuery('#blog-post-carousel').length){
    jQuery('#blog-post-carousel').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: false,
        appendDots: '.blog-post .slider-dots.dark',
        respondTo: 'window',
        responsive: [
          {
              breakpoint: 992,
              settings: {
                  slidesToShow: 2
              }
          },
          {
              breakpoint: 768,
              settings: {
                  slidesToShow: 1
              }
          }
      ]
    });
}

const header = document.querySelector('.page-header');
const menuToggle = document.querySelector('.header-menu-toggle');

if (header && menuToggle) {
    const mobileMenu = window.matchMedia('(max-width: 767px)');

    function closeMenu() {
        header.classList.remove('menu-open');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Open menu');
    }

    menuToggle.addEventListener('click', function () {
        const isOpen = header.classList.toggle('menu-open');
        menuToggle.setAttribute('aria-expanded', String(isOpen));
        menuToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    });

    header.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            if (mobileMenu.matches && header.classList.contains('menu-open')) {
                closeMenu();
                menuToggle.focus({ preventScroll: true });
            }
        });
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && header.classList.contains('menu-open')) {
            closeMenu();
            menuToggle.focus({ preventScroll: true });
        }
    });

    document.addEventListener('click', function (event) {
        if (!header.contains(event.target)) {
            closeMenu();
        }
    });

    mobileMenu.addEventListener('change', function () {
        const focusedElement = document.activeElement;
        closeMenu();

        if (header.contains(focusedElement)) {
            const focusTarget = mobileMenu.matches ? menuToggle : header.querySelector('.header-logo a');
            focusTarget.focus({ preventScroll: true });
        }
    });
}
