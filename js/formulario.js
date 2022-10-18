// Evento que se ejecuta al pulsar el botón agregar

document.querySelector("input[type=submit]").addEventListener("click", function(e) {
    

    // cancelamos el evento

    e.preventDefault();



    const nombre = document.querySelector("input[name=nombre]");

    const apellido = document.querySelector("input[name=apellido]");

    const rut = document.querySelector("input[name=rut]");

    const telefono = document.querySelector("input[name=telefono]");


    const direccion = document.querySelector("input[name=direccion]");

    const ciudad = document.querySelector("input[name=ciudad]");

    const email = document.querySelector("input[name=email]");
    const nacimiento = document.querySelector("input[name=nacimiento]");
    const civil = document.querySelector("input[name=civil]");
    
    agregarFila(nombre.value, apellido.value, rut.value,telefono.value, direccion.value, ciudad.value,email.value, nacimiento.value, civil.value);

    //limpiamos los valores del input

    nombre.value = "";
    apellido.value = "";
    rut.value = "";
    telefono.value = "";
    direccion.value = "";
    ciudad.value = "";
    email.value = "";
    nacimiento.value = "";
    civil.value = "";
    nombre.focus();



});










function agregarFila(nombre,apellido,rut,telefono,direccion,ciudad,email,nacimiento,civil) {

    // añadimos el alumno a la tabla crando el tr, td's y el botón para eliminarlo

    const tr = document.createElement("tr");
    const tdNombre = document.createElement("td");

    let txt = document.createTextNode(nombre);

    tdNombre.appendChild(txt);

    tdNombre.className = "nombre";



    const tdApellido = document.createElement("td");

    txt = document.createTextNode(apellido);

    tdApellido.appendChild(txt);

    tdApellido.className = "right";



    const tdRut = document.createElement("td");

    txt = document.createTextNode(rut);

    tdRut.appendChild(txt);

    tdRut.className = "right";

    const tdTelefono = document.createElement("td");

    txt = document.createTextNode(telefono);

    tdTelefono.appendChild(txt);

    tdTelefono.className = "right";



    const tdDireccion = document.createElement("td");

    txt = document.createTextNode(direccion);

    tdDireccion.appendChild(txt);

    tdDireccion.className = "right";



    const tdCiudad = document.createElement("td");

    txt = document.createTextNode(ciudad);

    tdCiudad.appendChild(txt);

    tdCiudad.className = "right";


   


    const tdEmail = document.createElement("td");

    txt = document.createTextNode(email);

    tdEmail.appendChild(txt);

    tdEmail.className = "right";


    const tdNacimiento = document.createElement("td");

    txt = document.createTextNode(nacimiento);

    tdNacimiento.appendChild(txt);

    tdNacimiento.className = "right";


    const tdCivil = document.createElement("td");

    txt = document.createTextNode(civil);

    tdCivil.appendChild(txt);

    tdCivil.className = "right";



    const tdRemove = document.createElement("td");




    tr.appendChild(tdNombre);

    tr.appendChild(tdApellido);

    tr.appendChild(tdRut);
    tr.appendChild(tdTelefono);


    tr.appendChild(tdDireccion);

    tr.appendChild(tdCiudad);
   

    tr.appendChild(tdEmail);

    tr.appendChild(tdNacimiento);
    
    tr.appendChild(tdCivil);

    



    tr.appendChild(tdRemove);



    const tbody = document.getElementById("listado").querySelector("tbody").appendChild(tr);



    // eliminamos la clase que tiene oculta la tabla cando no hay ningun alumno

    document.getElementById("listado").classList.remove("hide");

}





function myFunction() {
    // Declaro variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("filtro");
    filter = input.value.toUpperCase();
    table = document.getElementById("listado");
    tr = table.getElementsByTagName("tr");

    // Loop con for atarvez de toda las columnas de la tabla , y esconder cuando la consulta no este y  filtrar por apellido[1].
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}



const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');


const expresiones = {

    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    rut: /^[0-9]+-[0-9kK]{1}$/, //  12 digitos.puntos , guion y letra k
    telefono: /^(\+?56)?(\s?)(0?9)(\s?)[98765432]\d{7}$/, // +56 987654321
    direccion: /^[a-zA-Z0-9À-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    ciudad: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    email: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    nacimiento: /^[0-9]+-[0-9kK]{2}$/, //  12 digitos.puntos , guion y letra k
    civil: /^[a-zA-ZÀ-ÿ\s]{1,40}$/ // Letras y espacios, pueden llevar acentos.

}

const campos ={
    nombre : false,
    apellido : false,
    rut : false,
    telefono : false,
    direccion : false,
    ciudad : false,
    email : false,
    nacimiento : false,
    civil : false
}


const validarFormulario = (e) => {
    switch (e.target.name) {
        case 'nombre':

            validarCampo(expresiones.nombre, e.target, 'nombre');



            break;


        case 'apellido':

            validarCampo(expresiones.apellido, e.target, 'apellido');


            break;

        case 'rut':
            validarCampo(expresiones.rut, e.target, 'rut');


            break;

        case 'telefono':

            validarCampo(expresiones.telefono, e.target, 'telefono');


            break;


        case 'direccion':

            validarCampo(expresiones.direccion, e.target, 'direccion');


            break;

        case 'ciudad':

            validarCampo(expresiones.ciudad, e.target, 'ciudad');


            break;


        case 'email':

            validarCampo(expresiones.email, e.target, 'email');


            break;

        case 'nacimiento':

            validarCampo(expresiones.nacimiento, e.target, 'nacimiento');


            break;


        case 'civil':

            validarCampo(expresiones.civil, e.target, 'civil');


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
        document.querySelector(`#grupo__${campo}  .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos[campo] = false;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('click', (e) => {
    e.preventDefault();

    if(campos.nombre && campos.apellido && campos.rut && campos.telefono && campos.direccion && campos.ciudad && campos.email && campos.nacimiento && campos.civil){
		formulario.reset();

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 1000);

        document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
	} else {
		             document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
           }       

});







