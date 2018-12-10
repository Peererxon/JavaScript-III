calcular12porc=function(precio){
    return precio*0.12
}


var carro={
    "marca"     :"chevrolet",
    "modelo"    :"aveo",
    "año"       :2015,
    "precio"    :1500,
    "mostrar"   :function(){
        console.log("El año es ", this.año) //Ojo con el this
    },
    "aumentarPrecio" : function(aumento){
        this.precio+=aumento;
    },
    "calcularIva"   :calcular12porc  //al llamar calcularIva va a ejecutar la funcion
    //con esto se le esta asignando a una variable una funcion
};
//se le asigna un atributo a el objeto en tiempo de ejecucion:

//?¡?¡?¡?¡?¡?¡¡?¡?¡?¡?¡?¡?¡?¡?¡?¡?¡?¡?¡?¡?¡?¡?¡?¡?¡?¡?¡?¡?¡?¡?//
carro.duelo="Anderson";
carro.precio=1000;
//?¡?¡?¡?¡?¡?¡¡?¡?¡?¡?¡?¡?¡?¡?¡?¡?¡?¡?¡?¡?¡?¡?¡?¡?¡?¡?¡?¡?¡?¡?//  

console.log("El iva del precio es de: ",carro.calcularIva(carro.precio)); //como la funcion esta definida afuera se usa carro.precio
//por medio de un parametro, a diferencia de calcularIva que esta dentro del objeto y accede a el directamente con el this

console.log("la marca del carro es ", carro.marca);
console.log("la marca del carro es ",carro["marca"]); //otra forma de llamar un atributo
console.log("El precio del carro es: ",carro.precio);
carro.aumentarPrecio(200);
console.log("El nuevo precio del carro ",carro.modelo," es de: ",carro.precio);

//******************************************************************************** */
//ERROR DE EJECUCION:
//console.log("El precio del carro con un aumento es de:",carro.aumentarPrecio(800))
//esto da undefined porque esta funcion no tiene un valor de retorno
//******************************************************************************** */

console.log("El modelo del carro es:",carro.modelo);
carro.mostrar();

/*FORMA PARA LLAMAR UN METODO DE UN OBJETO POR MEDIO DE CORCHETES*/
//carro["mostrar"](); esta seria la forma de llamar un metodo con los corchetes