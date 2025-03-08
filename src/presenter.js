
import {mostrarCantItems, mostrarPrecioItem, mostrarPrecioNeto, mostrarEstadoSeleccionado, mostrarImpuestoEstado, calcularPrecioTotalImpuesto, calcularImpuesto} from "./mostrar.js";

const cant = document.querySelector("#cant-items");
const precio = document.querySelector("#precio-item")
const form = document.querySelector("#totalizar-form");
const div = document.querySelector("#resultados-div");
const select = document.querySelector("#select-estados");
const divEstado = document.querySelector("#estado-seleccionado");
const divImpuesto = document.querySelector("#impuesto-correspondiente");
const divImpuestoCalculado = document.querySelector("#impuesto-calculado");
const divPrecioNetoImpuesto = document.querySelector("#resultado-precioTotalImpuesto");



form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantItems = parseInt(cant.value);
  const precioItem = parseFloat(precio.value);

  const precioTotal =  mostrarPrecioNeto(cantItems, precioItem)
  div.innerHTML = "<p> Precio Neto: " +   precioTotal  + "</p>"

  const estadoSeleccionado= select.value;
  divEstado.innerHTML = "<p> Estado Seleccionado: " + estadoSeleccionado + "</p>";

  const impuestoCorrespondiente = mostrarImpuestoEstado(estadoSeleccionado);
  divImpuesto.innerHTML = "<p>" + impuestoCorrespondiente + "% </p>";

  const impuestoCalculado = calcularImpuesto(impuestoCorrespondiente,precioTotal);
  divImpuestoCalculado.innerHTML = "<p>"+ estadoSeleccionado +" => "+ impuestoCalculado + "$ </p>";

  const precioNetoImpuesto = calcularPrecioTotalImpuesto(impuestoCorrespondiente,precioTotal);
  divPrecioNetoImpuesto.innerHTML = "<p>" + precioNetoImpuesto + "$ </p>";

});
