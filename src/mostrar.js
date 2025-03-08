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

function calcularPrecioTotalImpuesto(impuesto,precioNeto) {
    return precioNeto + calcularImpuesto(impuesto,precioNeto);
}

export  {mostrarCantItems, mostrarPrecioItem, mostrarPrecioNeto, mostrarEstadoSeleccionado, mostrarImpuestoEstado,calcularPrecioTotalImpuesto,calcularImpuesto};


