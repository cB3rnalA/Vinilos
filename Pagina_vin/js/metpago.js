
/* //se guarda el valor en una variable
const nombre = document.getElementById('nomtarjnueva'); 

const nombreerror = document.getElementById('nombreerror');

const button = document.getElementById('button');

// FUNCION FLECHA ()=>{} 
// Esto esta pendiente de lo que pasa al realizar una accion (el click) addEventListener

button.addEventListener('click', ()=>{
    console.log('boton presionado');
});

// intento malio sal xd  */

function ValidarTexto(){
    console.log("nombre de tarjeta")
    let nom=document.getElementById("nomtarjnueva").value
    if (nom.length==0)
    {
        document.getElementById("error_nom").innerHTML="Debe rellenar el campo"
        console.log("el nombre esta vacio");
    }
}



function ValidarNum_tar(){/* Incompleto */
    console.log("numero tarjeta")
    let num=document.getElementById("numtarj").value

    if (num.length!=16)
    {
        document.getElementById("help_num").innerHTML="El numero de de tarjeta es invalido"
    }


}