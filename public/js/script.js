$(document).ready(function () {
  const $navItems = $('.nav-item');
  const $menuButton = $('#menu-button');
  const $mobileMenu = $('#mobile-menu');
  const $navbar = $('#navbar');
  const $logo = $('img[alt="Logo"]');

  // Set default styles on page load
  $navItems.addClass('border-2 border-yellow-500 bg-gray-800 text-white hover:bg-white hover:text-black');

  // Function to toggle the mobile menu visibility
  function toggleMobileMenu() {
    $mobileMenu.toggleClass('hidden'); // Toggle visibility of mobile menu links
    $navItems.toggleClass('hidden'); // Hide or show normal nav items based on menu visibility
  }

  // Handle mobile menu toggle click event
  $menuButton.on('click', toggleMobileMenu);

  // Function to check screen size and toggle visibility of nav items
  function checkScreenSize() {
    if ($(window).width() < 768) { // Adjust breakpoint as needed
      $navItems.addClass('hidden'); // Hide normal nav items on small screens
      $menuButton.removeClass('hidden'); // Show menu button
      $mobileMenu.addClass('hidden'); // Hide mobile menu by default
    } else {
      $navItems.removeClass('hidden'); // Show normal nav items on larger screens
      $menuButton.addClass('hidden'); // Hide menu button
      $mobileMenu.addClass('hidden'); // Hide mobile menu by default
    }
  }

  // Initial check on page load and resize
  checkScreenSize();
  $(window).on('resize', checkScreenSize);

  $(window).on('scroll', function () {
    const scrolled = $(window).scrollTop() > 50;

    // Adjust navbar styles based on scroll position
    $navbar.toggleClass('bg-gray-300 shadow-xl text-black', scrolled);
    $navbar.toggleClass('bg-gray-800 text-white', !scrolled);
    
    // Change logo based on scroll position
    const logoSrc = scrolled ? './public/images/logo-scrolled.png' : './public/images/logo.png';
    $logo.attr('src', logoSrc);

    // Adjust nav-item styles based on scroll position
    if (scrolled) {
      $navItems.removeClass('border-yellow-500 bg-gray-800 text-white hover:bg-white hover:text-black')
               .addClass('border-black bg-gray-200 text-black hover:bg-gray-800 hover:text-white');
    } else {
      $navItems.removeClass('border-black bg-gray-200 text-black hover:bg-gray-800 hover:text-white')
               .addClass('border-2 border-yellow-500 bg-gray-800 text-white hover:bg-white hover:text-black');
    }
  });

  // Handle hover effects for nav items
  $navItems.hover(
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
