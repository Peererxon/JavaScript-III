//EJECUCIONES
//()()()()()()()()()()()()()()()()()()()()()()()()()()()//
document.registro.cedula.onkeypress=validarNumero;
document.registro.nota.onkeypress=validarNumero
//()()()()()()()()()()()()()()()()()()()()()()()()()()()//

function Alumno(nombre, cedula, nota){
    this.cedula = cedula;
    this.nombre = nombre;
    this.nota = nota;
}
function Seccion(numero, curso, alumnos){
    this.numero = numero;
    this.curso = curso;
    this.alumnos = alumnos;
    this.calcProm = function(){
        let acumulador = 0;
        for(let i = 0;i<this.alumnos.length;i++){
            acumulador+= alumnos[i].nota;
        }
        return acumulador/this.alumnos.length;
    }
}

document.body.onload=function(){
  let numero = Math.ceil(Math.random()*2134+8754);
  seccion=new Seccion(numero,"JavaScript",[]);
  let contenido=document.createTextNode("Seccion N°"+seccion.numero+" : "+seccion.curso);
  let enunciado=document.getElementById("resultados");
  enunciado.appendChild(contenido);
}

//Funcion anonima
// anonima anonima anonima anonima anonima anonima anonima anonima anonima anonima//
document.registro.procesarboton.onclick=function(){
  let formulario=document.registro;

	validar(formulario);
  //(PRIMERO)
}
// anonima anonima anonima anonima anonima anonima anonima anonima anonima anonima//

//VALIDAR QUE NO ESTEN VACIOS
//-----------------------------------------------------------------------------//
function validar(form){
	if (estaVacio(form.nombre,"debe escribir un nombre")) {
		mostrarEnrojo(1);
	}else if (estaVacio(form.cedula,"debe escribir una cedula")) {
		  mostrarEnrojo(2);
      QuitarRojo(1);
	     }else if (estaVacio(form.nota,"debe escribir su nota")){
           mostrarEnrojo(3);
           QuitarRojo(2);
        }else{
            QuitarRojo(1);
            QuitarRojo(2);
            QuitarRojo(3);
            validarNota(form)
            }
 //(SEGUNDO)       
}
//-----------------------------------------------------------------------------//


//VALIDAR EL VALOR DEL INPUT DE LA NOTA SOLO SI NO ESTAN VACIOS PARA AGREGARLOS POSTERIORMENTE
//*****************************************************************************//
function validarNota(form){
    let notaError=document.getElementById("alertadesafio1");

  if (form.nota.value>=0 &&form.nota.value<=100){
    let nombreAlumno=form.nombre.value;
    let notaAlumno=parseInt(form.nota.value);
    let cedulaAlumno=form.cedula.value;
    QuitarRojo(1);
    QuitarRojo(2);
    QuitarRojo(3);
    notaError.style.visibility="hidden";
    agregarAlumno(nombreAlumno,cedulaAlumno,notaAlumno)
  }else{
    notaError.style.visibility="visible";
    mostrarEnrojo(3);
  }
//(TERCERO)
}
//*****************************************************************************//

function agregarAlumno(nombre,cedula,nota) {
  let listado = document.getElementById("listado");
    if (seccion.alumnos.length == 0){
          primerap=document.createElement("p");
      }
        
    nuevoAlumno= new Alumno(nombre,cedula,nota);
    console.log(seccion);
    seccion.alumnos.push(nuevoAlumno);
    console.log(seccion.alumnos);
    let nuevap=$("<p></p>").text("love ")
    let texto=document.createTextNode("El nombre del alumno es:");
    nuevap.appendChild(texto);
    listado.appendChild(nuevap);
    //promedio
    primerap.innerHTML= "Productos:";
    listado.appendChild(primerap);
    //(CUARTO)
}


//FUNCIONES para la validacion
//°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°//
function mostrarEnrojo(bandera){
  let resultado;
  if (bandera===1)
      resultado=document.getElementById("nombre");
  else if (bandera===2)
        resultado=document.getElementById("cedula");
    else if (bandera===3)
          resultado=document.getElementById("nota");

  resultado.style.backgroundColor="red"
}

function QuitarRojo(bandera){
  let resultado;
  if (bandera===1)
      resultado=document.getElementById("nombre");
  else if (bandera===2)
        resultado=document.getElementById("cedula");
    else if (bandera===3)
          resultado=document.getElementById("nota");

  resultado.style.backgroundColor="white"
}
//°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°//