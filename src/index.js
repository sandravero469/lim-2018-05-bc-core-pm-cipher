
const cifrar=document.getElementById('cifrar');
const descifrar=document.getElementById('descifrar');

cifrado.addEventListener('input', () => {
    console.log(cifrado.value);
 })
//scroll envía un evento cada vez que cambia la posición de desplazamiento del elemento
// independientemente de la causa
scroll1.addEventListener('input', () => {
    console.log(scroll1.value);
})
cifrar.addEventListener('click', window.cipher.encode) ;


descifrar.addEventListener('click', window.cipher.decode);
