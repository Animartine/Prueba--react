function calcularprecio(preciobase, descuento){
    if(preciobase < 0 || descuento <0 || descuento>100)
    { return"los valores ingresados son invalidos"}

    if(descuento==0){
    return"precio base sin descuento"}

    if(descuento>0 && descuento<=100){
        var preciobase= preciobase-descuento*descuento/100
        return"el precio final con descuento en $"
    }
}
console.log(calcularprecio(0, 100))
   