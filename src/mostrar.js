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
    if (estado == "California"){
        impuesto = 8.25;
    }else if (estado == "Alabama"){
        impuesto = 4;
    }else if (estado == "Nevana"){
        impuesto = 8;
    }else if(estado == "Utah"){
        impuesto = 6.65;
    }else if(estado == "Texas"){
        impuesto = 6.25;
    }

    return impuesto;

}

function calcularPrecioTotalImpuesto(impuesto,precioTotal) {
    return precioTotal-((impuesto*0.01)*precioTotal);
}

export  {mostrarCantItems, mostrarPrecioItem, mostrarPrecioNeto, mostrarEstadoSeleccionado, mostrarImpuestoEstado,calcularPrecioTotalImpuesto};


