//ejemplo de funcion anonima que se lllama a si misma
//la ventaja de esto es que las variables que s edefinen aqui quedaran locales a diferencia de la otra
//************************************************************************************* */

//lo mismo que abajo solo que desde un boton
$('#cargar').click(function(){
    var ajax=new XMLHttpRequest();//instanciacion del xml 
    ajax.onreadystatechange=function(){ //es el que se ejecuta cuando se recibe respuesta del servidor
        if (this.readyState==4) 
        {
            $('#resultado').html(this.responseText);
        }
    }
    
    let url="http://127.0.0.1/28113112/index.html";
    let recurso=""
    let parametros=""
    ajax.open("GET",url+recurso+parametros,true);
    ajax.send();   
});
//lo mismo que abajo solo que desde un boton

(function(){
    var ajax=new XMLHttpRequest();//instanciacion del xml 
    ajax.onreadystatechange=function(){ //es el que se ejecuta cuando se recibe respuesta del servidor
        if (this.readyState==4) 
        {
            console.log(this.status);
            console.log(this.responseText);//esta es la respuesta del servidor
        }
    }
    
    let url="http://www.cne.gov.ve/web/registro_electoral/";
    let recurso="/ce.php?"
    let parametros="nacionalidad=V&cedula=14978131"
    ajax.open("GET",url+recurso+parametros,true);
    ajax.send();   
})()//estos dos parentesis huerfanos son para que la funcion se llame sola;
//************************************************************************************* */

var ajax=new XMLHttpRequest();
ajax.onreadystatechange=function(){
    if (this.readyState==4) 
    {
        console.log(this.status);
        console.log(this.responseText);
    }
}

let url="http://www.cne.gov.ve/web/registro_electoral/";
let recurso="/ce.php?"
let parametros="nacionalidad=V&cedula=14978131"
//estos son los tres parametros que necesita un servidor 
//se estan separando en tres parameteros para facilitar la forma de entendimiento,
//esto puede estar en una sola variable
//en este caso aparece un eror ya que no se tienen permisos para manda rsolicitudes
//a este backend
ajax.open("GET",url+recurso+parametros,true);
ajax.send();