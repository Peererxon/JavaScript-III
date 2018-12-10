function Seccion(nombre,numero){
    this.nombre=nombre;
    this.numero=numero;
}

var sec=new Seccion("JavaScript",2762);
console.log(JSON.stringify(sec));
//esto se hizo solo para probar


var alumno={
    "nombre"    :"Anderson Gil",
    "curso"     :"java script",
    "nota"      :90,
    "aprobado"  :false
}

//convertir objeto a string
//probar con node nombrearchivo.js para ver el resultado en string
console.log(JSON.stringify(alumno));

// Se define un string con notacion de objeto
var objetoStr='{"producto":"monitor",'+
                ' "color" : "blanco" ,'+
                ' "encendido":true}'
// Se convierte el string a un objeto                
var objeto=JSON.parse(objetoStr);
if (objeto.encendido) {
    console.log(objeto.color)
}
console.log(objeto);