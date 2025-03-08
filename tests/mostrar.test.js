// Seleccionar estado y mostrar elección	
// Seleccionar estado y mostrar el porcentaje de impuesto que tiene ese estado	
// Mostrar el precio total con el valor del impuesto según el precio neto y el porcentaje de CA	
// Mostrar el precio total con el valor del impuesto según el precio neto y el porcentaje de AL	
// Mostrar el precio total del impuesto según el precio neto y el porcentaje de NV	
// Mostrar el precio total con el valor del impuesto según el precio neto y el porcentaje de UT	




import {mostrarCantItems, mostrarPrecioItem, mostrarPrecioNeto, mostrarEstadoSeleccionado} from "../src/mostrar.js";

describe ("Mostrar Cantidad de Items", () => {
    it("Debería mostrar la cantidad de items ingresada", () => {
        expect(mostrarCantItems(10)).toBe(10);
    });
});

describe ("Mostar el precio de Item", () => {
    it("Deberia mostrar el precio que se ingreso del Item", () => {
        expect(mostrarPrecioItem(3)).toBe(3);
    });
});

describe ("Mostar el precio neto", () => {
    it("Deberia mostrar el precio neto (multiplicado) de los valores ingresados", () => {
        expect(mostrarPrecioNeto(20,3)).toEqual(60);
    });
});

describe ("Mostrar el Estado seleccionado", () => {
    it("Deberia mostrar el estado, que se ingresa", () => {
        expect(mostrarEstadoSeleccionado("CA")).toBe("CA");
    });
});
