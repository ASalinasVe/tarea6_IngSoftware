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

function calcularDescuentoDelPrecioNeto(precioNeto,items) {
    let descuento = 0;
    let porcentaje = 0;
    if (items == 1000){
        porcentaje= 3;
        descuento = precioNeto*(porcentaje/100);
        return descuento;
    }
}

export  {mostrarCantItems, mostrarPrecioItem, mostrarPrecioNeto, mostrarEstadoSeleccionado, mostrarImpuestoEstado,calcularPrecioTotalImpuestoDescuento,calcularImpuesto,calcularDescuentoDelPrecioNeto};


