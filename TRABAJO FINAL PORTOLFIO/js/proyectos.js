// ARRAY DE PROYECTOS

const proyectos = [
  {
    titulo: "El País Semanal",
    categoria: "grafico",
    descripcion:
      "Rediseño editorial de la revista El País Semanal con una propuesta visual limpia y contemporánea.",
    imagen: "img/Captura de pantalla 2026-01-19 125340.png",
    enlace: "grafico.html",
  },

  {
    titulo: "Carbones 13",
    categoria: "grafico",
    descripcion:
      "Proyecto de branding e identidad visual para un bar madrileño con inspiración retro.",
    imagen: "img/Captura de pantalla 2026-05-31 114944.png",
    enlace: "grafico.html",
  },

  {
    titulo: "Twelve Moons",
    categoria: "grafico",
    descripcion:
      "Proyecto conceptual que relaciona las fases de la luna con distintos artistas musicales.",
    imagen: "img/Captura de pantalla 2026-01-10 142707.png",
    enlace: "grafico.html",
  },

  {
    titulo: "Del Tirador a la Ciudad",
    categoria: "producto",
    descripcion:
      "Sistema modular de manijas personalizables que convierte un objeto cotidiano en diseño.",
    imagen: "img/MANIJA COLORES DISTINTOS 2.jpg",
    enlace: "producto.html",
  },

  {
    titulo: "Madrid es Jazz",
    categoria: "producto",
    descripcion:
      "Diseño de un evento inmersivo donde el jazz se convierte en una experiencia sensorial.",
    imagen: "img/Captura de pantalla 2026-05-31 153446.png",
    enlace: "producto.html",
  },

  {
    titulo: "Mobiliario Geométrico",
    categoria: "producto",
    descripcion:
      "Colección de muebles desmontables desarrollados a partir de figuras geométricas básicas.",
    imagen: "img/Captura de pantalla 2026-05-31 154540.png",
    enlace: "producto.html",
  },

  {
    titulo: "Show Room",
    categoria: "interiores",
    descripcion:
      "Diseño integral de un showroom de mobiliario pensado como espacio expositivo y funcional.",
    imagen: "img/Captura de pantalla 2026-05-31 120258.png",
    enlace: "interiores.html",
  },

  {
    titulo: "Hotel Griot",
    categoria: "interiores",
    descripcion:
      "Proyecto de interiorismo narrativo donde cada habitación representa un personaje diferente.",
    imagen: "img/Captura de pantalla 2026-05-31 145411.png",
    enlace: "interiores.html",
  },

  {
    titulo: "Torres Blancas",
    categoria: "interiores",
    descripcion:
      "Propuesta de intervención cromática inspirada en la Polychromie Architecturale de Le Corbusier.",
    imagen: "img/RENDER LUZ INTERIOR 2.jpg",
    enlace: "interiores.html",
  },
];

// GALERÍA

const galeria = document.querySelector("#galeria-proyectos");

// FUNCIÓN PARA PINTAR LAS TARJETAS

function mostrarProyectos(lista) {
  galeria.innerHTML = "";

  lista.forEach((proyecto) => {
    galeria.innerHTML += `
      <article class="tarjeta-proyecto">

        <img src="${proyecto.imagen}" alt="${proyecto.titulo}">

        <div class="contenido-proyecto">

          <p class="categoria-proyecto">
            ${proyecto.categoria.toUpperCase()}
          </p>

          <h3>${proyecto.titulo}</h3>

          <p>${proyecto.descripcion}</p>

          <a href="${proyecto.enlace}" class="ver-proyecto">
            Ver proyecto →
          </a>

        </div>

      </article>`;
  });
}

// MOSTRAR TODOS AL CARGAR

mostrarProyectos(proyectos);

// FILTROS

const botones = document.querySelectorAll(".btn-filtro");

botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    botones.forEach((b) => b.classList.remove("activo"));

    boton.classList.add("activo");

    const categoria = boton.dataset.categoria;

    if (categoria === "todos") {
      mostrarProyectos(proyectos);
    } else {
      const filtrados = proyectos.filter((proyecto) => {
        return proyecto.categoria === categoria;
      });

      mostrarProyectos(filtrados);
    }
  });
});
