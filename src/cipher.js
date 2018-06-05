window.cipher = {
  encode : (keyoffset, stringAcifrar) => {
    let stringCifrado = "";

    for (let i=0; i<stringAcifrar.length; i++)//encapsula el tipo de datos de la cadena primitiva.-lengthlongitud de largo
    {
      let numeroposicion= stringAcifrar.charCodeAt(i); // obtenemos el código ASCII
      let nuevoNumeroposicion = 0;
      if (65<=numeroposicion && numeroposicion <= 90)//mayuscula
      {
        nuevoNumeroposicion = (numeroposicion - 65 + keyoffset) % 26 + 65;// Obtener el nuevo código ASCII mediante fórmula y concatenamos para formar el resultado
      }
      if (97<=numeroposicion  && numeroposicion <= 122)//minuscula
      {
        nuevoNumeroposicion = (numeroposicion - 97 + keyoffset) % 26 + 97; // Obtener el nuevo código ASCII mediante fórmula y concatenamos para formar el resultado
      }

  stringCifrado += String.fromCharCode(nuevoNumeroposicion);//El String.fromCharCode() método estático que devuelve una cadena creada mediante el uso de una secuencia de valores Unicode especificada.
    }
    return stringCifrado;
  },
  decode:(keyoffset, stringCifrado) => {
    let stringDecifrado = "";

    for (let i=0; i<stringCifrado.length; i++)//encapsula el tipo de datos de la cadena primitiva.-lengthlongitud de largo
    {
      let numeroposicion = stringCifrado.charCodeAt(i); // obtenemos el código ASCII
      let nuevoNumeroposicion = 0;
      if (65<=numeroposicion && numeroposicion <= 90)//mayuscula
      {
        nuevoNumeroposicion = (numeroposicion + 65 - keyoffset) % 26 + 65;// Obtener el nuevo código ASCII mediante fórmula y concatenamos para formar el resultado
      }
      if ( 97<= numeroposicion && numeroposicion <= 122)//minuscula

      {
        nuevoNumeroposicion= (numeroposicion + 85 - keyoffset) % 26 + 97;// Obtener el nuevo código ASCII mediante fórmula y concatenamos para formar el resultado
      }

      stringDecifrado += String.fromCharCode(nuevoNumeroposicion);//El String.fromCharCode() método estático que devuelve una cadena creada mediante el uso de una secuencia de valores Unicode especificada.
    }

    return stringDecifrado;
  },


    //Funcion createCipherWithOffset que recibe offset Llave y retorna un objeto con las funciones encode y decode
    createCipherWithOffset: (numero)=>{
      var objeto = {
        // Funcion encode que recibe string texto original y retorna el texto encriptado
        encode(stringAcifrar){
          let cifrado = "";
          cifrado = cipher.encode(numero,stringAcifrar);
          return cifrado;
        },
        // Funcion encode que recibe string texto original y retorna el texto desencriptado
        decode(stringCifrado){
          let decifrado = "";
          decifrado = cipher.decode(numero,stringCifrado);
          return decifrado;
        }
      }
      return objeto; //Devuelve el objeto
    }
  };
