
alert("Bienvenid@ a cifrado cesar");


var name= prompt("Bienvenid@, ¿cuál es tu nombre?");
//Imprimiendo bienvenida y nombre de usuario
var name2= document.getElementById("" + "name");
name2.innerHTML=name;


document.getElementById("encode").addEventListener("click", Cifrar);
function Cifrar()
{
  var numero = parseInt(document.getElementById('keyoffset').value);
  var stringAcifrar = document.getElementById("stringAcifrar").value;
  var stringCifrado = cipher.encode(numero,stringAcifrar);
  document.getElementById("resultadoCifrado").value = stringCifrado;
}
document.getElementById("decode").addEventListener("click", Decifrar);
function Decifrar()
{
  var numero = parseInt(document.getElementById('keyoffset').value);
  var stringCifrado = document.getElementById("stringCifrado").value;
  var stringDecifrado = cipher.decode(numero,stringCifrado);
  document.getElementById("resultadoDecifrado").value = stringDecifrado;
}
