
alert("Bienvenid@ a cifrado cesar");


var name= prompt("Bienvenid@, ¿cuál es tu nombre?");
//Imprimiendo bienvenida y nombre de usuario
var name2= document.getElementById("" + "name");
name2.innerHTML=name;


document.getElementById("encode").addEventListener("click", Cifrar);
function Cifrar()
{
  var llave = parseInt(document.getElementById('keyoffset').value);
  var stringAcifrar = document.getElementById("stringAcifrar").value;
  var stringCifrado = cipher.encode(llave,stringAcifrar);
  document.getElementById("resultadoCifrado").innerHTML = stringCifrado;
}
document.getElementById("decode").addEventListener("click", Decifrar);
function Decifrar()
{
  var llave= parseInt(document.getElementById('keyoffset').value);
  var stringCifrado = document.getElementById("stringCifrado").value;
  var stringDecifrado = cipher.decode(llave,stringCifrado);
  document.getElementById("resultadoDecifrado").innerHTML = stringDecifrado;
}
