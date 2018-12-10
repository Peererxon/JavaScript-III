function getChar(event) {
	if (event.keyCode != 0)
		return String.fromCharCode(event.keyCode);
	else
		if (event.charCode != 0)
			return String.fromCharCode(event.charCode);
		else
			return null;
}

function validar_select(select) {
	if (select.selectedIndex == 0) {
		alert("Debe seleccionar un elemento de la lista");
		select.focus();
		return false;
	} else
		return true;
}

function validarletra(e) {
	// para que funcione en cualquier navegador
	tecla = (e.keyCode != 0) ? e.keyCode : e.charCode;
	// para permitir backspace
	if (tecla == 8) return true;
	if(tecla == 32) return false;
	// de define el conjunto de caracteres validas
	patron = /[A-Za-z\s]/;
	// se convierte a caracter
	te = String.fromCharCode(tecla);
	// se evalua si la tecla presionada este en el conjunto
	return patron.test(te);
}

function validar_numero(e) {
	// para que funcione en cualquier navegador
	tecla = (e.keyCode != 0) ? e.keyCode : e.charCode;
	// para permitir backspace
	if (tecla == 8) return true;
	// de define el conjunto de caracteres validas
	patron = /[0-9-]/;
	// se convierte a caracter
	te = String.fromCharCode(tecla);
	// se evalua si la tecla presionada este en el conjunto
	return patron.test(te);
}

function esta_vacio(campo, id) {
	mensaje = document.getElementById(id);
	if (campo.value == "") {
		mensaje.innerHTML = "Debe completar este campo";
		campo.style.backgroundColor = "red";
		campo.focus();
		return true;
	} else {
		campo.style.backgroundColor = "white";
		return false;
	}
}

function validarcorreo(correo, input, id,arreglo) {
	var campo = document.getElementById(id);
	regx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
	if (!regx.test(correo.value)) {
		campo.innerHTML = "<h1 style='text-align:center; background:rgb(250, 8, 8);'>Correo inválido</h1>"
		input.style.backgroundColor = "red";
		input.focus();
		return false;
	}
	else {
		campo.innerHTML = "";
		input.style.backgroundColor = "white";
		if (arreglo.indexOf(input.value.toLowerCase()) == -1) {
			arreglo.push(input.value);
			return false
		}
		else {
			campo.innerHTML = "<h1 style='text-align:center; background:rgb(250, 8, 8);'>Este dato ya se encuentra</h1>";
			input.style.backgroundColor = "red";
			input.focus();
			return true
		}

	}

}

function validarnumero(e) {
	tecla = (document.all) ? e.keyCode : e.which;
	if (tecla == 8) return true;
	patron = /\d/;
	te = String.fromCharCode(tecla);
	return patron.test(te);
}

function numeroReal(e) {
	tecla = (document.all) ? e.keyCode : e.which;
	if (tecla == 8) return true;
	patron = /[^0-9.-]/;
	te = String.fromCharCode(tecla);
	return patron.test(te);
}