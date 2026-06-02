document.querySelectorAll(".filtro").forEach(function (boton) {
  boton.addEventListener("click", function () {
    const categoriaElegida = this.dataset.filtro;

    document.querySelectorAll(".card").forEach(function (card) {
      if (
        categoriaElegida === "todos" ||
        categoriaElegida === card.dataset.categoria
      ) {
        card.classList.remove("oculto");
      } else {
        card.classList.add("oculto");
      }
    });
  });
});

/* Función Formulario */

const formulario = document.querySelector("#contacto");

formulario.addEventListener("submit", function (evento) {
  let hayErrores = false;

  // Nombre
  const nombre = document.querySelector("#nombre");
  const errorNombre = document.querySelector("#error-nombre");

  if (nombre.value.trim() === "") {
    errorNombre.textContent = "El nombre es obligatorio";
    nombre.classList.add("is-invalid");
    nombre.classList.remove("is-valid");
    hayErrores = true;
  } else {
    errorNombre.textContent = "";
    nombre.classList.remove("is-invalid");
    nombre.classList.add("is-valid");
  }

  // Email
  const email = document.querySelector("#email");
  const errorEmail = document.querySelector("#error-email");

  if (email.value.trim() === "" || !email.value.includes("@")) {
    errorEmail.textContent = "Introduce un email válido";
    email.classList.add("is-invalid");
    email.classList.remove("is-valid");
    hayErrores = true;
  } else {
    errorEmail.textContent = "";
    email.classList.remove("is-invalid");
    email.classList.add("is-valid");
  }

  if (hayErrores) {
    evento.preventDefault();
  }
});
