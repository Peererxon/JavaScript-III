//se esta haciendo lo mismo que en la practica 2 pero ahora incorporando clases
function Curso(nombre,notas){   //esto es como una clase
    this.nombre=nombre;
    this.notas=notas;
}
//esta es la manera de instanciar "clases" en javascript
var c1= new Curso ("TypeScript",[89,70,48]);
var c2=new Curso ("C++",[56,64,91])
//ver que se le esta pasando por parametro un arreglo

//los nombres de las clases en mayusculas y las constantes,todo lo demas en minusculas
function Alumno(nombre,cursos){
    this.nombre=nombre;
    this.cursos=cursos;
    this.agregarCurso= function(curso){
        this.cursos.push(curso)
    //si al momento de pasar el parametro no se envia un arreglo
    //dará error el metodo push
    }
}

var a= new Alumno("Anderson Gil",[c1]) //Primer alumno y se le pasa el primer curso
a.agregarCurso(c2);//se le agrega el segundo curso

var b=new Alumno("pedro", [new Curso("html",[])])//2do alumno
b.cursos.push(new Curso("git",[]));

var alumnos=[];
//se define un arreglo vacio
alumnos.push(a);//se esta agregando el primer alumno 
alumnos.push(new Alumno("Carmen",[]));//se esta agregando un nuevo alumno al arreglo

console.log("el nombre es:",c1.nombre);
console.log("las notas son:");

for (let i= 0; i<c1.notas.length; i++) {
    console.log(c1.notas[i]);
    
}
 console.log("")
for (let i= 0; i< alumnos.length;+i++) {
    console.log("Nombre del alumnos "+i+":"+alumnos[i].nombre)
    for (let j= 0; j< alumnos[i].cursos.length; j++) {
        console.log("Curso "+j+":"+alumnos[i].cursos[j].nombre)
        console.log("Las notas del alumnos en el curso son:")
        for (let k= 0; k< alumnos[i].cursos[j].notas.length; k++) {
            console.log(alumnos[i].cursos[j].notas[k])
            
        }
        
    }
    
}