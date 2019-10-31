// STICKY BAR DISPLAY

  const navbar = document.querySelector('.stick-nav');
  const hiddenDiv = document.getElementById('hidden-div');

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
