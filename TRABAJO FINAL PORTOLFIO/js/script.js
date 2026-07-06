/* FORMULARIO */

const formulario = document.querySelector("#contacto");

if (formulario) {
  formulario.addEventListener("submit", function (evento) {
    let hayErrores = false;

    const nombre = document.querySelector("#nombre");
    const email = document.querySelector("#email");
    const mensaje = document.querySelector("#mensaje");

    const errorNombre = document.querySelector("#error-nombre");
    const errorEmail = document.querySelector("#error-email");
    const errorMensaje = document.querySelector("#error-mensaje");

    /* NOMBRE */

    if (nombre.value.trim() === "") {
      errorNombre.textContent = "Introduce tu nombre.";
      nombre.classList.add("is-invalid");
      nombre.classList.remove("is-valid");
      hayErrores = true;
    } else {
      errorNombre.textContent = "";
      nombre.classList.remove("is-invalid");
      nombre.classList.add("is-valid");
    }

    /* EMAIL */

    if (email.value.trim() === "" || !email.value.includes("@")) {
      errorEmail.textContent = "Introduce un correo válido.";
      email.classList.add("is-invalid");
      email.classList.remove("is-valid");
      hayErrores = true;
    } else {
      errorEmail.textContent = "";
      email.classList.remove("is-invalid");
      email.classList.add("is-valid");
    }

    /* MENSAJE */

    if (mensaje.value.trim() === "") {
      errorMensaje.textContent = "Escribe un mensaje.";
      mensaje.classList.add("is-invalid");
      mensaje.classList.remove("is-valid");
      hayErrores = true;
    } else {
      errorMensaje.textContent = "";
      mensaje.classList.remove("is-invalid");
      mensaje.classList.add("is-valid");
    }

    if (hayErrores) {
      evento.preventDefault();
    }
  });
}

/* INTERSECTION OBSERVER */

const secciones = document.querySelectorAll(
  ".hero, .sobre-mi, .titulo-seccion, .proyecto",
);

const observador = new IntersectionObserver(
  function (entradas) {
    entradas.forEach(function (entrada) {
      if (entrada.isIntersecting) {
        entrada.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.2,
  },
);

secciones.forEach(function (seccion) {
  observador.observe(seccion);
});
