/*let votacion_persona = "";
let contar_voto_A = 0;
let contar_voto_B = 0;

while (votacion_persona != "SALIR"){
    votacion_persona = prompt ("Voto A o B, ponga SALIR para finalizar");

    if (votacion_persona == "A"){
        console.log ("Voto A")
        contar_voto_A++;
    }
    else if ( votacion_persona == "B"){
        console.log ("Voto B")
        contar_voto_B++;
    }
    else{
        console.log ("VOTO NULO");
    }
}

if (contar_voto_A > contar_voto_B){
    console.log ("GANA A");
}
else if (contar_voto_B > contar_voto_A){
    console.log ("GANA B");
}
else {
    console.log ("EMPATE");
}
console.log ( contar_voto_A );
console.log ( contar_voto_B );*/


            function calcular_igv(precio){
                let igv = precio*0.20
                return igv
            }
            
            
            
            console.log("Bienvenido al carrito de compras");
            console.log("Los productos de hoy son: Buzos $130 / Pantalones $100 / Remeras $50 / Zapatillas $80");
            
                let nombre_producto = prompt("¿Qué producto desea adquirir?");
                let precio_producto = parseInt(prompt("Ingrese el precio del producto"));
                let cantidad_producto = prompt("Ingrese la cantidad que desea llevar");
            
            console.log("Producto: ", nombre_producto);
            console.log("Precio de producto:", precio_producto);
            console.log("Cantidad de productos:" , cantidad_producto);
            
                let precio_total = precio_producto * cantidad_producto;
             console.log("La operación grabada es de: $", precio_total, "comunicarse con un operador y confirme el método de pago" );


            
               

        
