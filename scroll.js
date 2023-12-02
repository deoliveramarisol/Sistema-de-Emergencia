// scroll.js

function scrollToBottom() {
    const windowHeight = window.innerHeight;
    const bodyHeight = document.body.scrollHeight;

    // Calcular la distancia que se debe desplazar hacia abajo
    const scrollDistance = bodyHeight - windowHeight;

    // Animación de desplazamiento suave
    window.scrollTo({
        top: scrollDistance,
        behavior: 'smooth'
    });
}
