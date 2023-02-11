/*==================== Ver menu ====================*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  // Valida  que existan vaiables
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      // Agregamos la clase show-menu a la etiqueta con la clase nav__menu class
      nav.classList.toggle("show-menu");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

/*==================== Quita el menu en celuares ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // Cuando hacemos clic en cada nav__link, eliminamos la clase show-menu
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== Nos desplaza por las secciones ====================*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*==================== Cambia el background del header ====================*/

function scrollHeader() {
  const nav = document.getElementById("header");
  // Cuando el desplazamiento tiene una altura superior a 200, agregue la clase de encabezado de desplazamiento a la etiqueta de encabezado
  if (this.scrollY >= 200) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*==================== Muestra scroll superior ====================*/

function scrollTop() {
  const scrollTop = document.getElementById("scroll-top");
  // Cuando el desplazamiento es superior a la altura de la ventana gráfica 560, agregue la clase show-scroll a la etiqueta a con la clase scroll-top
  if (this.scrollY >= 560) scrollTop.classList.add("show-scroll");
  else scrollTop.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollTop);

/*==================== Tema Osucuro y Claro ====================*/

const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";

// Tema previamente seleccionado (si el usuario lo seleccionó)
const selectedTheme = localStorage.getItem("selected-theme");

// Obtenemos el tema actual que tiene la interfaz validando la clase dark-theme
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "light" : "dark";

// Cambiamos de tema

const btn = document.querySelector('#switch');
const sol = document.querySelector('#icono__sol');
const luna = document.querySelector('#icono__luna');

btn.addEventListener('click', () => {
  btn.classList.toggle('active__mode');
  sol.classList.toggle('sol__oculto');
  document.body.classList.toggle(darkTheme);
  localStorage.setItem("selected-theme", getCurrentTheme());
});

// Validamos si el usuario eligió previamente un tema
if (selectedTheme) {
  // Si se cumple la validación, preguntamos cuál fue el problema para saber si activamos o desactivamos el oscuro
  document.body.classList[selectedTheme === "light" ? "add" : "remove"](
    darkTheme
  );
  btn.classList[selectedTheme === "light" ? "add" : "remove"]('active__mode');
  sol.classList[selectedTheme === "light" ? "add" : "remove"]('sol__oculto');

}

// // Activar / desactivar el tema manualmente con el botón
// themeButton.addEventListener("click", () => {
//   // Agregar o eliminar el tema oscuro / de iconos
//   document.body.classList.toggle(darkTheme);
//   //themeButton.classList.toggle(iconTheme)
//   // Guardamos el tema y el icono actual que eligió el usuario
//   localStorage.setItem("selected-theme", getCurrentTheme());
//   //localStorage.setItem('selected-icon', getCurrentIcon())
// });



/*==================== Scroll animación ====================*/
const sr = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 2000,
  reset: true,
});

sr.reveal(
  `.inicio__data, .inicio__img,
			  .about__data, .about__img,
			  .habilidades__content,
			  .conocimientos__content,
			  .contact__data, 
			  .footer__content`,
  {
    interval: 200,
    mobile: false
  }
);

/** Ventana modal */
let cerrar = document.querySelectorAll(".close")[0];
let abrir = document.querySelectorAll(".cta")[0];
let modal = document.querySelectorAll(".modal")[0];
let modalC = document.querySelectorAll(".modal-container")[0];

abrir.addEventListener("click", function (e) {
  e.preventDefault();
  modalC.style.opacity = "1";
  modalC.style.visibility = "visible";
  modal.classList.toggle("modal-close");
});

cerrar.addEventListener("click", function (e) {
  modal.classList.toggle("modal-close");

  setTimeout(function () {
    modalC.style.opacity = "0";
    modalC.style.visibility = "hidden";
  }, 500);
});

