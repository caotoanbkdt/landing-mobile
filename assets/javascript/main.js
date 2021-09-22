const btnEffect = document.querySelector('.nav-bar .btn');

const spanEffect = document.querySelector('.nav-bar .btn span');

btnEffect.addEventListener('mouseover', () => {
  spanEffect.style.animationName = 'effectButtonMoveIn';
});

btnEffect.addEventListener('mouseout', () => {
  spanEffect.style.animationName = 'effectButtonMoveOut';
});
