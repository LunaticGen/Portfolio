/* ====MENU SHOW==== */
const showMenu = (toggleId,navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId) 

    if(toggle && nav){
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('show');
        })
    }
}

showMenu('nav-toggle','nav-menu')

/* ====ACTIVE AND REMOVE MENU==== */
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    const navMenu = document.getElementById('nav-menu')
    navLink.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* ====SCROLL REVEAL ANIMATION==== */
