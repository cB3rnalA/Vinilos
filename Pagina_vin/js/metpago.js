function ValidarTexto(){
    console.log("nombre de tarjeta")
    let nom=document.getElementById("tarjnueva").value
    if (nom.length==0)
    {
        document.getElementById("help_nom").innerHTML="Debe rellenar el campo"
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