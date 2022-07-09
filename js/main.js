









const mobileMenuOpen = document.querySelector('.open');
const mobileMenuClose = document.querySelector('.close');
const mobileMenuOpenLink = document.querySelector('#open-menu');
const mobileMenuCloseLink = document.querySelector('#close-menu');
const navigator = document.querySelector('.nav-link-wrapper')
const logoFile = document.querySelector('.logo');
// const fullName = document.querySelector('.full-name');
const heroIcons = document.querySelector('.hero-media-wrapper');
const pseudoDownload = document.querySelector('.hero-btns-wrapper-pseudo')


mobileMenuOpenLink.addEventListener('click', () => {
    mobileMenuOpen.classList.toggle('activated');
    mobileMenuClose.classList.remove('activated');
    navigator.style.display = "flex";
    heroIcons.style.display = "none";
    logoFile.style.display = "flex";
    pseudoDownload.style.dispay = "block";
    // fullName.style.font = "28px";
})

mobileMenuCloseLink.addEventListener('click', () => {
    mobileMenuClose.classList.toggle('activated');
    mobileMenuOpen.classList.remove('activated');
    navigator.style.display = "none";
    heroIcons.style.display = "block";
    logoFile.style.display = "none";
    pseudoDownload.style.display = "none";
})


// function openMenu(e) {
//     // document.getElementsById('open-menu').style.display = "none";
//     e.preventDefault();
// }

// function closeMenu(e) {
//     // document.getElementsById('close-menu').style.display = "none";
//     e.preventDefault();
// }


//  function (e) {
//     mobileMenuOpen.style.display = "none";
// }