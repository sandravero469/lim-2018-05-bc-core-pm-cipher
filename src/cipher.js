
 const encriptar = () => {
     let texto = document.getElementById("cifrado").value;
     let scroll1 = parseInt(document.getElementById("scroll1").value);
     let textoCifrado = ""; //parseInt trunca los números en valores enteros.
     //Se permiten espacios anteriores y posteriores.
     for (let i = 0; i < texto.length;i++) {
         textoCifrado += String.fromCharCode((texto.toUpperCase().charCodeAt(i)-65+scroll1)%26+65);
     }
     document.getElementById("respuesta").value = textoCifrado;
 }




 const desencriptar =() => {
    let textoD = document.getElementById("respuesta").value;
    let scroll1 = parseInt(document.getElementById("scroll1").value);
    let textoCifradoD = "";
    for (var i = 0; i < textoD.length;i++) {
        textoCifradoD += String.fromCharCode((textoD.toUpperCase().charCodeAt(i)+65-scroll1)%26+65);
    }
    document.getElementById("respuesta").value = textoCifradoD;


 }

window.cipher = {
  encode: encriptar,
  decode: desencriptar,

};
