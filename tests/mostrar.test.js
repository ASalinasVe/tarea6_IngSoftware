

// Seleccionar estado y mostrar elección	
// Seleccionar estado y mostrar el porcentaje de impuesto que tiene ese estado	
// Mostrar el precio total con el valor del impuesto según el precio neto y el porcentaje de CA	
// Mostrar el precio total con el valor del impuesto según el precio neto y el porcentaje de AL	
// Mostrar el precio total del impuesto según el precio neto y el porcentaje de NV	
// Mostrar el precio total con el valor del impuesto según el precio neto y el porcentaje de UT	


import {mostrarCantItems, mostrarPrecioItem, mostrarPrecioNeto, mostrarEstadoSeleccionado, mostrarImpuestoEstado, calcularPrecioTotalImpuesto} from "../src/mostrar.js";

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

describe("Mostrar el porcentaje de impuesto que tiene del estado seleccionado", () => {
    it("Deberia mostrar el porcentaje de impuesto que tiene el estado seleccionado", () => {
        expect(mostrarImpuestoEstado("California")).toBe(8.25);
    });

});

describe("Calcular y Mostrar el precio total con el valor de impuesto de CA", () => {
    it("Deberia calcular y mostrar el precio total con el valor de impuesto agregado de California", () => {
        expect(calcularPrecioTotalImpuesto(8.25,60)).toBe(55.05);
    });
});

describe("Calcular y Mostrar el precio total con el valor de impuesto de AL", () => {
    it("Deberia calcular y mostrar el precio total con el valor de impuesto agregado de Alabama", () => {
        expect(calcularPrecioTotalImpuesto(4.00,60)).toBe(57.6);
    });
});

