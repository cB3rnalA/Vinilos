const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
    rut: /^([1-9]{1}|([1-9]{1}[0-9]{1}))\.(\d{3}\.\d{3}-)([a-zA-Z]{1}$|\d{1}$)/, // EL rut comoletio con . y -
    nombre: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
    apellido: /^[a-zA-ZÀ-ÿ\s]{4,40}$/, // Letras y espacios, pueden llevar acentos.
    direccion: /^[a-zA-ZÀ-ÿ\s]{4,40}[0-9]{2,5}$/, // Letras y espacios, pueden llevar acentos.
    region: /^[a-zA-ZÀ-ÿ\s]{4,40}$/, // Letras y espacios, pueden llevar acentos.
    comuna: /^[a-zA-ZÀ-ÿ\s]{4,40}$/, // Letras y espacios, pueden llevar acentos.
    telefono: /^\d{9}$/, // 7 a 14 numeros.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password: /^.{4,12}$/, // 4 a 12 digitos.

}

const campos = {
    usuario: false,
    nombre: false,
    apellido: false,
    direccion: false,
    region: false,
    comuna: false,
    telefono: false,
    correo: false,
    password: false,


}

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "rut":
            validarCampo(expresiones.rut, e.target, 'rut');
            break;
        case "nombre":
            validarCampo(expresiones.nombre, e.target, 'nombre');
            break;
        case "apellido":
            validarCampo(expresiones.apellido, e.target, 'apellido');
            break;
        case "direccion":
            validarCampo(expresiones.direccion, e.target, 'direccion');
            break;
        case "region":
            validarCampo(expresiones.region, e.target, 'region');
            break;
        case "comuna":
            validarCampo(expresiones.region, e.target, 'comuna');
            break;
        case "correo":
            validarCampo(expresiones.correo, e.target, 'correo')
            break;
        case "telefono":
            validarCampo(expresiones.telefono, e.target, 'telefono');
            break;
        case "password":
            validarCampo(expresiones.password, e.target, 'password');
            validarPassword2();
            break;
        case "password2":
            validarPassword2();
            break;
    }
}

const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)) {
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos[campo] = true;
    } else {
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos[campo] = false;
    }
}

const validarPassword2 = () => {
    const inputPassword1 = document.getElementById('password');
    const inputPassword2 = document.getElementById('password2');

    if (inputPassword1.value !== inputPassword2.value) {
        document.getElementById(`grupo__password2`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`#grupo__password2 i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo__password2 i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos['password'] = false;
    } else {
        document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo__password2`).classList.add('formulario__grupo-correcto');
        document.querySelector(`#grupo__password2 i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo__password2 i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos['password'] = true;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {

    const terminos = document.getElementById('terminos');
    if (campos.rut && campos.nombre && campos.apellido && campos.direccion && campos.region && campos.comuna && campos.correo && campos.telefono && campos.password && terminos.checked) {


        document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
        setTimeout(() => {
            document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
        }, 3000);

        document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
            icono.classList.remove('formulario__grupo-correcto');
        });

        //COLOCAR QUE LA WEA SE VEA EN LA URL
    } else {
        document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
        setTimeout(() => {
            document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');
        }, 3000);
        e.preventDefault();
    }
})