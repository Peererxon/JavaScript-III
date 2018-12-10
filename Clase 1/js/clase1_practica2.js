console.log("");
console.log("Esta es la practica 2");

var alumno=[
    {
        nombre  :"Anderson",
        cursos  :
        [
            {
                nombre  :"javascript",
                notas   :[
                    10,20,30
                ]
            },
            {
                nombre  :"TypeScript",
                notas   :[
                    30,50,80
                ]
            }
        ]
    }
]
//esta notacion se le conoce como json (la forma de organizar las llaves y corchetes)

//alumno es un arreglo,cursos tambien y internamente las notas dentro de esos cursos si
console.log(alumno[0].nombre);
console.log("datos del primer alumno:");
console.log("Nombre del primer curso del alumno ",alumno[0].nombre)
console.log(alumno[0].cursos[1].nombre);
console.log("notas del curso ",alumno[0].cursos[1].nombre)
/*..........................................................*/
//estas son las notas del cursos segun la posicion indicada:
console.log(alumno[0].cursos[1].notas[0]);
console.log(alumno[0].cursos[1].notas[1]);
console.log(alumno[0].cursos[1].notas[2]);
/*..........................................................*/

console.log("");
console.log("Mostrando los datos con ciclos")//no asustarte con los 3 ciclos anidados,simplemente
//Es u ciclo para cada arreglo
for (let i= 0; i< alumno.length;+i++) {
    console.log("Nombre del alumno "+i+":"+alumno[i].nombre)
    for (let j= 0; j< alumno[i].cursos.length; j++) {
        console.log("Curso "+j+":"+alumno[i].cursos[j].nombre)
        console.log("Las notas del alumno en el curso son:")
        for (let k= 0; k< alumno[i].cursos[j].notas.length; k++) {
            console.log(alumno[i].cursos[j].notas[k])
            
        }
        
    }
    
}