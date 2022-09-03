window.onload = function (){
    const hamburger = document.querySelector('#hamburger')
    const header = document.querySelector('header')
    const mobileMenu = document.querySelector('#mobile-menu')
    const overlay = document.querySelector('.overlay')
    hamburger.addEventListener('click', function (){
        
        if(header.classList.contains('open')) {
            header.classList.remove('open') 
            overlay.classList.remove('fade-in')
            overlay.classList.add('fade-out')
            mobileMenu.classList.remove('fade-in') 
            mobileMenu.classList.add('fade-out') 
        }else {
                header.classList.add('open')
                overlay.classList.remove('fade-out')
                overlay.classList.add('fade-in')
                mobileMenu.classList.add('fade-in')
                mobileMenu.classList.remove('fade-out') 
        }
    })
}