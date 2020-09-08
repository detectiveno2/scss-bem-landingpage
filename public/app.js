const classArr = [
  { text: 'Stress', class: 'hero__title--stress' },
  { text: 'Money', class: 'hero__title--money' },
  { text: 'Time', class: 'hero__title--time' },
];

// Get elements.
const burgerBtn = document.querySelector('.nav-bar__burger-btn');
const fixedNav = document.querySelector('.fixed-nav-wrapper');
const overLay = document.querySelector('.over-lay');
const titleAnimate = document.querySelector('.hero__title--animate');

// Event listener.
burgerBtn.addEventListener('click', showMenu);
overLay.addEventListener('click', hideMenu);

// Handle functions.
function showMenu() {
  fixedNav.classList.add('fixed-nav-wrapper--show');
  overLay.classList.add('over-lay--show');
}

function hideMenu() {
  fixedNav.classList.remove('fixed-nav-wrapper--show');
  overLay.classList.remove('over-lay--show');
}

function changeText() {
  let i = 0;

  setInterval(() => {
    if (i > classArr.length - 1) i = 0;
    titleAnimate.className = autoConvertClass(titleAnimate.className, i);
    titleAnimate.textContent = classArr[i++].text;
  }, 2000);
}

function autoConvertClass(className, i) {
  const splitClassName = className.split(' ');
  splitClassName.splice(2, 1, classArr[i].class);
  const joinClassName = splitClassName.join(' ');
  const returnClass = joinClassName;

  return returnClass;
}

changeText();
