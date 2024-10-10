const ba1 = document.querySelector('.back1');
const ba2 = document.querySelector('.back2');

let positionX = 0;
const speed1 = 0.5; // Ajusta la velocidad del movimiento

function loopAnimatio() {
    positionX += speed1; // Incrementa la posición X
    ba1.style.backgroundPositionY = `${positionX}px`; // Cambia la posición de fondo
    requestAnimationFrame(loopAnimatio); // Llama de nuevo para hacer el loop
}

loopAnimatio(); // Inicia la animación

