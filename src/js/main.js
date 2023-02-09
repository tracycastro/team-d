let currenthash = window.location.hash;

let navs = document.querySelectorAll('.nav__list li a');

document.addEventListener('click', function (event) {
  if (event.target.matches('.nav__list li a')) {
    let x = event.target.hash;
    for (let nav of navs) {
      if (x == nav.hash) {
        nav.classList.add('current');
      } else {
        nav.classList.remove('current');
      }
    }
  }
});

const cards = document.querySelector('.cards');
const toggleButton = document.querySelector('.toggle');
cards.classList.add('hide');

toggleButton.addEventListener('click', function (e, current) {
  e.preventDefault();
  cards.classList.toggle('hide');
  this.innerHTML == 'Click to Close Details'
    ? (toggleButton.innerHTML = 'Click Here to See Day by Day Details')
    : (toggleButton.innerHTML = 'Click to Close Details');
});

const sectionAll = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  const scrollY = window.pageYOffset;
  sectionAll.forEach((current) => {
    let navBar = document.querySelector('.site-head__inner');
    let x = navBar.clientHeight + 50;
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 175;

    const sectionID = current.getAttribute('id');
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector('li.internal a[href*="' + sectionID + '"]')
        .classList.add('active');
    } else {
      document
        .querySelector('li.internal a[href*="' + sectionID + '"]')
        .classList.remove('active');
    }
  });
});
