window.cipher = {
  encode : (keyoffset, stringAcifrar) => {
    let stringCifrado = "";

    for (let i=0; i<stringAcifrar.length; i++)
    {
      let numeroposicion= stringAcifrar.charCodeAt(i);
      let nuevoNumeroposicion = 0;
      if (65<=numeroposicion && numeroposicion <= 90)//mayuscula
      {
        nuevoNumeroposicion = (numeroposicion - 65 + keyoffset) % 26 + 65;
      }
      if (97<=numeroposicion  && numeroposicion <= 122)//minuscula
      {
        nuevoNumeroposicion = (numeroposicion - 97 + keyoffset) % 26 + 97;
      }

  stringCifrado += String.fromCharCode(nuevoNumeroposicion);
    }
    return stringCifrado;
  },
  decode:(keyoffset, stringCifrado) => {
    let stringDecifrado = "";

    for (let i=0; i<stringCifrado.length; i++)
    {
      let numeroposicion = stringCifrado.charCodeAt(i);
      let nuevoNumeroposicion = 0;
      if (65<=numeroposicion && numeroposicion <= 90)
      {
        nuevoNumeroposicion = (numeroposicion + 65 - keyoffset) % 26 + 65;
      }
      if ( 97<= numeroposicion && numeroposicion <= 122)

      {
        nuevoNumeroposicion= (numeroposicion + 85 - keyoffset) % 26 + 97;
      }

      stringDecifrado += String.fromCharCode(nuevoNumeroposicion);
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
