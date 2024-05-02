window.onload = function() {
  // Change background color of navbar when scrolled
  window.onscroll = function() {
    var navbar = document.getElementById('navbar');
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      navbar.style.backgroundColor = "#111";
    } else {
      navbar.style.backgroundColor = "#333";
    }
  };

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Highlight active menu item on scroll
  window.addEventListener('scroll', function(event) {
    var sections = document.querySelectorAll('.social-media-section');
    var scrollPosition = window.scrollY;

    sections.forEach(function(section) {
      var id = section.getAttribute('id');
      var navLink = document.querySelector('a[href="#' + id + '"]');

      if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
        navLink.classList.add('active');
      } else {
        navLink.classList.remove('active');
      }
    });
  });

  // Toggle responsive menu for smaller screens
  var menuIcon = document.getElementById('menu-icon');
  var menuItems = document.getElementById('menu-items');

  menuIcon.addEventListener('click', function() {
    menuItems.classList.toggle('show');
  });
};
