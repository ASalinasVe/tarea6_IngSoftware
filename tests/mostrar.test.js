
import {mostrarCantItems, mostrarPrecioItem, mostrarPrecioNeto,
    mostrarEstadoSeleccionado, mostrarImpuestoEstado, calcularPrecioTotalImpuestoDescuento,
    calcularImpuesto,calcularDescuento,mostrarPorcentajeDescuento,
    mostrarCategoriaProducto,mostrarImpuestoyDescuentoDeCategoria,
    calcularCostoDeEnvio, calcularCostoDeEnvioConCantidad, calcularPrecioTotalMasCostoDeEnvio,
    calcularTarifaTipoDeCliente} from "../src/mostrar.js";

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
        expect(calcularPrecioTotalImpuestoDescuento(8.25,60,0,0)).toBe(64.95);
    });
});

describe("Calcular y Mostrar el precio total con el valor de impuesto de AL", () => {
    it("Deberia calcular y mostrar el precio total con el valor de impuesto agregado de Alabama", () => {
        expect (calcularImpuesto(4.00,60)).toBe(2.4);
        expect(calcularPrecioTotalImpuestoDescuento(4.00,60,0,0)).toBe(62.4);
    });
});

describe("Calcular y Mostrar el precio total con el valor de impuesto de NV", () => {
    it("Deberia calcular y mostrar el precio total con el valor de impuesto agregado de Nevana", () => {
        expect (calcularImpuesto(8.00,60)).toBe(4.8);
        expect(calcularPrecioTotalImpuestoDescuento(8.00,60,0,0)).toBe(64.8);
    });
});

describe("Calcular y Mostrar el precio total con el valor de impuesto de UT", () => {
    it("Deberia calcular y mostrar el precio total con el valor de impuesto agregado de Utah", () => {
        expect (calcularImpuesto(6.65,60)).toBe(3.99);
        expect(calcularPrecioTotalImpuestoDescuento(6.65,60,0,0)).toBe(63.99);
    });
});


//Pruebas de descuentos por items
describe("Mostrar el precio total con el porcentaje de descuento para igual o mas de 1000 items comprados", () => {
    it ("Deberia mostrar el precio total con el descuento correspondiente a 1000 items.", () => {
        expect(calcularDescuento(20000,3,0)).toBe(600);
    })
})

describe("Mostrar el precio total con el porcentaje de descuento para igual o mas de 3000 items comprados", () => {
    it ("Deberia mostrar el precio total con el descuento correspondiente a 3000 items.", () => {
        expect(calcularDescuento(60000,5,0)).toBe(3000);
    })
})

describe("Mostrar el precio total con el porcentaje de descuento para igual o mas de 7000 items comprados", () => {
    it ("Deberia mostrar el precio total con el descuento correspondiente a 7000 items.", () => {
        expect(calcularDescuento(140000,7,0)).toBe(9800.000000000002);
    })
})

describe("Mostrar el precio total con el porcentaje de descuento para igual o mas de 10000 items comprados", () => {
    it ("Deberia mostrar el precio total con el descuento correspondiente a 10000 items.", () => {
        expect(calcularDescuento(200000,10,0)).toBe(20000);
    })
})

describe("Mostrar el precio total con el porcentaje de descuento para igual o mas de 15000 items comprados", () => {
    it ("Deberia mostrar el precio total con el descuento correspondiente a 15000 items.", () => {
        expect(calcularDescuento(600000,15,0)).toBe(90000);
    })
})

//Pruebas de mostrar el monto de descuento y precio Total
describe("Mostrar el porcentaje de descuento segun los items", () => {
    it ("Deberia mostrar el porcentaje de descuento correspondiente a los items", () => {
        expect(mostrarPorcentajeDescuento(10000)).toBe(10);
    })
})


//Pruebas para categorias elegidas
describe("Mostrar la categoria de producto que se selecciona", () => {
    it("Deberia mostrar la categoria que elige el usuario segun su producto", () => {
        expect(mostrarCategoriaProducto("Varios")).toBe("Varios");
    })
})

describe("Mostrar Impuesto y Descuento Adicionales segun la categoria escogida", () => {
    it("Deberia mostrar el impuesto y descuento adicioales de la categoria", () => {
        expect(mostrarImpuestoyDescuentoDeCategoria("Varios")).toEqual([0,0]);
    })
})


describe("Mostrar el precio Total con impuestos y descuento", () => {
    it ("Deberia mostrar el precio Total con impuesto y descuetos", () => {
        expect(calcularImpuesto(10.25,20000)).toBe(2050);
        expect(calcularDescuento(20000,3,2)).toBe(1000);
    })
})

//Pruebas para peso volumetrico
describe("Calcular el costo de envio por peso volumetrico ingresado 0 - 10", () => {
    it ("Deberia mostrar el costo de envio para un peso volumetrico de 0 - 10", () => {
        expect(calcularCostoDeEnvio(0)).toBe(0);
    })
})

describe("Calcular el costo de envio por peso volumetrico ingresado 11 - 20", () => {
    it ("Deberia mostrar el costo de envio para un peso volumetrico de 11 - 20", () => {
        expect(calcularCostoDeEnvio(11)).toBe(3.5);
    })
})

describe("Calcular el costo de envio por peso volumetrico ingresado 21 - 40", () => {
    it ("Deberia mostrar el costo de envio para un peso volumetrico de 21 - 40 ", () => {
        expect(calcularCostoDeEnvio(21)).toBe(5);
    })
})

describe("Calcular el costo de envio por peso volumetrico ingresado 41 - 80", () => {
    it ("Deberia mostrar el costo de envio para un peso volumetrico de 41 - 80", () => {
        expect(calcularCostoDeEnvio(41)).toBe(6);
    })
})

describe("Calcular el costo de envio por peso volumetrico ingresado 81 - 100", () => {
    it ("Deberia mostrar el costo de envio para un peso volumetrico de 81 - 100", () => {
        expect(calcularCostoDeEnvio(81)).toBe(6.5);
    })
})

describe("Calcular el costo de envio por peso volumetrico ingresado 101 - 200", () => {
    it ("Deberia mostrar el costo de envio para un peso volumetrico de 101 - 200", () => {
        expect(calcularCostoDeEnvio(101)).toBe(8);
    })
})

describe("Calcular el costo de envio por peso volumetrico ingresado mayor a 200", () => {
    it ("Deberia mostrar el costo de envio para un peso volumetrico mayor a 200", () => {
        expect(calcularCostoDeEnvio(666)).toBe(9);
    })
})

describe("Calcular el costo de envio por peso volumetrico y cantidad ingresada", () => {
    it ("Deberia mostrar el costo de envio con un determinado peso volumetrico y la cantidad del producto", () => {
        expect(calcularCostoDeEnvioConCantidad(5,10)).toBe(0);
        expect(calcularCostoDeEnvioConCantidad(15,2)).toBe(7);
        expect(calcularCostoDeEnvioConCantidad(30,4)).toBe(20);
        expect(calcularCostoDeEnvioConCantidad(50,3)).toBe(18);
        expect(calcularCostoDeEnvioConCantidad(90,2)).toBe(13);
        expect(calcularCostoDeEnvioConCantidad(150,2)).toBe(16);
        expect(calcularCostoDeEnvioConCantidad(250,5)).toBe(45);
    })
})


//Prueba para costo de envio
describe("Calcular el precio total con el costo de envio", () => {
    it ("Deberia devolver el precio total dependiendo del costo de envio", () => {
        expect(calcularPrecioTotalMasCostoDeEnvio(15, 2, 50, 10, 5)).toBe(112);
        expect(calcularPrecioTotalMasCostoDeEnvio(25, 1000, 70, 5775, 2100)).toBe(78675);
    })
})

//pruebas de tipo de clientes
describe("Descuento en costo de envio de un cliente Normal", () => {
    it ("Deberia devolver un descuento de 0% para un cliente normal", () => {
        expect(calcularTarifaTipoDeCliente("Normal")).toBe(0);
    })
})

describe("Descuento en costo de envio de un cliente Recurrente", () => {
    it ("Deberia devolver un descuento de 0% para un cliente recurrente", () => {
        expect(calcularTarifaTipoDeCliente("Recurrente")).toBe(0.5);
    })
})

describe("Descuento en costo de envio de un cliente Antiguo Recurrente", () => {
    it ("Deberia devolver un descuento de 0% para un cliente Antiguo recurrente", () => {
        expect(calcularTarifaTipoDeCliente("Antiguo Recurrente")).toBe(1);
    })
})

describe("Descuento en costo de envio de un cliente Espacial", () => {
    it ("Deberia devolver un descuento de 0% para un cliente Especial", () => {
        expect(calcularTarifaTipoDeCliente("Especial")).toBe(1);
    })
})