// MENU MOBILE
const menuMobile = document.querySelector('#icon')
const nav = document.querySelector('#nav-list')
const bars = document.querySelector('#bars')
const times = document.querySelector('#times')
const header = document.querySelector('#header-fixed')

menuMobile.addEventListener("click", () => {
  nav.classList.toggle('show')
  header.classList.add('fixed')
})

bars.addEventListener("click", () =>{
  times.style.display = 'block'
  bars.style.display = 'none'
})

times.addEventListener("click", () => {
  bars.style.display = 'block'
  times.style.display = 'none'
})

const links = document.querySelectorAll('#nav-list li a')

for(link of links){
  link.addEventListener("click", () =>{
    nav.classList.remove('show')
    header.classList.remove('fixed')
    times.style.display = 'none'
    bars.style.display = 'block'
  })
}