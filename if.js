if (true) {
    console.log("Hola que tal");
}

if (edad >= 18){
    console.log("Puedes conducir")
} else {
    console.log("No puedes conducir")
}

if (condicion1){
    // Bloque 1
 } else if (condicion2){
     // Bloque 2
 } else if (condicion3){
    // Bloque 3
 } else {
     // Bloque else
 }

 function calcularDescuento(articulos, precio) {
    var precioFinal
  
    if (articulos <= 5) {
      //Hasta 5 artículos
      precioFinal = precio * (1 - 0.1)
    } else if (articulos > 5 && articulos <= 10) {
      //De 6 a 10 artículos
      precioFinal = precio * (1 - 0.15)
    } else {
      //De 10 artículos en adelante
      precioFinal = precio * (1 - 0.2)
    }
  
    return precioFinal
  }
  
  calcularDescuento(4, 10) // 9
  calcularDescuento(8, 20) // 17
  calcularDescuento(15, 50) // 40 