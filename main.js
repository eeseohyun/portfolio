var sectionLinks = document.querySelectorAll('.section-link');
const sections = document.querySelectorAll('section');

sectionLinks.forEach((link, index) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    sections.forEach((section, sectionIndex) => {
      if (sectionIndex === index) {
        section.classList.add('active');
      } else {
        section.classList.remove('active');
      }
    });
    resetSkills();
  });
});

// skills
const skillsSorts = document.querySelectorAll('.skills_sort li');
const skillLists = document.querySelectorAll('.skills_lists li');
let activeSkillsList = null;
skillsSorts.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    const category = item.getAttribute('data-category');

    const selectedList = document.querySelector(`.skills_lists.${category}`);

    if (activeSkillsList) {
      activeSkillsList.classList.remove('active');
    }
    if (selectedList) {
      selectedList.classList.toggle('active');
      activeSkillsList = selectedList;
    }

    skillsSorts.forEach((sortItem) => {
      sortItem.classList.remove('clicked');
    });
    item.classList.toggle('clicked');
  });
});

//클릭 스타일 리셋
function resetSkills() {
  skillLists.forEach((list) => {
    list.classList.remove('clicked');
  });
  skillsSorts.forEach((sortItem) => {
    sortItem.classList.remove('clicked');
  });
  if (activeSkillsList) {
    activeSkillsList.classList.remove('active');
    activeSkillsList = null;
  }
}

const matches = document.querySelectorAll('.match');
const modals = document.querySelectorAll('.modal_wrapper');
const btnCloses = document.querySelectorAll('.btn-close');

matches.forEach((match, index) => {
  match.addEventListener('mouseover', () => toggleActive(index));
  match.addEventListener('click', () => toggleModal(index));
});

btnCloses.forEach((btnClose, btnIdx) => {
  btnClose.addEventListener('click', (e) => {
    e.preventDefault();
    closeModal(btnIdx);
  });
});

function toggleActive(index) {
  matches.forEach((other, otherIndex) => {
    other.classList.toggle('active', otherIndex === index);
  });
}

function toggleModal(index) {
  modals.forEach((modal, modalIndex) => {
    modal.classList.toggle('open', modalIndex === index);
  });
}

function closeModal(index) {
  modals[index].classList.remove('open');
}

//이미지 슬라이드
function imageSlider(parent, images) {
  let currentImage = 0;
  let slider = {
    parent: parent,
    images: parent.querySelector('.images'),
    backBtn: parent.querySelector('.back-btn'),
    nextBtn: parent.querySelector('.next-btn'),
  };
  slider.images.innerHTML = images
    .map((image) => {
      return `<img src="${image}" />`;
    })
    .join('');

  let imageNodes = slider.images.querySelectorAll('img');
  imageNodes[currentImage].classList.add('active');

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

let mountaineerImages = [
  'img/mountaineer1.png',
  'img/mountaineer2.png',
  'img/mountaineer3.png',
  'img/mountaineer4.png',
  'img/mountaineer5.png',
  'img/mountaineer6.png',
];

let twtImages = [
  'img/twt1.png',
  'img/twt2.png',
  'img/twt3.png',
  'img/twt4.png',
  'img/twt5.png',
  'img/twt6.png',
  'img/twt7.png',
];

let daengImages = [
  'img/댕근이다옹1.png',
  'img/댕근이다옹2.png',
  'img/댕근이다옹3.png',
  'img/댕근이다옹4.png',
  'img/댕근이다옹5.png',
  'img/댕근이다옹6.png',
  'img/댕근이다옹7.png',
];

imageSlider(document.querySelector('.TWT .image_slider'), twtImages);
imageSlider(
  document.querySelector('.Mountaineer .image_slider'),
  mountaineerImages
);
imageSlider(
  document.querySelector('.DangGeuneDaong .image_slider'),
  daengImages
);
