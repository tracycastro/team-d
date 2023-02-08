let currenthash = window.location.hash;

let navs = document.querySelectorAll('.nav__list li a');

document.addEventListener('click', function (event) {
  if (event.target.matches('.nav__list li a')) {
    let x = event.target.hash;
    //   console.log(x);
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
  console.log('click');
  cards.classList.toggle('hide');
  this.innerHTML == 'Click to Close Details'
    ? (toggleButton.innerHTML = 'Click Here to See Day by Day Details')
    : (toggleButton.innerHTML = 'Click to Close Details');
});
