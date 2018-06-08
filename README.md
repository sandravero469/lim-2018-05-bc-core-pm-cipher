<<<<<<< HEAD
# Cifrado Césa

## Introducción

El [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher) es uno de los
primeros métodos de cifrado conocidos históricamente. Es un tipo de cifrado por
sustitución en el que una letra en el texto original es reemplazada por otra
letra que se encuentra un número fijo de posiciones más adelante en el alfabeto.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

El emperador Julio César lo usaba para enviar órdenes a sus generales en los
campos de batalla, es una de las técnicas más simples y más usadas para cifrar
un mensaje.

Por ejemplo si usáramos un desplazamiento de 3:

* Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

Actualmente todos los cifrados de sustitución alfabética simple, se descifran
con facilidad y en la práctica no ofrece mucha seguridad en la comunicación,
pero el cifrado César muchas veces puede formar parte de sistemas más complejos
de codificación, como el cifrado Vigenère, e incluso tiene aplicación en el
sistema ROT13.

## PUBLICO OBJETIVO
el publico al cual esta dirigido es para amigos, familiares y publico en general que neseciten mandar mensajes cifrados personalizado ya que ellos pueden elegir el desplazamiento en el cual quieren cifrar o decifrar su mensaje.

## OBJETIVO DEL USUARIO EN RELACION AL PRODUCTO
Cifar y decifrar mensajes de manera facil y rapida, para que cualquier otra persona relacionada con el emisor y receptor del mensaje no pueda tener conocimiento de lo que trasmite dicho mensaje.

## RESOLVIENDO EL PROBLEMA
Esta interfaz es facil de usar y adceder a ella  en caso los usurios no entiendan como usarla,en la web encontraran las indicaciones a seguir.
El objetivo de cifrado cesar es protejer la confidencialidad en el cifrado y decifrado de la información que maneje el emisor y receptor.


### UI

La interfaz permitir al usuario:

* elegir un `NUMERO que indica cuántas posiciones queremos cifrar o decifrar el texto. 
* permite insertar un mensaje (texto) que queremos cifrar en una ventana.
* ver el resultado del mensaje cifrado en otra ventana diferente de donde se inserto el mensaje a cifrar
* permite insertar un mensaje  cifrado en una venana diferente del cifrado.
* El resultado del mensaje descifrado se puede visualizar en una cuarta ventana.

### Scripts / Archivos
 *Entrada a la aplicacion:
 
 https://sandravero469.github.io/lim-2018-05-bc-core-pm-cipher/src/
 
 *Como usar la interfaz:
 ２ En la parte superior aparece un campo de texto con fondo celeste introdusca el texto para la transformación de cifrado actual.
 ３ Introducir valores numericos en el campo con fondo blanco obteniendo el desplazamiento,pulsa el botón CIFRAR,cambiará la 
  transformación a cifrado en el fondo rosado. 
４ En el modo de DECIFRADO se introduce el texto cifrado en el área de fondo amarillo, y aparecerá descifrado automáticamente en el área de fondo lila.

*Contenido de la aplicación. Este archivo
 contiene: 
 *HTML 
 *CSS 
 *JavaScript
=======
CIFRADO CESAR:
Introducción
El cifrado César es uno de los primeros métodos de cifrado conocidos históricamente. Es un tipo de cifrado por sustitución en el que una letra en el texto original es reemplazada por otra letra que se encuentra un número fijo de posiciones más adelante en el alfabeto.

caeser-cipher

El emperador Julio César lo usaba para enviar órdenes a sus generales en los campos de batalla, es una de las técnicas más simples y más usadas para cifrar un mensaje.

Por ejemplo si usáramos un desplazamiento de 3:

Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C
Actualmente todos los cifrados de sustitución alfabética simple, se descifran con facilidad y en la práctica no ofrece mucha seguridad en la comunicación, pero el cifrado César muchas veces puede formar parte de sistemas más complejos de codificación, como el cifrado Vigenère, e incluso tiene aplicación en el sistema ROT13.

PUBLICO OBJETIVO:

el publico al cual esta dirigido es para amigos, familiares y publico en general que neseciten mandar mensajes cifrados personalizado ya que ellos pueden elegir el desplazamiento en el cual quieren cifrar o decifrar su mensaje.

OBJETIVO DEL USUARIO EN RELACION AL PRODUCTO:

Cifar y decifrar mensajes de manera facil y rapida, para que cualquier otra persona relacionada con el emisor y receptor del mensaje no pueda tener conocimiento de lo que trasmite dicho mensaje.

RESOLVIENDO EL PROBLEMA:

Esta interfaz es facil de usar y adceder a ella en caso los usurios no entiendan como usarla,en la web encontraran las indicaciones a seguir. El objetivo de cifrado cesar es protejer la confidencialidad en el cifrado y decifrado de la información que maneje el emisor y receptor.

La interfaz permitir al usuario:

elegir un `NUMERO que indica cuántas posiciones queremos cifrar o decifrar el texto.
permite insertar un mensaje (texto) que queremos cifrar en una ventana.
ver el resultado del mensaje cifrado en otra ventana diferente de donde se inserto el mensaje a cifrar
permite insertar un mensaje cifrado en una venana diferente del cifrado.
El resultado del mensaje descifrado se puede visualizar en una cuarta ventana.
Scripts / Archivos
*Entrada a la aplicacion:

https://sandravero469.github.io/lim-2018-05-bc-core-pm-cipher/src/

*Como usar la interfaz: 
２ En la parte superior aparece un campo de texto con fondo celeste introdusca el texto para la transformación de cifrado actual. ３ Introducir valores numericos en el campo con fondo blanco obteniendo el desplazamiento,pulsa el botón CIFRAR,cambiará la transformación a cifrado en el fondo rosado. ４ En el modo de DECIFRADO se introduce el texto cifrado en el área de fondo amarillo, y aparecerá descifrado automáticamente en el área de fondo lila.

*Contenido de la aplicación. 
Este archivo contiene: 
*HTML 
*CSS 
*JavaScript
>>>>>>> e883a1f688e981dd721179a5fda3eae2471204a4
*cipher.js`
