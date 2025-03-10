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
    return precioNeto * (impuesto / 100);
}

function calcularPrecioTotalImpuestoDescuento(impuesto,precioNeto,descuento) {
    return precioNeto - descuento + calcularImpuesto(impuesto,precioNeto);
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

function calcularDescuentoDelPrecioNeto(precioNeto,porcentaje) {
    let descuento = precioNeto * (porcentaje / 100);
    descuento = Math.round(descuento);
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

export  {mostrarCantItems, mostrarPrecioItem, mostrarPrecioNeto,
     mostrarEstadoSeleccionado, mostrarImpuestoEstado,calcularPrecioTotalImpuestoDescuento,
     calcularImpuesto,calcularDescuentoDelPrecioNeto,mostrarPorcentajeDescuento,
    mostrarCategoriaProducto, mostrarImpuestoyDescuentoDeCategoria};


