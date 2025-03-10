
import {mostrarCantItems, mostrarPrecioItem, mostrarPrecioNeto,
     mostrarEstadoSeleccionado, mostrarImpuestoEstado, calcularPrecioTotalImpuestoDescuento, 
     calcularImpuesto,calcularDescuentoDelPrecioNeto,mostrarPorcentajeDescuento,
    mostrarCategoriaProducto} from "../src/mostrar.js";

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


//Pruebas de Estados
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


//Pruebas de Impuestos segun el Estado
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


//Pruebas de descuentos por items
describe("Mostrar el precio total con el porcentaje de descuento para igual o mas de 1000 items comprados", () => {
    it ("Deberia mostrar el precio total con el descuento correspondiente a 1000 items.", () => {
        expect(calcularDescuentoDelPrecioNeto(20000,3)).toBe(600);
    })
})

describe("Mostrar el precio total con el porcentaje de descuento para igual o mas de 3000 items comprados", () => {
    it ("Deberia mostrar el precio total con el descuento correspondiente a 3000 items.", () => {
        expect(calcularDescuentoDelPrecioNeto(60000,5)).toBe(3000);
    })
})

describe("Mostrar el precio total con el porcentaje de descuento para igual o mas de 7000 items comprados", () => {
    it ("Deberia mostrar el precio total con el descuento correspondiente a 7000 items.", () => {
        expect(calcularDescuentoDelPrecioNeto(140000,7)).toBe(9800);
    })
})

describe("Mostrar el precio total con el porcentaje de descuento para igual o mas de 10000 items comprados", () => {
    it ("Deberia mostrar el precio total con el descuento correspondiente a 10000 items.", () => {
        expect(calcularDescuentoDelPrecioNeto(200000,10)).toBe(20000);
    })
})

describe("Mostrar el precio total con el porcentaje de descuento para igual o mas de 15000 items comprados", () => {
    it ("Deberia mostrar el precio total con el descuento correspondiente a 15000 items.", () => {
        expect(calcularDescuentoDelPrecioNeto(600000,15)).toBe(90000);
    })
})

//Pruebas de mostrar el monto de descuento y precio Total
describe("Mostrar el porcentaje de descuento segun los items", () => {
    it ("Deberia mostrar el porcentaje de descuento correspondiente a los items", () => {
        expect(mostrarPorcentajeDescuento(10000)).toBe(10);
    })
})

describe("Mostrar el precio Total con impuestos y descuento", () => {
    it ("Deberia mostrar el precio Total con impuesto y descuetos", () => {
        expect(calcularPrecioTotalImpuestoDescuento(8.25,20000,600)).toBe(21050);
    })
})

// - El usuario tendrá también que elegir una categoría de producto.
//  Se debe elegir la categoría de una lista de categorías.
//  La categoría por defecto es ‘Varios’.  
// De acuerdo a estas categorías se tendrá algunas variaciones en descuentos e impuestos:

// Categoria de producto     Impuesto adicional        Descuento adicional por categoria
// Alimentos			          0%				                2%
// Bebidas alcohólicas		      7%				                0%
// Material de escritorio		  0%				               1.5%
// Muebles		                  3%				                0%
// Electrónicos			          4%				                1%
// Vestimenta			          2%				                0%
// Varios				          0%			                	0%

// *Se debe tomar en cuenta que la tabla anterior toma en cuenta montos adicionales,
//  es decir en caso de que un producto tenga 0% adicional, 
// quiere decir que no se adiciona nada a lo que tenía antes.


//Pruebas para categorias elegidas
describe("Mostrar la categoria de producto que se selecciona", () => {
    it("Deberia mostrar la categoria que elige el usuario segun su producto", () => {
        expect(mostrarCategoriaProducto("Varios")).toBe("Varios");
    })
})


