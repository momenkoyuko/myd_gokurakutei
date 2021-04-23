$(function(){
  $('#rec-slick').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplayspeed: 5000,
    arrows: false,
    centerPadding: '100px',
    centerMode: true,
      responsive: [
        {
          breakpoint: 767,
          settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: 0,
          centerMode: true,
          }
        }
      ]
  });
});

$(function(){
  $('#nav-btn').on('click',function(){
    $(this).toggleClass('-active');
    $('#nav').toggleClass('-active');
  });
});

$(function(){
  $('.js-accordion').on('click', function(){
    $(this).next().slideToggle();
  });
});

$(function(){
  new WOW().init();
});