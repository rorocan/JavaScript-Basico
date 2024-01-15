switch (expresion) {}

switch (expresion) {
    case 1: {
        // Bloque 1
        break
    }
    case 2: {
        // Bloque 2
        break
    }     
}

switch (expresion) {
    case 1: {
      // Bloque 1
      break
    }
    case 2: {
     // Bloque 2
      break
    }
    default: {
      // Bloque por defecto
    }
  }

  function semaforo(color) {
    switch (color) {
      case "verde": {
        console.log("¡Sigue!")
        break
      }
      case "amarillo": {
        console.log("¡Detente!")
        break
      }
      case "rojo": {
        console.log("¡No puedes avanzar!")
        break
      }
      default: {
        console.log("¡No reconozco ese color! :(")
      }
    }
  }
  