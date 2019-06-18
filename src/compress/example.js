function reemplazarCadena(cadenaVieja, cadenaNueva, cadenaCompleta) {
  // Reemplaza cadenaVieja por cadenaNueva en cadenaCompleta
  
     for (var i = 0; i < cadenaCompleta.length; i++) {
        if (cadenaCompleta.substring(i, i + cadenaVieja.length) == cadenaVieja) {
           cadenaCompleta= cadenaCompleta.substring(0, i) + cadenaNueva + cadenaCompleta.substring(i + cadenaVieja.length, cadenaCompleta.length);
        }
     }
     return cadenaCompleta;
  }
  
  
