

// Seleccionar estado y mostrar elección	
// Seleccionar estado y mostrar el porcentaje de impuesto que tiene ese estado	
// Mostrar el precio total con el valor del impuesto según el precio neto y el porcentaje de CA	
// Mostrar el precio total con el valor del impuesto según el precio neto y el porcentaje de AL	
// Mostrar el precio total del impuesto según el precio neto y el porcentaje de NV	
// Mostrar el precio total con el valor del impuesto según el precio neto y el porcentaje de UT	

import {mostrarCantItems, mostrarPrecioItem, mostrarPrecioNeto, mostrarEstadoSeleccionado, mostrarImpuestoEstado, calcularPrecioTotalImpuestoDescuento, calcularImpuesto,calcularDescuentoDelPrecioNeto} from "../src/mostrar.js";

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
        expect(mostrarImpuestoEstado("CA")).toBe(8.25);
    });

});

describe("Calcular y Mostrar el precio total con el valor de impuesto de CA", () => {
    it("Deberia calcular y mostrar el precio total con el valor de impuesto agregado de California", () => {
        expect (calcularImpuesto(8.25,60)).toBe(4.95);
        expect(calcularPrecioTotalImpuestoDescuento(8.25,60,0)).toBe(64.95);
    });
});

describe("Calcular y Mostrar el precio total con el valor de impuesto de AL", () => {
    it("Deberia calcular y mostrar el precio total con el valor de impuesto agregado de Alabama", () => {
        expect (calcularImpuesto(4.00,60)).toBe(2.4);
        expect(calcularPrecioTotalImpuestoDescuento(4.00,60,0)).toBe(62.4);
    });
});

describe("Calcular y Mostrar el precio total con el valor de impuesto de NV", () => {
    it("Deberia calcular y mostrar el precio total con el valor de impuesto agregado de Nevana", () => {
        expect (calcularImpuesto(8.00,60)).toBe(4.8);
        expect(calcularPrecioTotalImpuestoDescuento(8.00,60,0)).toBe(64.8);
    });
});

describe("Calcular y Mostrar el precio total con el valor de impuesto de UT", () => {
    it("Deberia calcular y mostrar el precio total con el valor de impuesto agregado de Utah", () => {
        expect (calcularImpuesto(6.65,60)).toBe(3.99);
        expect(calcularPrecioTotalImpuestoDescuento(6.65,60,0)).toBe(63.99);
    });
});


// Mostrar el precio total con el Porcentaje de descuento que corresponde a 1000	
// Mostrar el precio total con el Porcentaje de descuento que corresponde a 3000	
// Mostrar el precio total con el Porcentaje de descuento que corresponde a 7000	
// Mostrar el precio total con el Porcentaje de descuento que corresponde a 10000	
// Mostrar el precio total con el Porcentaje de descuento que corresponde a 30000	

// 1000            	3%
// 3000            	5%
// 7000	        	7%
// 10000          	10%
// 30000          	15%
	
// Mostrar el precio total con el valor del impuesto según el precio neto y el porcentaje de TX	

// Mostrar el valor del porcentaje del descuento	
// Mostrar Precio total = Precio Neto+Impuesto-Descuento	
// Mostrar los porcentajes con símbolo de porcentaje	


describe("Mostrar el precio total con el porcentaje de descuento para igual o mas de 1000 items comprados", () => {
    it ("Deberia mostrar el precio total con el descuento correspondiente a 1000 items.", () => {
        expect(calcularDescuentoDelPrecioNeto(20000,1000)).toBe(600);
    })
})

describe("Mostrar el precio total con el porcentaje de descuento para igual o mas de 3000 items comprados", () => {
    it ("Deberia mostrar el precio total con el descuento correspondiente a 3000 items.", () => {
        expect(calcularDescuentoDelPrecioNeto(60000,3000)).toBe(3000);
    })
})

describe("Mostrar el precio total con el porcentaje de descuento para igual o mas de 7000 items comprados", () => {
    it ("Deberia mostrar el precio total con el descuento correspondiente a 7000 items.", () => {
        expect(calcularDescuentoDelPrecioNeto(140000,7000)).toBe(9800);
    })
})



