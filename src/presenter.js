
import { mostrarCantItems } from "./mostrar.js";


const cant = document.querySelector("#cant-items");
const form = document.querySelector("#totalizar-form");
const div = document.querySelector("#resultado-items");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantItems = Number.parseInt(cant.value);
  
  div.innerHTML = "<p>" + mostrarCantItems(cantItems) + "</p>";
});
