const btnEffects = document.querySelectorAll('.btn');

// scroll event
window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.block.one').style.animationName = 'fade-in';
});

// scroll and effect

window.addEventListener('scroll', () => {
  let scrollFade = (elFade, fadeName) => {
    if (elFade.getBoundingClientRect()['top'] < innerHeight) {
      elFade.style.animationName = fadeName;
    }
  };
  Array.from(document.querySelectorAll('.block:not(.one)')).forEach((blockEl) =>
    scrollFade(blockEl, 'fade-in')
  );
  Array.from(document.querySelectorAll('.block-imgs img')).forEach((imgEl) =>
    scrollFade(imgEl, 'fade-in')
  );
  scrollFade(document.querySelector('.block1'), 'fade-in-b');
  scrollFade(document.querySelector('.block5'), 'fade-in-b');
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
