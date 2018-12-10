$("#loading").hide();
$("#error").hide();

$("#nombre").keyup(function() {
    $("#loading").show();
    $.ajax({
        url     :"http://www.omdbapi.com/?",
        success : function(respuesta){
                console.log(respuesta);
                $('#resultado').html(respuesta.totalResults);
                for (let i = 0; i < respuesta.Search.length; i++) {
                    $('#resultado').append("<h2>"+respuesta.Search[i].Title+"</h2>");
                    $("#resultado").append("<img src='"+respuesta.Search[i].Poster+"'><br>");
                    $('#resultado').append("<p>"+respuesta.Search[i].Year+"</p>");    

                }    
        },
        data    :{
            s   :$("#nombre").val(),//valor del input 
          apikey :"5c484083",//apikey
        },
        error   :function() {
            console.log("Hay un error")
        },
        timeout:3000,
        complete: function(){
            $("#loading").hide();
        },
        type    :"GET",
        dataType: "JSON"
    })
});
//se va ir por error cuando la respuesta no sea 200, que es una respuesta exitosa
//

