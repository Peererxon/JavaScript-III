//ejemplo de funcion anonima que se lllama a si misma
//la ventaja de esto es que las variables que s edefinen aqui quedaran locales a diferencia de la otra
//************************************************************************************* */

(function(){
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