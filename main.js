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
