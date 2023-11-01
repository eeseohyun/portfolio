// document.addEventListener('DOMContentLoaded', () => {
//   var sectionLinks = document.querySelector('.section-link');
//   const sections = document.querySelector('section');

//   sectionLinks = Array.from(sectionLinks);

//   sectionLinks.forEach((link, index) => {
//     link.addEventListener('click', (e) => {
//       e.preventDefault();
//       sections.forEach((section) => {
//         section.style.display = 'none';
//       });

//       sections[index].style.display = 'block';
//     });
//   });
// });

const allSkillsLists = document.querySelectorAll('.skills_lists');
allSkillsLists.forEach((list) => {
  list.style.display = 'none';
});

const skillsSortItems = document.querySelectorAll('.skills_sort li');
skillsSortItems.forEach((item) => {
  item.addEventListener('click', () => {
    allSkillsLists.forEach((list) => {
      list.style.display = 'none';
    });

    const category = item.getAttribute('data-category');

    const selectedSkillsList = document.querySelector(
      `.skills_lists.${category}`
    );
    if (selectedSkillsList) {
      selectedSkillsList.style.display = 'block';
    }
  });
});

//match
const matchElements = document.querySelectorAll('.match');
const modalElements = document.querySelectorAll('.modal_wrapper');

matchElements.forEach((match, index) => {
  match.addEventListener('mouseover', (e) => {
    e.preventDefault();
    match.classList.toggle('active');

    matchElements.forEach((other, otherIndex) => {
      if (otherIndex !== index) {
        other.classList.remove('active');
      }
    });
  });
  match.addEventListener('click', (e) => {
    e.preventDefault();
    modalElements.forEach((modal, modalIndex) => {
      if (modalIndex === index) {
        modal.classList.toggle('open');
      }
    });
  });
});

function imageSlider(parent, images) {
  let currentImage = 0;
  let slider = {
    parent: parent,
    images: parent.querySelector('.images'),
    thumbnails: parent.querySelector('.thumbnails'),
    backBtn: parent.querySelector('.back-btn'),
    nextBtn: parent.querySelector('.next-btn'),
  };

  slider.images = parent.querySelector('.images');
  slider.thumbnails = parent.querySelector('.thumbnails');

  slider.images.innerHTML = images
    .map((image) => {
      return `<img src="${image}" />`;
    })
    .join('');

  let imageNodes = slider.images.querySelectorAll('img');
  imageNodes[currentImage].classList.add('active');

  slider.thumbnails.innerHTML = slider.images.innerHTML;

  let thumbnailNodes = slider.thumbnails.querySelectorAll('img');
  thumbnailNodes[currentImage].classList.add('active');

  for (let i = 0; i < thumbnailNodes.length; i++) {
    thumbnailNodes[i].addEventListener('click', function () {
      slider.thumbnails.querySelector('img.active').classList.remove('active');
      imageNodes[currentImage].classList.remove('active');
      currentImage = i;
      imageNodes[currentImage].classList.add('active');
      thumbnailNodes[currentImage].classList.add('active');
    });
  }

  slider.backBtn.addEventListener('click', function () {
    imageNodes[currentImage].classList.remove('active');
    currentImage--;
    if (currentImage < 0) {
      currentImage = images.length - 1;
    }
    imageNodes[currentImage].classList.add('active');
    slider.thumbnails.querySelector('img.active').classList.remove('active');
    thumbnailNodes[currentImage].classList.add('active');
  });

  slider.nextBtn.addEventListener('click', function () {
    imageNodes[currentImage].classList.remove('active');
    currentImage = (currentImage + 1) % images.length;
    imageNodes[currentImage].classList.add('active');
    slider.thumbnails.querySelector('img.active').classList.remove('active');
    thumbnailNodes[currentImage].classList.add('active');
  });
}

let images = [
  'img/mountaineer1.png',
  'img/mountaineer2.png',
  'img/mountaineer3.png',
  'img/mountaineer4.png',
  'img/mountaineer5.png',
  'img/mountaineer6.png',
];

imageSlider(document.querySelector('.image_slider'), images);
