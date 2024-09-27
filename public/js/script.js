$(document).ready(function () {
  // Set default styles on page load
  $('.nav-item').addClass('border-2 border-yellow-500 bg-gray-800 text-white hover:bg-white hover:text-black');

  $(window).scroll(function () {
    const scrolled = $(window).scrollTop() > 50;

    // Adjust navbar classes based on scroll position
    $('#navbar').toggleClass('bg-gray-300 shadow-xl text-black', scrolled);
    $('#navbar').toggleClass('bg-gray-800 text-white', !scrolled);
    
    // Change logo based on scroll position
    const logoSrc = scrolled ? './images/logo-scrolled.png' : './images/logo.png';
    $('img[alt="Logo"]').attr('src', logoSrc);

    // Adjust nav-item styles based on scroll position
    if (scrolled) {
      $('.nav-item').removeClass('border-yellow-500 bg-gray-800 text-white hover:bg-white hover:text-black');
      $('.nav-item').addClass('border-black bg-gray-200 text-black hover:bg-gray-800 hover:text-white');
    } else {
      $('.nav-item').removeClass('border-black bg-gray-200 text-black hover:bg-gray-800 hover:text-white');
      $('.nav-item').addClass('border-2 border-yellow-500 bg-gray-800 text-white hover:bg-white hover:text-black');
    }
  });

  // Handle hover effects for nav items
  $('.nav-item').hover(
    function () {
      if (!$(this).hasClass('bg-gray-200')) {
        $(this).find('a').addClass('text-black');
      }
    },
    function () {
      if (!$(this).hasClass('bg-gray-200')) {
        $(this).find('a').removeClass('text-black');
      }
    }
  );
});
