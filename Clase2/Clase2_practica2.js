$(document).ready(
    function(){
    console.log("se cargo la pagina");
    document.body.style.backgroundColor="rgb(" + Math.round(Math.random()*255) +"," + Math.round(Math.random()*255) + "," + Math.round(Math.random()*255) + ")";
    $("h2").color = "rgb(" + Math.round(Math.random()*255) +"," + Math.round(Math.random()*255) + "," + Math.round(Math.random()*255) + ")";
    }
)
$("h2").click(function(){
    alert(this.innerHTML)
})

$("#subtitulo").click(function(){
    $("ol").hide();
})

$("div h2").click(function(){
    console.log("Buscando por selector avanzado")
})

$("#agregar").click(function(){
    let dato=prompt("Nuevo li a ser agregado");
    $("ol").append("<li>"+dato+"</li>");
})

$("#Esconder").click(function(){
    //let x=$("ol");
    if (this.value=="Esconder") {
        $("ol").hide();
        $("#Esconder").val("Mostrar")
    }else{
        $("ol").show();
        $("#Esconder").val("Esconder")
    }
})

$("#segundo").click(function(){
    if ($("#segundo").height()>=150) 
    {
        $("#segundo").height(30);
    }else
        $("#segundo").height($("#segundo").height()+10)
    
        $("#segundo").toggleClass("color");
})