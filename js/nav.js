let anchorLinks = document.querySelectorAll('.ref__down');

for (let anchorLink of anchorLinks) {
  anchorLink.addEventListener('click', function (e) {
    e.preventDefault ();

    let linkId = anchorLink.getAttribute('href');

    document.querySelector(linkId).scrollIntoView ({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

let sections = document.querySelectorAll('.section__link');

for (let section of sections) {
  section.addEventListener('click', function (e) {
    e.preventDefault ()

    let sectionId = section.getAttribute('href');

    document.querySelector(sectionId).scrollIntoView ({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

let upButton = document.querySelector('.up-button');

window.onscroll = function () {
  if (window.pageYOffset > 200) {
    upButton.classList.add('up-button--shown');
  } else {
    upButton.classList.remove('up-button--shown');
  }
};
