$(function () {
    $(window).scroll(function () {
      const windowHeight = $(window).height();
      const scroll = $(window).scrollTop();
  
      $('.photo').each(function () {
        const targetPosition = $(this).offset().top;
        if (scroll > targetPosition - windowHeight + 100) {
          $(this).addClass("is-fadein");
        }
      });
    });
  });