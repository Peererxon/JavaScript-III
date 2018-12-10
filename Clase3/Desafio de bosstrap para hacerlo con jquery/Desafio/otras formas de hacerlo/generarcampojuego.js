//VARIABLES:
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&//
let carta =     ["1","1","2","2","3","3","4","4","5","5","6" ,"6" ,"7" ,"7"  ,"8" ,"8"];
let pila =     ["0","0","0","0","0","0","0","0","0","0","0" ,"0" ,"0" ,"0"  ,"0" ,"0"];
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&//


$("#Generar").click(function(){
    Generar ()
})

function Generar (){

	let pos = Math.ceil(Math.random() * 3) ;
         let camposjuego;
         camposjuego =campos[pos];
         console.log ("camposjuego  :  " + camposjuego  );
         
}










