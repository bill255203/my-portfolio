const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

const images = document.querySelectorAll('img');

//images iteration
const imageFiles = ['bill1.png', 'bill2.png'];
const slideshow = document.getElementById('slideshow');
let currentIndex = 0;
const image = document.createElement('img');
image.setAttribute('src', `img/${imageFiles[0]}`);
slideshow.appendChild(image);
currentIndex = 1;
setTimeout(() => {
  image.style.filter = 'grayscale(0%)';
}, 500);
setTimeout(() => {
  image.style.filter = 'grayscale(100%)';
}, 2500);
setTimeout(() => {
  slideshow.removeChild(image);
}, 3000);

const interval = setInterval(() => {
  const image = document.createElement('img');
  image.setAttribute('src', `img/${imageFiles[currentIndex]}`);
  slideshow.appendChild(image);
  currentIndex++;
  if (currentIndex >= imageFiles.length) {
    currentIndex = 0;
  }
  setTimeout(() => {
    image.style.filter = 'grayscale(0%)';
  }, 200);

  // set grayscale filter after a delay
  setTimeout(() => {
    image.style.filter = 'grayscale(100%)';
  }, 2800);

  setTimeout(() => {
    slideshow.removeChild(image);
  }, 3000);
}, 3000);

function PageTransitions() {
  //button click active class
  for (let i = 0; i < sectBtn.length; i++) {
    sectBtn[i].addEventListener('click', function () {
      let currentBtn = document.querySelectorAll('.active-btn');
      currentBtn[0].className = currentBtn[0].className.replace(
        'active-btn',
        ''
      );
      //need space here
      this.className += ' active-btn';
    });
  }
  //sections active class
  allSections.addEventListener('click', (e) => {
    const id = e.target.dataset.id;
    if (id) {
      //remove selected from the other btns
      sectBtns.forEach((btn) => {
        btn.classList.remove('active');
      });
      e.target.classList.add('active');
      sections.forEach((section) => {
        section.classList.remove('active');
      });
      const element = document.getElementById(id);
      element.classList.add('active');
    }
  });
  //theme here
  const themeBtn = document.querySelector('.theme-btn');
  themeBtn.addEventListener('click', () => {
    let element = document.body;
    element.classList.toggle('light-mode');
  });
}
PageTransitions();
