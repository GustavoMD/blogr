import './styles.css';

let categories = document.querySelectorAll('.category');
let openMenuButton = document.querySelector('.open-menu-mobile-js');

openMenuButton.addEventListener('click', openMobileMenu);

categories.forEach(category => {
    category.addEventListener('click', e => {
        let openedCategory = document.querySelector('.category.is-open');
        category.classList.toggle('is-open')
        openedCategory ? openedCategory.classList.remove('is-open') : null;
    });
});


function openMobileMenu() {
    document.querySelector('.header__nav-wrapper').classList.toggle('is-open')
}