
import {mostrarCantItems, mostrarPrecioItem} from "./mostrar";

const cant = document.querySelector("#cant-items");
const precio = document.querySelector("#precio-item")
const form = document.querySelector("#totalizar-form");
const div = document.querySelector("#resultados-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantItems = Number.parseInt(cant.value);
  const precioItem = Number.parseInt(precio.value);

  div.innerHTML = "<p> Cantidad: " + mostrarCantItems(cantItems) +  " Precio: " +  mostrarPrecioItem(precioItem) + "</p>";
});
