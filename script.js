let btnNo = document.getElementById("btnNo");
let btnSi = document.getElementById("btnSi");
const mensajeFinal = document.getElementById("mensajeFinal");
const titulo = document.querySelector('h1');

btnSi.addEventListener("click", () => {
    // Ocultar elementos
    btnSi.classList.add('d-none');
    btnNo.classList.add('d-none');
    titulo.classList.add('d-none');
    
    // Mostrar mensaje final
    mensajeFinal.classList.remove('d-none');
    
    // Lanzar confeti
    const confettiSettings = { particleCount: 300, spread: 180, startVelocity: 30 };
    confetti(confettiSettings);
    
    // Efectos adicionales de confeti
    setTimeout(() => {
        confetti({
            angle: 60,
            spread: 80,
            origin: { x: 0 }
        });
        confetti({
            angle: 120,
            spread: 80,
            origin: { x: 1 }
        });
    }, 250);

    createHeartsBurst(30);
});

// Función para crear corazones
function createHeartsBurst(count) {
    const container = document.getElementById('hearts-container');
    
    for (let i = 0; i < count; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.className = 'heart-bubble';
        
        // Posición inicial aleatoria
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.top = `${window.innerHeight - 50}px`;
        
        // Configuración de animación única para cada corazón
        heart.style.animation = `float ${4 + Math.random() * 2}s ease-out forwards`;
        heart.style.fontSize = `${15 + Math.random() * 15}px`;
        
        // Eliminar el corazón después de la animación
        heart.addEventListener('animationend', () => {
            heart.remove();
        });

        container.appendChild(heart);
        
        // Retraso aleatorio para efecto más natural
        setTimeout(() => {
            heart.style.animationPlayState = 'running';
        }, Math.random() * 500);
    }
}

// Configuración inicial de posición
btnNo.style.position = 'relative';

btnNo.addEventListener("mouseover", function() {
    let maxWidth = window.innerWidth - btnNo.clientWidth;
    let maxHeight = window.innerHeight - btnNo.clientHeight;

    let btnSiRect = btnSi.getBoundingClientRect();
    let newX, newY;

    do {
        newX = Math.random() * maxWidth;
        newY = Math.random() * maxHeight;
    } while (
        newX > btnSiRect.left - 50 && newX < btnSiRect.right + 50 &&
        newY > btnSiRect.top - 50 && newY < btnSiRect.bottom + 50
    );

    btnNo.style.position = 'absolute'; // Solo aplica absoluto cuando se mueve
    btnNo.style.left = `${newX}px`;
    btnNo.style.top = `${newY}px`;

    let currentSize = parseFloat(window.getComputedStyle(btnSi).fontSize);
    btnSi.style.fontSize = `${currentSize * 1.5}px`;
});