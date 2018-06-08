window.cipher = {

  encode: (offset, string) => {//declar el cifado para almacenar.

    let resultado = '';// obtenemos el reciduo de la llave u offset

    for (let i = 0; i < string.length; i++) { //almacen de letras cifradas

      let numeroposicion = string.charCodeAt(i); // se obtiene la posicion mediante la formula.

      if (65 <= numeroposicion && numeroposicion <= 90) {// Mayusculas

        resultado += String.fromCharCode((numeroposicion - 65 + offset) % 26 + 65); // se almacena las posiciones de las letras mayusculas, y se transformamos el string.
      }
      if (97 <= numeroposicion && numeroposicion <= 122) {  //Minusculas

        resultado += String.fromCharCode((numeroposicion - 97 + offset) % 26 + 97);
      }
      // se almacena las posiciones de las letras mayusculas y concatenamos para formar el string
    }
    return resultado;//mé todo estático que devuelve una cadena creada mediante el uso de una secuencia de valores Unicode especificada.
  },

  decode: (offset, string) => { //se declara el decifrado para almacenar

    let resultado = '';//se obtiene el residuo de la llave u offset

    for (let i = 0; i < string.length; i++) { //encapsula letras decifradas

      let numeroposicion = string.charCodeAt(i); // obtenemos el código ASCIImediante la formula
      if (65 <= numeroposicion && numeroposicion <= 90) {// Mayusculas
        resultado += String.fromCharCode((numeroposicion + 65 - offset) % 26 + 65); //almacenamos las posiciones de las letras mayusculas  y concatenamos para formar el resultado
      }
      if (97 <= numeroposicion && numeroposicion <= 122) {  //Minusculas
        resultado += String.fromCharCode(((numeroposicion - 97 - offset + 26) + 26) % 26 + 97);// se almacena las posiciones de las letras minusculas y concatenamos para formar el string
      }
    }
    return resultado;//método estático que devuelve una cadena creada mediante el uso de una secuencia de valores Unicode especificada.
  },



  createCipherWithOffset: (offset) => {
    const objeto = {
      encode(string) { return cipher.encode(offset, string) },
      decode(string) { return cipher.decode(offset, string) },
    }
    return objeto;
  }
};
