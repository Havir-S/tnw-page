// STICKY BAR DISPLAY

  const navbar = document.querySelector('.stick-nav'),
        hiddenDiv = document.getElementById('hidden-div');

window.onscroll = function() {
  checkStickyBar();
}

function checkStickyBar() {
  if (document.documentElement.scrollTop > 30) {
    hiddenDiv.classList.remove('hidden-menu');
  }
  if (document.documentElement.scrollTop < 30) {
    hiddenDiv.classList.add('hidden-menu');
  }
  console.log('ding');
}

// MOBILE MENU BAR START

const menuBarMobile = document.getElementById('menu-bar-mobile'),
      mobileMenu = document.getElementById('mobile-menu');

const menuMobile = function() {
  if (document.body.classList.contains('navMode')) {
    document.body.classList.remove('navMode');
    mobileMenu.classList.remove('mobile-menu-start');
    mobileMenu.classList.add('mobile-menu-end');

  } else {
    document.body.classList.add('navMode');
    mobileMenu.classList.remove('hidden');
    mobileMenu.classList.remove('mobile-menu-end');
    mobileMenu.classList.add('mobile-menu-start');
  }
}

mobileMenu.addEventListener('animationend', function() {
  if (!document.body.classList.contains("navMode")) {
    mobileMenu.classList.add('hidden');
  }
})

menuBarMobile.addEventListener('click', menuMobile);


// MOBILE MENU CLOSE

const closeMenuMobile = document.querySelector('.close-mobile-menu');

closeMenuMobile.addEventListener('click', menuMobile);
