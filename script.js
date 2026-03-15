// ============================================================
//  script.js — TechUsados
//  Maneja: botones de consulta (iPhones) + compra (Android)
//          + filtro de marcas (Android)
// ============================================================

document.addEventListener('DOMContentLoaded', function () {

  // ----------------------------------------------------------
  // 1. BOTONES "CONSULTAR DISPONIBILIDAD" — página iPhones
  //    Selecciona todos los <a class="btn-consultar"> dentro de
  //    un <article> y muestra la alerta de WhatsApp.
  // ----------------------------------------------------------
  const botonesConsulta = document.querySelectorAll('article a.btn-consultar');

  botonesConsulta.forEach(function (boton) {
    boton.addEventListener('click', function (e) {
      e.preventDefault();
      alert('Redirigiendo a WhatsApp para consultar sobre este equipo...');

      // ── Descomenta cuando tengas número real ──
      // const numero  = '573001234567';
      // const modelo  = boton.closest('article').querySelector('h3').textContent;
      // const mensaje = encodeURIComponent(`Hola! Me interesa el ${modelo}. ¿Está disponible?`);
      // window.open(`https://wa.me/${numero}?text=${mensaje}`, '_blank');
    });
  });


  // ----------------------------------------------------------
  // 2. BOTONES "CONSULTAR / COMPRAR" — página Android
  //    Usa data-modelo y data-precio para personalizar el
  //    mensaje de la alerta con el equipo específico.
  // ----------------------------------------------------------
  const botonesComprar = document.querySelectorAll('button.btn-comprar');

  botonesComprar.forEach(function (boton) {
    boton.addEventListener('click', function () {
      const modelo = boton.dataset.modelo;
      const precio = boton.dataset.precio;

      // Alerta personalizada con el modelo y precio del equipo
      alert(
        `¡Excelente elección!\n\n` +
        `Equipo: ${modelo}\n` +
        `Precio: ${precio} COP\n\n` +
        `Redirigiendo a WhatsApp para confirmar disponibilidad...`
      );

      // ── Descomenta cuando tengas número real ──
      // const numero  = '573001234567';
      // const mensaje = encodeURIComponent(
      //   `Hola! Quiero el ${modelo} a ${precio}. ¿Está disponible?`
      // );
      // window.open(`https://wa.me/${numero}?text=${mensaje}`, '_blank');
    });
  });


  // ----------------------------------------------------------
  // 3. FILTRO DE MARCAS — solo activo en androids.html
  //    Muestra/oculta tarjetas según el atributo data-marca.
  // ----------------------------------------------------------
  const filtros = document.querySelectorAll('.filtro-btn');

  if (filtros.length > 0) {

    filtros.forEach(function (btn) {
      btn.addEventListener('click', function () {

        // Actualiza el estado visual del botón activo
        filtros.forEach(function (b) { b.classList.remove('filtro-btn--activo'); });
        btn.classList.add('filtro-btn--activo');

        const marcaSeleccionada = btn.dataset.marca;
        const tarjetas = document.querySelectorAll('.producto-card[data-marca]');

        tarjetas.forEach(function (tarjeta) {
          if (marcaSeleccionada === 'todos' || tarjeta.dataset.marca === marcaSeleccionada) {
            // Mostrar con animación suave
            tarjeta.style.display = 'flex';
            // Pequeño delay para que el reflow ocurra antes de la animación
            requestAnimationFrame(function () {
              tarjeta.style.opacity  = '1';
              tarjeta.style.transform = 'translateY(0) scale(1)';
            });
          } else {
            // Ocultar
            tarjeta.style.opacity   = '0';
            tarjeta.style.transform = 'translateY(8px) scale(0.97)';
            // Espera que termine la transición CSS antes de hacer display:none
            setTimeout(function () {
              if (tarjeta.style.opacity === '0') {
                tarjeta.style.display = 'none';
              }
            }, 280);
          }
        });

      });
    });

  } // fin if filtros

}); // fin DOMContentLoaded
