
import {mostrarCantItems, mostrarPrecioItem, mostrarPrecioNeto, mostrarEstadoSeleccionado} from "./mostrar.js";

const cant = document.querySelector("#cant-items");
const precio = document.querySelector("#precio-item")
const form = document.querySelector("#totalizar-form");
const div = document.querySelector("#resultados-div");
const select = document.querySelector("#select-estados"); 
const div2 = document.querySelector("#estado-seleccionado");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantItems = parseInt(cant.value);
  const precioItem = parseFloat(precio.value);

  div.innerHTML = "<p> Precio Neto: " + mostrarPrecioNeto(cantItems, precioItem)  + "</p>"

  const estadoSeleccionado= select.value; 
  // const estado = mostrarEstadoSeleccionado(estadoSeleccionado);

  div2.innerHTML = "<p> Estado Seleccionado: " + estadoSeleccionado + "</p>";

});
