const hojasBG = document.querySelector('.hojasBG-1');
const naranja = document.querySelector('.naranjas');
const detalles = document.querySelector('.detalle img');


// -----------------preload de la pag

const container = document.getElementById('preLoader');
let orangeCount = 0;
const maxOranges = 50; // Número máximo de naranjas que caerán

// Función para crear una naranja
function createOrange() {
    if (orangeCount >= maxOranges) return; // Detener si se alcanza el límite

    let orange = document.createElement('div');
    orange.classList.add('orange');
    
    const randomOrange = Math.floor(Math.random() * 3) + 1;
    orange.classList.add(`orange${randomOrange}`);
    
    const randomX = Math.random() * window.innerWidth;
    orange.style.left = `${randomX}px`;

    const randomSize = Math.random() * (200 - 30) + 30; // Entre 30px y 300px
    orange.style.width = `${randomSize}px`;
    orange.style.height = `${randomSize}px`;

    const randomDuration = Math.random() * 0.2 + 0.7; // Entre 0.7 y 0.9 segundos
    orange.style.animationDuration = `${randomDuration}s`;

    // Asignar una rotación aleatoria
    const randomRotation = Math.random() * 860; // Entre 0 y 360 grados
    orange.style.transform = `rotate(${randomRotation}deg)`;

    container.appendChild(orange);

    orangeCount++; // Aumentar contador de naranjas

    // Eliminar la naranja después de la animación
    setTimeout(() => {
        orange.style.transition = 'opacity 0.9s ease-out';
        orange.style.opacity = '0'; // Hacer que desaparezca
        setTimeout(() => {
            orange.remove();
        }, 1000); // Espera a que la opacidad sea 0 antes de eliminarla
    }, randomDuration * 50);
}

// Crear naranjas de manera continua cada cierto tiempo hasta alcanzar el límite
const interval = setInterval(() => {
    createOrange();

    if (orangeCount >= maxOranges) {
        clearInterval(interval); // Detener la creación de naranjas al llegar al límite
    }
}, 30); // Crear una naranja nueva cada 29ms


//--------------------fin







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
