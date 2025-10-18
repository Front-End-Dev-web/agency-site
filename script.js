let  hamburger_menu =document.querySelector('#hamburger a')
let nav_menu=document.getElementById('nav-menu')

hamburger_menu.addEventListener('click',()=>{
nav_menu.classList.toggle('active')
})