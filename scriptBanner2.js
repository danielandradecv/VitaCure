document.addEventListener('scroll', function() {
    const pastilla = document.querySelector('.pastilla img');
    const banner = document.querySelector('.banner-2');
    const vaso = document.querySelector('.vaso');
    const burbujas = document.querySelector('.svg');
    const efervescencia = document.querySelector('.efervescencia'); 
    const efectTitle = document.querySelector('.texto'); 


    const bannerPosition = banner.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // Detectar cuando el banner está en la mitad de la pantalla
    if (bannerPosition < windowHeight / 2 && bannerPosition > 0) {
         // Cambia el fondo a rojo cuando el banner está en la mitad
        pastilla.classList.add('fall');
        vaso.classList.add('fuel');
        burbujas.classList.add('start');
        efervescencia.classList.add('start');
        efectTitle.classList.add('start');
        efectTitle.classList.add('animate__animated', 'animate__bounce');





        
    } else {
        banner.style.backgroundColor = ''; // Vuelve al color original cuando no está en la mitad
        pastilla.classList.remove('fall'); // Eliminar la clase 'fall' cuando sale de la mitad de la pantalla
        vaso.classList.remove('fuel');
        burbujas.classList.remove('start');
        efervescencia.classList.remove('start');
        efectTitle.classList.remove('start')
        efectTitle.classList.remove('animate__animated', 'animate__bounce');;



    }

    
});


