if(jQuery('#services-carousel').length){
  jQuery('#services-carousel').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      autoplay: false,
      appendDots: '.services .slider-dots',
      respondTo: 'slider',
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
        respondTo: 'slider',
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
        respondTo: 'slider',
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
        respondTo: 'slider',
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
  