/* $("#botonMenu").click(function(){
    $(".col-md-4").fadeToggle("slow"); Quitar y agregar las conlumnas de forma intermitente
}) */

/*  $("#botonMenu").click(function(){
    $(".container").fadeToggle("slow");
}) */

  $("#botonMenu").click(function(){
    $(".container").slideToggle(1200);//quitar y agregar la columna en forma de slide
})

/* $(".central-boton").click(function(){
    $(this.parentNode).fadeOut("slow");//this.parentNode es para referirse a su padre (ShopCard,watch this)
}) */

/*  $(".central-boton").click(function(){
    $(this.parentNode).animate({"width":"500"});//animacion
    $(this.parentNode).css({"background-color":"black"})
})  */
//el encadenamiento lo hace ambas animaciones a la vez
//con elcallback se hace despues que se ejecuta cierta animacion
 let n=0;
$(".central-boton").click(function(){
    $(this.parentNode).animate({"width":"500"},
    function(){
        $(this).css({"background-color":"red"});
        $(this).fadeOut("slow");
        n++
        if(n==6)
            $(".container").slideToggle(500);
        }
    );
})

$(".img-responsive").mouseenter(
    function(){
        $(this).fadeOut("slow");
    }
)
let r=0;
$(".central-boton").mouseout(
    
    function(){
        r+=90
        $(this).css("transform","rotateZ("+r+"deg)")
    }
)