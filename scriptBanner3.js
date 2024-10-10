document.addEventListener('scroll', function() {
    const pas = document.querySelector('.pas img');
    const banner = document.querySelector('.banner-3');
    const efer = document.querySelector('.efer'); 
    const efecTitle2 = document.querySelector('.slogan');


    const bannerPositio = banner.getBoundingClientRect().top;
    const windowHeigh = window.innerHeight;

    // Detectar cuando el banner está en la mitad de la pantalla
    if (bannerPositio < windowHeigh / 2 && bannerPositio > 0) {
         // Cambia el fondo a rojo cuando el banner está en la mitad
        pas .classList.add('fall');
        efer.classList.add('start');
        efecTitle2.classList.add('animate__animated', 'animate__rubberBand');


    } else {
        pas .classList.remove('fall') ;// Eliminar la clase 'fall' cuando sale de la mitad de la pantalla
        efer.classList.remove('start');
        efecTitle2.classList.remove('animate__animated', 'animate__rubberBand');

        
    }

    
});




