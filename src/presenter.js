
import {mostrarCantItems, mostrarPrecioItem, mostrarPrecioNeto, mostrarEstadoSeleccionado, mostrarImpuestoEstado, calcularPrecioTotalImpuestoDescuento, calcularImpuesto, calcularDescuento, mostrarPorcentajeDescuento, mostrarImpuestoyDescuentoDeCategoria, calcularPrecioTotalMasCostoDeEnvio, calcularCostoDeEnvioConCantidad} from "./mostrar.js";

const cant = document.querySelector("#cant-items");
const precio = document.querySelector("#precio-item")
const form = document.querySelector("#totalizar-form");
const div = document.querySelector("#resultados-div");
const selectEstado = document.querySelector("#select-estados");
const divEstado = document.querySelector("#estado-seleccionado");
const divImpuesto = document.querySelector("#impuesto-correspondiente");
const divImpuestoCalculado = document.querySelector("#impuesto-calculado");
const divPrecioNetoImpuesto = document.querySelector("#resultado-precioTotalImpuesto");
const divDescuentosItems = document.querySelector("#descuento-items");
const selectCategoria = document.querySelector("#select-categoria");
const pesoVolumetrico = document.querySelector("#peso-volumetrico");
const divCostoEnvio = document.querySelector("#costo-envio-calculado");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantItems = parseInt(cant.value);
  const precioItem = parseFloat(precio.value);

  const precioTotal =  mostrarPrecioNeto(cantItems, precioItem)
  div.innerHTML = "<p> Precio Neto: " +   precioTotal  + "$ </p>"

  const estadoSeleccionado = selectEstado.value;
  divEstado.innerHTML = "<p> Estado Seleccionado: " + estadoSeleccionado + "</p>";


  const categoria = selectCategoria.value;
  const [impuestoAd,descuentoAd] = mostrarImpuestoyDescuentoDeCategoria(categoria);


  const impuestoCorrespondiente = mostrarImpuestoEstado(estadoSeleccionado);
  divImpuesto.innerHTML = "<p> Impuesto de Estado + ImpuestoAd (categoria): " + impuestoCorrespondiente +" + "+ impuestoAd + "% </p>";

  const porcentajeDescuento = mostrarPorcentajeDescuento(cantItems);
  const precioDescuento = calcularDescuento(precioTotal,porcentajeDescuento,descuentoAd);
  divDescuentosItems.innerHTML = "<p> Descuento por items + DescuentoAd (categoria): "+ porcentajeDescuento + " + " + descuentoAd + "% => " + precioDescuento + "$</p>";

  const impuestoCalculado = calcularImpuesto((impuestoCorrespondiente+impuestoAd),precioTotal);
  divImpuestoCalculado.innerHTML = "<p>"+ impuestoCalculado + "$ </p>";

  const pesoVol = parseInt(pesoVolumetrico.value);
  divCostoEnvio.innerHTML = "<p>" + calcularCostoDeEnvioConCantidad(pesoVol,cantItems) + "</p>";

  const precioCostoEnvio = calcularPrecioTotalMasCostoDeEnvio(pesoVol, cantItems, precioItem, impuestoCalculado, precioDescuento);
  divPrecioNetoImpuesto.innerHTML = "<p>" + precioCostoEnvio + "$ </p>";


});
