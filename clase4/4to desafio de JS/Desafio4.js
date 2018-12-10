$("div").css('margin', '20px 3px');

//************************************************************************************* */
(function(){
    var ajax=new XMLHttpRequest();//instanciacion del xml 
    ajax.onreadystatechange=function(){ //es el que se ejecuta cuando se recibe respuesta del servidor
        if (this.readyState==4) 
        {
            resultado=JSON.parse(this.responseText)
            console.log(resultado)
            $('#demo').append("<h1>"+ "Nombre de la API: NASA APIs"+ "</h1>");
             $('#resultado').append("<h1>"+ "En tiempo de ejecucion"+ "</h1>");
            $('#resultado').append("<p>"+"Derechos de CopyRight de la api: "+"<strong>"+ resultado.copyright+"</strong>"+ "</p>");

            $("#resultado").append("<h3> Fecha: "+resultado.date+"</h3>");
            $("#resultado").append("<h3> Titulo:"+resultado.title+"</h3>");
            console.log(' llave: 58ODk7jq9EQn6iuNeSrBoIXMjrWFiXhSO7V0EK2E')
        }
    }
    
    let url="https://api.nasa.gov/planetary/apod?api_key=58ODk7jq9EQn6iuNeSrBoIXMjrWFiXhSO7V0EK2E";
    ajax.open("GET",url);
    ajax.send();   
})();
//************************************************************************************* */


//************************************************************************************* */
$(document).ready(function(){
    alert("la pagina a cargado exitosamente")
$.ajax({
        url     :"https://api.nasa.gov/planetary/apod?",
        success : function(respuesta){
                console.log("2da respuesta: "+respuesta.copyright);
                $('#resultado').append("<h1> Api de la NASA al cargar la pagina" +"</h1>");

                    $('#resultado').append("<h2> Titulo: "+respuesta.title+"</h2>");
                     $('#resultado').append("<p> Descripcion: "+respuesta.explanation+"</p>");
                    $('#resultado').append("<h3> año:"+respuesta.date+"</h3>");      
        },
        data    :{
          api_key :"58ODk7jq9EQn6iuNeSrBoIXMjrWFiXhSO7V0EK2E",//apikey
        },
        error   :function() {
            console.log("Hay un error")
        },
        type    :"get",
        dataType: "JSON"
    })

});


//************************************************************************************* */


//************************************************************************************* */
$("#cargar").click(function() {
    console.log("mi apik de este sitio es: 94c5c0e852b23d7bf8a2063dac8be315d791e643")
    $.ajax({
        url     :"https://gateway.marvel.com:443/v1/public/series?",
        success : function(respuesta){
                console.log(respuesta.data.results);
                for (let i = 0; i < respuesta.data.results.length; i++) {
                    $('#resultado2').append("<h2> Titulo de la obra:"+respuesta.data.results[i].title+"</h2>")

                    if (respuesta.data.results[i].description!==null) {
                        $("#resultado2").append("<p> Descripcion: "+respuesta.data.results[i].description+"<p>");
                    }else{
                       $("#resultado2").append("<p> Descripcion: "+ "No hay resultados acerca de la description de esta obra"+"<p>"); 
                    }
                    $('#resultado2').append("<p> año de finalizacion:"+respuesta.data.results[i].endYear+"</p>");    

                }    
        },
        data    :{
          ts:"1",
          apikey :"143069c476425149235b25bd06e26abf",//apikey publica
          //c7bc59faf90af27b407844d4a830aa15ab448742 private key
          // la suma de la ts+private key+public key=1c7bc59faf90af27b407844d4a830aa15ab448742143069c476425149235b25bd06e26abf
          //esa cadena se mete aqui http://www.md5.cz y se genera el codigo de abajo
          hash:"73bd11e37b8821fa2de7b6704b23c3f8",
          title:"iron man",
          limit: "7",
        },
        error   :function() {
            console.log("Hay un error")
        },
        timeout:3000,
        complete: function(){
            console.log("complete")
        },
        type    :"get",
        dataType: "JSON"
    })
});

//************************************************************************************* */

//************************************************************************************* */
$("#busqueda1").click(function() {
        if ( $("#barraBusqueda1").val()=="" || $("#maximoBusqueda1").val()==""  ) {
            alert("Debe escribir algo en el input")
        }else{
                console.log("mi apik de este sitio es: 94c5c0e852b23d7bf8a2063dac8be315d791e643")
                $.ajax({
                    url     :"https://gateway.marvel.com:443/v1/public/series?",
                    success : function(respuesta){
                            console.table(respuesta);
                            if (respuesta.data.results.length>=1) {
                                    for (let i = 0; i < respuesta.data.results.length; i++) {
                                $('#resultado3').append("<h2> Titulo de la obra:"+respuesta.data.results[i].title+"</h2>")

                                if (respuesta.data.results[i].description!==null) {
                                    $("#resultado3").append("<p> Descripcion: "+respuesta.data.results[i].description+"<p>");
                                }else{
                                   $("#resultado3").append("<p> Descripcion: "+ "No hay resultados acerca de la description de esta obra"+"<p>"); 
                                }
                                $("#resultado3").append("<img src='"+respuesta.data.results[i].thumbnail.path+"."+respuesta.data.results[i].thumbnail.extension+"'><br>");
                                $('#resultado3').append("<p> año de finalizacion:"+respuesta.data.results[i].endYear+"</p>");
                                $('#resultado3').append("<br>");      

                                }                                
                            }else {
                                alert("no hay resultados que coincidan con su busqueda")
                            }
  
                    },
                    data    :{
                      ts:"1",
                      apikey :"143069c476425149235b25bd06e26abf",//apikey publica
                      //c7bc59faf90af27b407844d4a830aa15ab448742 private key
                      // la suma de la ts+private key+public key=1c7bc59faf90af27b407844d4a830aa15ab448742143069c476425149235b25bd06e26abf
                      //esa cadena se mete aqui http://www.md5.cz y se genera el codigo de abajo
                      hash:"73bd11e37b8821fa2de7b6704b23c3f8",
                      title:$("#barraBusqueda1").val(),
                      limit: $("#maximoBusqueda1").val(),
                    },
                    error   :function() {
                        console.log("Hay un error")
                    },
                    timeout:3000,
                    complete: function(){
                        console.log("complete")
                        $("img").mouseover(function(event) {
                            $("img").css('box-shadow', '0px 2px 3px 10px rgba(0,0,0,0.75)');
                        });
                        $("img").mouseleave(function(event) {
                           $("img").css('box-shadow', 'none');
                        });
                    },
                    type    :"get",
                    dataType: "JSON"
                })
        }
});

//************************************************************************************* */

//************************************************************************************* */
$("#busqueda2").click(function() {
        if ( $("#barraBusqueda2").val()=="" || $("#maximoBusqueda2").val()==""  ) {
            alert("Debe escribir algo en el input")
        }else{
                console.log("mi apik de este sitio es: 94c5c0e852b23d7bf8a2063dac8be315d791e643")
                 $.ajax({
                    url     :"http://www.omdbapi.com/?",
                    success : function(respuesta){
                            console.log(respuesta);
                            for (let i = 0; i < respuesta.Search.length; i++) {
                                $('#resultado4').append("<h2>"+respuesta.Search[i].Title+"</h2>");
                                $("#resultado4").append("<img src='"+respuesta.Search[i].Poster+"'><br>");
                                $('#resultado4').append("<p>"+respuesta.Search[i].Year+"</p>");    

                            }    
                    },
                    data    :{
                        s       :$("#barraBusqueda2").val(),
                        limit   :$("#maximoBusqueda2").val(),
                      apikey    :"5c484083",
                    },
                    error   :function() {
                        console.log("Hay un error");
                    },
                    complete: function(){
                    },
                    type    :"json",
                    dataType: "JSON"
                })
        }
});

//************************************************************************************* */