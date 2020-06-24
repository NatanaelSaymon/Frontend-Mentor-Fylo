// MENU MOBILE
const menuMobile = document.querySelector('#icon')
const nav = document.querySelector('#nav-list')
const i = document.querySelector('#hamburguer')
const fechar = document.querySelector('#block')

menuMobile.addEventListener("click", () => {
  nav.classList.toggle('show')
})

i.addEventListener("click", () =>{
  fechar.style.display = 'block'
  i.style.display = 'none'
})

fechar.addEventListener("click", () => {
  i.style.display = 'block'
  fechar.style.display = 'none'
})

const links = document.querySelectorAll('#nav-list li a')

for(link of links){
  link.addEventListener("click", () =>{
    nav.classList.remove('show')
  })
}