const hojasBG = document.querySelector('.hojasBG-1');
const naranja = document.querySelector('.naranjas');
const detalles = document.querySelector('.detalle img');

let zoomLevel = 1;
let mouseX = 0;
let mouseY = 0;
let opacity = 1;

// Función que actualiza el transform y la opacidad con ambos efectos
function updateTransform() {
  hojasBG.style.transform = `translate(${mouseX * -100}px, ${mouseY * -100}px) scale(${zoomLevel})`;
  hojasBG.style.opacity = opacity;

  naranja.style.transform = `translate(${mouseX * 50}px, ${mouseY * 50}px) scale(${zoomLevel})`;
  naranja.style.opacity = opacity;

  detalles.style.transform = `translate(${mouseX * 15}px, ${mouseY * -9}px) scale(${zoomLevel})`;
  detalles.style.opacity = opacity;
}

// Efecto de zoom al hacer scroll con desvanecimiento
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  zoomLevel = 1 + scrollPosition / 800;
  opacity = 1 - scrollPosition / 800; // Actualiza la opacidad
  updateTransform();
});

// Efecto de movimiento del mouse
document.addEventListener('mousemove', (event) => {
  mouseX = (event.clientX / window.innerWidth) - 0.5;
  mouseY = (event.clientY / window.innerHeight) - 0.5;
  updateTransform();
});

//loop

let positionX = 0;
const speed = 0.5; // Ajusta la velocidad del movimiento

function loopAnimation() {
    positionX += speed; // Incrementa la posición X
    naranja.style.backgroundPositionY = `${positionX}px`; // Cambia la posición de fondo
    requestAnimationFrame(loopAnimation); // Llama de nuevo para hacer el loop
}

loopAnimation(); // Inicia la animación
