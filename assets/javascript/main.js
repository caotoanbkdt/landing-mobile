const btnEffects = document.querySelectorAll('.btn');

// scroll event
window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.block .one').style.animationName = 'fade-in';
});

// header when scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    document.querySelector('header').style.top = '-50px';
  } else {
    document.querySelector('header').style.top = '0px';
  }
});

//  button effect
btnEffects.forEach((btnEffect) => {
  btnEffect.addEventListener('mouseover', () => {
    btnEffect.firstElementChild.style.animationName = 'effectButtonMoveIn';
  });

  btnEffect.addEventListener('mouseout', () => {
    btnEffect.firstElementChild.style.animationName = 'effectButtonMoveOut';
  });
});
