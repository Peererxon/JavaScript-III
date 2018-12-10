//ejemplo de funcion anonima que se lllama a si misma
//la ventaja de esto es que las variables que s edefinen aqui quedaran locales a diferencia de la otra
//************************************************************************************* */

//lo mismo que abajo solo que desde un boton
$('#cargar').click(function(){
    var ajax=new XMLHttpRequest();//instanciacion del xml 
    ajax.onreadystatechange=function(){ //es el que se ejecuta cuando se recibe respuesta del servidor
        if (this.readyState==4) 
        {
            //la respuesta se convierte en JSON
            let respuesta = JSON.parse(this.responseText);
            if (respuesta.Response=="True") {
                $('#resultado').html(respuesta.totalResults);
                for (let i = 0; i < respuesta.Search.length; i++) {
                    $('#resultado').append("<h2>"+respuesta.Search[i].Title+"</h2>");
                    $("#resultado").append("<img src='"+respuesta.Search[i].Poster+"'><br>");
                    $('#resultado').append("<p>"+respuesta.Search[i].Year+"</p>");    

                }    
            }else
            $("#resultado").html("Error al conectarse")
        }
    }
    let nombre=$("#nombre").val()
    let url="http://www.omdbapi.com";
    let recurso="/?";
    let parametros="i=tt3896198&apikey=5c484083&s="+nombre;
    ajax.open("GET",url+recurso+parametros,true);
    ajax.send();   
});
//lo mismo que abajo solo que desde un boton