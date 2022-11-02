
//Accordion
document.querySelectorAll('.accordion-wrapper').forEach((el) => {
  el.addEventListener('click', () => {
    let accordionImg = el.querySelector('.accordion-img')
    let content = el.querySelector('.content')
    let arrow = el.querySelector('.accordion-arrow')

    if(content.style.maxHeight) {
      document.querySelectorAll('.content').forEach((el) => el.style.maxHeight = null)
    } else {
      document.querySelectorAll('.content').forEach((el) => el.style.maxHeight = null)
      content.style.maxHeight = content.scrollHeight + 'px' 
    }
    if(arrow.style.transform) {
      document.querySelectorAll('.accordion-arrow').forEach((el) => el.style.transform = null)
    } else {
      document.querySelectorAll('.accordion-arrow').forEach((el) => el.style.transform = null)
      arrow.style.transform = 'rotate(40deg)'
    }
    if(accordionImg.style.display) {
      document.querySelectorAll('.accordion-img').forEach((el) => el.style.display = null)
    } else {
      document.querySelectorAll('.accordion-img').forEach((el) => el.style.display = null)
      accordionImg.style.display = 'block'
    }
    if(accordionImg.style.opacity) {
      document.querySelectorAll('.accordion-img').forEach((el) => el.style.opacity = null)
    } else {
      document.querySelectorAll('.accordion-img').forEach((el) => el.style.opacity = null)
      accordionImg.style.opacity = '1'
    }
    if(accordionImg.style.visibility) {
      document.querySelectorAll('.accordion-img').forEach((el) => el.style.visibility = null)
    } else {
      document.querySelectorAll('.accordion-img').forEach((el) => el.style.visibility = null)
      accordionImg.style.visibility = 'visible'
    }
    }
  )
})

//Burger-menu
let burgerButton = document.querySelector('.burger-button');
let burgerMenu = document.querySelector('.burger-menu');
let pageMain = document.querySelector('.page-main')

burgerButton.addEventListener('click', mobileMenu);

function mobileMenu() {
  burgerMenu.classList.toggle('active');
  burgerButton.classList.toggle('active');
  pageMain.classList.toggle('page-shadow');
}

const navLink = document.querySelectorAll ('.site-navigation__item');

navLink.forEach(n => n.addEventListener('click', closeMenu));

function closeMenu() {
  burgerMenu.classList.remove('active');
  burgerButton.classList.remove('active');
  pageMain.classList.remove('page-shadow');
}