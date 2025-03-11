function mostrarCantItems(cantItems) {
    return cantItems;
}

function mostrarPrecioItem(precioItem){
    return precioItem;
} 

function mostrarPrecioNeto(cantItems, precioItem){
    return cantItems*precioItem;
}

function mostrarEstadoSeleccionado(estado){
    return estado;
}

function mostrarImpuestoEstado(estado){
    let impuesto = 0; 
    switch (estado) {
        case "CA": impuesto = 8.25; break;
        case "AL": impuesto = 4; break;
        case "NV": impuesto = 8; break;
        case "UT": impuesto = 6.65; break;
        case "TX": impuesto = 6.25; break;
    }
    return impuesto;
}

function calcularImpuesto(impuesto, precioNeto) {
    return precioNeto * (impuesto/ 100);
}

function calcularPrecioTotalImpuestoDescuento(impuesto,precioNeto,descuento,impuestoAd) {
    return precioNeto - descuento + calcularImpuesto((impuesto+impuestoAd),precioNeto);
}

function mostrarPorcentajeDescuento(items) {
    let porcentaje = 0;
    if (items >= 1000 && items < 3000) {
        porcentaje = 3;
    }else if (items >= 3000 && items < 7000) {
        porcentaje = 5;
    }else if (items >= 7000 && items < 10000) {
        porcentaje = 7;
    }else if (items >= 10000 && items < 30000) {
        porcentaje = 10;
    }else if (items >= 30000) {
        porcentaje = 15;
    }
    return porcentaje;
}

function calcularDescuento(precioNeto,porcentaje,descuentoAd) {
    let descuento = precioNeto * ((porcentaje + descuentoAd) / 100);
   // descuento = Math.round(descuento);
    return descuento;
}

function mostrarCategoriaProducto(categoria){
    return categoria;
}

function mostrarImpuestoyDescuentoDeCategoria(categoria){
    let impuestoAd = 0;
    let descuentoAd = 0;
    switch(categoria){
        case "Varios":
            impuestoAd = 0 ;
            descuentoAd = 0 ;
        break;
        case "Alimentos":
            impuestoAd = 0 ;
            descuentoAd = 2 ;
        break;
        case "Bebidas_Alcoholicas":
            impuestoAd = 7;
            descuentoAd = 0 ;
        break;
        case "Material_de_escritorio":
            impuestoAd = 0 ;
            descuentoAd = 1.5 ;
        break;
        case "Muebles":
            impuestoAd = 3 ;
            descuentoAd = 0 ;
        break;
        case "Electronicos":
            impuestoAd = 4 ;
            descuentoAd = 1 ;
        break;
        case "Vestimenta":
            impuestoAd = 2 ;
            descuentoAd = 0 ;
        break;
    }
    return [impuestoAd,descuentoAd];
}

function calcularCostoDeEnvio(pesoVolumetrico){
    const costoDeEnvio = [
        {min: 11, max: 20, costo: 3.5},
        {min: 21, max: 40, costo: 5},
        {min: 41, max: 80, costo: 6},
        {min: 81, max: 100, costo: 6.5},
        {min: 101, max: 200, costo: 8},
        {min: 101, max: Infinity, costo: 9}
    ];
    return costoDeEnvio.find(t => pesoVolumetrico >= t.min && pesoVolumetrico <= t.max)?.costo || 0;
}

function calcularCostoDeEnvioConCantidad(pesoVolumetrico, cantidadDeProducto){
    let costoPorUnidad = calcularCostoDeEnvio(pesoVolumetrico);
    return costoPorUnidad * cantidadDeProducto;
}

function calcularPrecioTotalMasCostoDeEnvio(pesoVolumetrico, cantidad, precioUnitario, impuesto, descuento) {
    const precioNeto = cantidad * precioUnitario;
    const costoEnvio = calcularCostoDeEnvioConCantidad(pesoVolumetrico, cantidad);
    return precioNeto + impuesto - descuento + costoEnvio;
}

function calcularTarifaTipoDeCliente(tipoDeCliente){
    return 0;
}


export  {mostrarCantItems, mostrarPrecioItem, mostrarPrecioNeto,
    mostrarEstadoSeleccionado, mostrarImpuestoEstado,calcularPrecioTotalImpuestoDescuento,
    calcularImpuesto,calcularDescuento,mostrarPorcentajeDescuento,
    mostrarCategoriaProducto, mostrarImpuestoyDescuentoDeCategoria,
    calcularCostoDeEnvio, calcularCostoDeEnvioConCantidad, calcularPrecioTotalMasCostoDeEnvio,
    calcularTarifaTipoDeCliente};


