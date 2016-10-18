//Las siguientes 4 funciones son para el Rubro de Rentabilidad

function rendimientoCapital(utilidadesNetas,capitalContable) {
    var resultado = utilidadesNetas/capitalContable;
    return resultado;
}

function rendimientoActivos(utilidadEnReoperacion,totalActivos,impuesto) {
    //el impuesto se tiene que manejar en forma decimal, ejemplo: si el impuesto es del 40%, su decimal es 0.4, para poder trabajarlo en la fórmula
    var resultado = (utilidadEnReoperacion*(1-impuesto))/totalActivos;
    return resultado;

}

function margenUtilidad(utilidadesNetas,ventas) {
    var resultado = utilidadesNetas/ventas;
    return resultado;
}

function multiplicadorCapital(totalActivos, capitalContable){
    var resultado = totalActivos/capitalContable;
    return resultado;
}

//Las siguientes dos funciones son para el Rubro de Deuda

function razonDeudaTotal(totalActivos,totalPasivos) {
    var resultado = totalPasivos/totalActivos;
    return resultado;
}

function razonDeudaPatrimonio(pasivoTotal,capitalContable) {
    var resultado = pasivoTotal/capitalContable;
    return resultado;
}

//las siguientes dos funciones son para el rubro de rotacion

function periodomCobranza(cuentasxCobrar,ventas) {
    var resultado = (cuentasxCobrar*360)/ventas;
    return resultado;
}

function rotacionInventarios(ventas,inventarios) {
    var resultado = ventas/inventarios;
    return resultado;
}

//Las siguientes dos funciones son para el rubro de Liquidez

function razonCirculante(activoCirculante,pasivoCirculante) {
    var resultado = activoCirculante/pasivoCirculante;
    return resultado;

}

function pruebaAcido(activoCirculante,pasivoCirculante,inventarios) {

    var resultado = (activoCirculante - pasivoCirculante)/inventarios;
    return resultado;

}
