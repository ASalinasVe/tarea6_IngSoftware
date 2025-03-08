
import {mostrarCantItems, mostrarPrecioItem, mostrarPrecioNeto, mostrarEstadoSeleccionado, mostrarImpuestoEstado} from "./mostrar.js";

const cant = document.querySelector("#cant-items");
const precio = document.querySelector("#precio-item")
const form = document.querySelector("#totalizar-form");
const div = document.querySelector("#resultados-div");
const select = document.querySelector("#select-estados");
const divEstado = document.querySelector("#estado-seleccionado");
const divImpuesto = document.querySelector("#impuesto-correspondiente")

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantItems = parseInt(cant.value);
  const precioItem = parseFloat(precio.value);

  div.innerHTML = "<p> Precio Neto: " + mostrarPrecioNeto(cantItems, precioItem)  + "</p>"

  const estadoSeleccionado= select.value;

  divEstado.innerHTML = "<p> Estado Seleccionado: " + estadoSeleccionado + "</p>";

  const impuestoCorrespondiente = mostrarImpuestoEstado(estadoSeleccionado);

  divImpuesto.innerHTML = "<p>" + impuestoCorrespondiente + "% </p>";

});
