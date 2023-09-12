function getRepos() {
  fetch('https://api.github.com/users/1Ziad Etman1/repos')
    .then((response) => response.json())

    .then((repositories) => {
      repositories.forEach((repo) => {
        let repoName = document.createTextNode(repo.name)
        let Url = document.createElement('a')
        let urlText = document.createTextNode('Visit')
      })
    })
}

//Navbar Icon
let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x')
  navbar.classList.toggle('active')
}

// scroll sections
let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
  sections.forEach((section) => {
    let top = window.scrollY
    let offset = section.offsetTop - 100
    let height = section.offsetHeight
    let id = section.getAttribute('id')

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove('active')
        document
          .querySelector('header nav a[href*=' + id + ']')
          .classList.add('active')
      })
    }
  })

  let header = document.querySelector('header')

  header.classList.toggle('sticky', window.scrollY > 100)

  //Remove toggle icon and navbar when click navbar links
  menuIcon.classList.remove('bx-x')
  navbar.classList.remove('active')
}

// Dark light toggle
let root = document.querySelector(':root')

let rootStyles = getComputedStyle(root)

let bgColor = rootStyles.getPropertyValue('--bgColor')
let secBgColor = rootStyles.getPropertyValue('--secBgColor')
let textColor = rootStyles.getPropertyValue('--text')
let mainColor = rootStyles.getPropertyValue('--mainColor')

let darkModeBtn = document.querySelector('#dark-mode')

//   --bgColor: #081b29;
//   --secBgColor: #112e42;
//   --textColor: #ededed;
//   --mainColor: #00abf0;
// --bgColor: #f1f1f1;
// --secBgColor: #d7d7d7;
// --textColor: #2f2f2f;
// --mainColor: #0188be;

darkModeBtn.addEventListener('click', () => {
  if (darkModeBtn.classList.contains('bx-sun')) {
    root.style.setProperty('--bgColor', '#dcdcdc')
    root.style.setProperty('--secBgColor', '#cdcdcd')
    root.style.setProperty('--textColor', '#2f2f2f')
    root.style.setProperty('--mainColor', '#0188be')
    darkModeBtn.classList = 'bx bxs-moon'
  } else {
    root.style.setProperty('--bgColor', '#081b29')
    root.style.setProperty('--secBgColor', '#112e42')
    root.style.setProperty('--textColor', '#ededed')
    root.style.setProperty('--mainColor', '#00abf0')
    darkModeBtn.classList = 'bx bx-sun'
  }
})
