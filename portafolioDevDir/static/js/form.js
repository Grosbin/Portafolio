const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');


const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const campos = {
	usuario: false,
	nombre: false,
	password: false,
	correo: false,
	telefono: false,
	mensaje: false
}

const validarCampos = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`form__${campo}`).classList.remove('form__group__incorrecto');
		document.getElementById(`form__${campo}`).classList.add('form__group__correcto');
		// document.querySelector(`#form__${campo} i`).classList.add('bxs-check-circle');
		// document.querySelector(`#form__${campo} i`).classList.remove('bxs-error-circle');
		document.querySelector(`#form__${campo} .form__error`).classList.remove('form__error-active');
		campos[campo] = true;
	} else{
		document.getElementById(`form__${campo}`).classList.add('form__group__incorrecto');
		document.getElementById(`form__${campo}`).classList.remove('form__group__correcto');
		// document.querySelector(`#form__${campo} i`).classList.add('bxs-error-circle');
		// document.querySelector(`#form__${campo} i`).classList.remove('bxs-check-circle');
		document.querySelector(`#form__${campo} .form__error`).classList.add('form__error-active');
		campos[campo] = false;
	}
}


const validaFormulario = (e) => {
	switch (e.target.name){
		case "nombre":
			validarCampos(expresiones.nombre, e.target, 'nombre');
		break;
		case "correo":
			validarCampos(expresiones.correo, e.target, 'correo');
		break;

	}
}


// Validar mensaje
const mensaje = document.getElementById('mensaje');
const contador = document.getElementById('contador');

mensaje.addEventListener('input', (e) =>{
    const target = e.target;
    const longitudMax = target.getAttribute('maxlength');
    const longitudAct = target.value.length;
    contador.innerHTML = `${longitudAct}/${longitudMax}`;

	if(longitudAct >= 20){
		document.getElementById("form__mensaje").classList.remove('form__group__incorrecto');
		document.getElementById("form__mensaje").classList.add('form__group__correcto');
		// document.querySelector("#form__mensaje i").classList.add('bxs-check-circle');
		// document.querySelector("#form__mensaje i").classList.remove('bxs-error-circle');
		document.querySelector("#form__mensaje .form__error").classList.remove('form__error-active');
		campos.mensaje=true;
	}else{
		document.getElementById("form__mensaje").classList.add('form__group__incorrecto');
		document.getElementById("form__mensaje").classList.remove('form__group__correcto');
		// document.querySelector("#form__mensaje i").classList.add('bxs-error-circle');
		// document.querySelector("#form__mensaje i").classList.remove('bxs-check-circle');
		document.querySelector("#form__mensaje .form__error").classList.add('form__error-active');
		campos.mensaje=false;
	}
});



inputs.forEach((input) => {
	input.addEventListener('keyup', validaFormulario);
	input.addEventListener('blur', validaFormulario);
});

formulario.addEventListener('submit', (e) => {
	
	if(campos.nombre && campos.correo && campos.mensaje){
		// formulario.reset();
		
		document.getElementById('form__exito').classList.add('form__exito__activo');
		setTimeout(() => {
			document.getElementById('form__exito').classList.remove('form__exito__activo');
			
		}, 5000);
		
		document.getElementById('campos__vacios').classList.remove('campos__vacios-active');
		
		document.querySelectorAll('.form__group').forEach((icono) => {
			icono.classList.remove('form__group__correcto');
		});
		contador.innerHTML = `${0}/${300}`;
	}else{
		e.preventDefault();
		document.getElementById('campos__vacios').classList.add('campos__vacios-active');
	}
});

