
function Alumno(cedula, nombre, nota){
    this.cedula = cedula;
    this.nombre = nombre;
    this.nota = nota;
}
function Seccion(numero, curso, alumnos){
    this.numero = numero;
    this.curso = curso;
    this.alumnos = alumnos;
    this.calcProm = function(){
        let acum = 0;
        for(let i = 0;i<this.alumnos.length;i++){
            acum+= alumnos[i].nota;
        }
        return acum/this.alumnos.length;
    }
}
var seccion;
document.body.onload = function(){
    let numero = Math.ceil(Math.random()*2000+1000);
    seccion = new Seccion(numero, "Javascript", []);
    let listaSecc = document.getElementById("lista-secc");
    let h1Nuevo = document.createElement("h1")
    let texto = document.createTextNode("Seccion N°"+seccion.numero+" - "+seccion.curso);
    h1Nuevo.appendChild(texto);
    listaSecc.appendChild(h1Nuevo);
}
document.frm1.agregar.onclick = function(){
    validar(this.form);
}
var existe = false;
function agregarAlumno(form){
    let lista = document.getElementById("lista-secc");
    let cedula = form.cedula.value;
    let nombre = form.nombre.value;
    let nota = parseFloat(form.nota.value);
    let alumno = new Alumno(cedula, nombre, nota);
    seccion.alumnos.push(alumno);
    let nuevoAlumno = document.createElement("p");
    let alumnoAgregado = seccion.alumnos[seccion.alumnos.length-1];
    let texto = document.createTextNode("Cedula: "+alumnoAgregado.cedula+" - Alumno: "+alumnoAgregado.nombre+
    " - Nota: "+alumnoAgregado.nota+" pts.");
    nuevoAlumno.appendChild(texto);
    lista.appendChild(nuevoAlumno);

    if(!existe){
        let promSecc = document.getElementById("promedio");
        let promedioTexto = document.createElement("h3");
        promedioTexto.id = "prom";
        promSecc.appendChild(promedioTexto);
        existe = true;
    }
    document.getElementById("prom").innerHTML = "Promedio de la seccion: "+seccion.calcProm()+" pts.";
    
}
function validar(form){
    if(!estaVacio(form.cedula)){
        if(!estaVacio(form.nombre)){
            if(!estaVacio(form.nota)){
                let nota = parseFloat(form.nota.value);
                if(nota >= 0 && nota <= 100){
                    agregarAlumno(form);
                }
                else{
                    mostrarError(form.nota, "Nota fuera de rango (0 y 100)", 2);
                }
            }
            else{
                mostrarError(form.nota, "Nota vacía", 2);
            }
        }
        else{
            mostrarError(form.nombre, "Nombre vacío", 1);
        }
    }
    else{
        mostrarError(form.cedula, "Cedula vacía", 0);
    }
}
document.frm1.cedula.onkeypress = function(event){
    return validarNumero(event);
}
document.frm1.nota.onkeypress = function(event){
    return validarNumero(event);
}
document.frm1.cedula.onfocus = function(){
    quitarError(this, 0);
}
document.frm1.nombre.onfocus = function(){
    quitarError(this, 1);
}
document.frm1.nota.onfocus = function(){
    quitarError(this, 2);
}
function mostrarError(input, mensaje, i){
    let error = document.getElementsByClassName("error");
    input.style.background = "red";
    error[i].innerHTML = mensaje;
}
function quitarError(input, i){
    let error = document.getElementsByClassName("error");
    input.style.background = "white";
    error[i].innerHTML = "";
}