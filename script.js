// ============================================================
//  script.js — TechUsados
//  Interactividad de los botones "Consultar disponibilidad"
// ============================================================


// Esperamos a que el HTML esté completamente cargado antes
// de buscar cualquier elemento en el DOM.
document.addEventListener('DOMContentLoaded', function () {

  // 1. Seleccionamos TODOS los botones/links dentro de las tarjetas.
  //    querySelectorAll devuelve una NodeList con todos los <a>
  //    que sean hijos directos de un <article>.
  const botonesConsulta = document.querySelectorAll('article a');

  // 2. Recorremos cada botón y le asignamos un listener de clic.
  botonesConsulta.forEach(function (boton) {

    boton.addEventListener('click', function (evento) {

      // 3. Prevenimos la navegación del enlace (<a href="#contacto">)
      //    para que la página no haga scroll antes del alert.
      evento.preventDefault();

      // 4. Mostramos la alerta solicitada.
      alert('Redirigiendo a WhatsApp para consultar sobre este equipo...');

      // ------------------------------------------------------------
      // 💡 BONUS — Redireccion real a WhatsApp (opcional por ahora)
      //    Cuando tengas un número real, descomenta estas líneas,
      //    reemplaza TUNUMERO por el número con código de país
      //    (ej: 573001234567) y borra el alert() de arriba.
      // ------------------------------------------------------------
      // const numero  = '3233281133';
      // const modelo  = boton.closest('article').querySelector('h3').textContent;
      // const mensaje = encodeURIComponent(`Hola! Me interesa el ${modelo}. ¿Está disponible?`);
      // window.open(`https://wa.me/${numero}?text=${mensaje}`, '_blank');

    });
  });

});