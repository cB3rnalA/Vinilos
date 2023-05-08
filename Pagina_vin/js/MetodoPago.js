function ValidarFormulario(){
    //alert("Hola");

    var formulario = document.addForm;

    if(formulario.nombre.value == ""){
        alert("Favor ingresar nombre");
    }

    if(formulario.NumTarj.value == ""){
        alert("Favor ingresar Numeros de la tarjeta");
    }

    if(formulario.FechaEx.value == ""){
        alert("Favor ingresar La fecha de expiración")
    }

    if(formulario.ccv.value == ""){
        alert("Favor Ingresar CCV")
    }
    formulario.submit();
}