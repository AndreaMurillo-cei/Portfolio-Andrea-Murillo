/*_____________________*\
* index.js
*    Interacciones:
*       - Desplazamiento de icono hacia arriba
*       - Acción para abrir y cerrar el menú hamburguesa 
*    Estructura:
*       - Constantes
*       - Variables
*       - Funciones
*_______________________*/



// Acción para desplazar hacia arriba el icono de flecha

// Selecciona el id del icono de flecha
const desplazarArriba = document.querySelector("#desplazarse-hacia-arriba");

/**
 * Función que aplica una transformación a un icono cuando hago click sobre este
 */
desplazarArriba.addEventListener("click", () => {
  //Aplico la transformación al icono y defino las características de la transformación
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

// Acción para abrir y cerrar el menu hamburguesa

// Selecciona el id nav
const nav = document.querySelector("#nav");

// Selecciona el id abrir
const abrir = document.querySelector("#abrir");

// Selecciona el id cerrar
const cerrar = document.querySelector("#cerrar");


/**
 * Función que aplica una transformación a un icono cuando hago click sobre este
 */
abrir.addEventListener("click", () => {
    //Aplico la transformación al icono y lo hago visible
    nav.classList.add("visible");
})

/**
 * Función que aplica una transformación a un icono cuando hago click sobre este
 */
cerrar.addEventListener("click", () => {
      //Aplico la transformación al icono y lo hago invisible
    nav.classList.remove("visible");
})

