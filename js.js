function confirmar() {
  // Lanzamos el confeti
  confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 },
    ticks: 200
  });

  setTimeout(() => {
    window.location.href = "https://wa.link/2p4u0v";  // ← Cambia esta URL por la que quieras
  }, 1000); // 1 segundo de delay antes de redirigir
}