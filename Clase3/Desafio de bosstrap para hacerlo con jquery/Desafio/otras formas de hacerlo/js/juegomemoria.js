let clases=["seleccionada","Carta1","Carta2"];
let par=0;
let anterior=0;
let cartaVieja="";
let intentos=0;
let campos =[
 campo1 = ["Carta4","Carta7","Carta7","Carta8","Carta4","Carta8","Carta2","Carta6","Carta2","Carta3","Carta1","Carta5","Carta1","Carta5","Carta6","Carta3"],
 campo2 = ["Carta1","Carta8","Carta3","Carta4","Carta2","Carta5","Carta2","Carta6","Carta4","Carta8","Carta6","Carta7","Carta3","Carta7","Carta5","Carta1"],
 campo3 = ["Carta5","Carta4","Carta5","Carta1","Carta6","Carta2","Carta8","Carta4","Carta3","Carta2","Carta1","Carta3","Carta7","Carta6","Carta8","Carta7"],
 campo4 = ["Carta8","Carta1","Carta2","Carta2","Carta3","Carta7","Carta4","Carta8","Carta5","Carta6","Carta5","Carta6","Carta7","Carta3","Carta4","Carta1"],
 campo5 = ["Carta2","Carta3","Carta1","Carta2","Carta5","Carta1","Carta7","Carta6","Carta3","Carta5","Carta6","Carta4","Carta8","Carta7","Carta8","Carta4"],
 campo6 = ["Carta3","Carta2","Carta1","Carta3","Carta4","Carta6","Carta7","Carta1","Carta2","Carta5","Carta4","Carta5","Carta8","Carta7","Carta8","Carta6"],

];

let winner= [];
let aleatoriox= Math.floor(Math.random() * 5);
x=campos[aleatoriox];

let indice=0;
let indiceViejo=null;
let posicion=0;
let contadorpos=0;
	

$("#posi1").click(function(){
	$(this).removeClass("fondo_carta")
	$(this).addClass(x[0])
    posicion=1;
    asignar(x[0],this,posicion);

})

$("#posi2").click(function(){
	$(this).removeClass("fondo_carta")
	$(this).addClass(x[1]);
    posicion=2;
	asignar(x[1],this,posicion);
})

$("#posi3").click(function(){
	$(this).removeClass("fondo_carta")
	$(this).addClass(x[2])	
    posicion=3;
	asignar(x[2],this,posicion);

})

$("#posi4").click(function(){
	$(this).addClass("seleccionada")
	$(this).removeClass("fondo_carta")
	$(this).addClass(x[3])	
	posicion=4;
	asignar(x[3],this,posicion);
})

$("#posi5").click(function(){
	$(this).removeClass("fondo_carta")
	$(this).addClass(x[4])
    posicion=5;
    asignar(x[4],this,posicion);

})

$("#posi6").click(function(){
	$(this).removeClass("fondo_carta")
	$(this).addClass(x[5]);
    posicion=6;
	asignar(x[5],this,posicion);
})

$("#posi7").click(function(){
	$(this).removeClass("fondo_carta")
	$(this).addClass(x[6])	
    posicion=7;
	asignar(x[6],this,posicion);

})

$("#posi8").click(function(){
	$(this).addClass("seleccionada")
	$(this).removeClass("fondo_carta")
	$(this).addClass(x[7])	
	posicion=8;
	asignar(x[7],this,posicion);
})

$("#posi9").click(function(){
	$(this).removeClass("fondo_carta")
	$(this).addClass(x[8])
    posicion=9;
    asignar(x[8],this,posicion);

})

$("#posi10").click(function(){
	$(this).removeClass("fondo_carta")
	$(this).addClass(x[9]);
    posicion=10;
	asignar(x[9],this,posicion);
})

$("#posi11").click(function(){
	$(this).removeClass("fondo_carta")
	$(this).addClass(x[10])	
    posicion=11;
	asignar(x[10],this,posicion);

})

$("#posi12").click(function(){
	$(this).addClass("seleccionada")
	$(this).removeClass("fondo_carta")
	$(this).addClass(x[11])	
	posicion=12;
	asignar(x[11],this,posicion);
})

$("#posi13").click(function(){
	$(this).removeClass("fondo_carta")
	$(this).addClass(x[12])
    posicion=13;
    asignar(x[12],this,posicion);

})

$("#posi14").click(function(){
	$(this).removeClass("fondo_carta")
	$(this).addClass(x[13]);
    posicion=14;
	asignar(x[13],this,posicion);
})

$("#posi15").click(function(){
	$(this).removeClass("fondo_carta")
	$(this).addClass(x[14])	
    posicion=15;
	asignar(x[14],this,posicion);

})

$("#posi16").click(function(){
	$(this).addClass("seleccionada")
	$(this).removeClass("fondo_carta")
	$(this).addClass(x[15])	
	posicion=16;
	asignar(x[15],this,posicion);
})



function asignar(x,carta,indice){
	intentos++;
	console.log("////////////////////////////////////" );
	console.log("aleatoriox :" + aleatoriox);
	console.log("============================================" );
	console.log("chuleta para desarrollador campos[aleatoriox] :" + campos[aleatoriox]);
	console.log("============================================" );
	console.log("Carta elegida :" + x);
	console.log("Indice dentro de la matriz 16x16:   " + indice);
	console.log("winner  "+ winner)
	console.log("////////////////////////////////////" );
	console.log(" valor del par al ejecutar asignar " + par);

	if (indice==indiceViejo) {
	console.log("////////////////////////////////////" );
	console.log("indiceViejo :" + indiceViejo);
	console.log("Estas repitiendo un click");
	console.log("tas pillao tramposo te va a llevar la wiu wiu")
	console.log("////////////////////////////////////" );
	}else{
		if (winner.indexOf(indice)==-1 && winner.indexOf(indiceViejo)==-1) {
		par++; 
		console.log("par en el acumulador  " + par);
		}
		
	}
 	
 	if (par==1 && winner.indexOf(indice)==-1 && winner.indexOf(indiceViejo)==-1) {
 	anterior=x;
 	cartaVieja=carta;
 	indiceViejo=indice;
 	}
 	if (par==2) {
    	comparar(anterior,x,carta,cartaVieja,indiceViejo,indice);
    	par=0;
    	anterior=null;
    	indiceViejo=null;
    	indice=null;
    	x="";
    }
}

function comparar(valoranterior,valoractual,pepe,roman,indiceViejo,indice){
	//roman==primera carta
	//pepe==2da carta
		console.log("indice:  "+ indice)
		console.log("indiceViejo "+ indiceViejo)
		console.log("winner "+ winner)
		console.log("winner con indice "+ winner[indice])
		//console.log("winner con indiceViejo "+ winner[indiceViejo])
		//if ($(pepe).hasClass("seleccionada")&& $(roman).hasClass("seleccionada")) {
		/*if ( winner.indexOf(indice)>-1 && winner.indexOf(indiceViejo)>-1 ) {
				swal("TAS PILLAO","nosequeescribiraqui","info")	
		}else {*/
				if (valoranterior==valoractual  )  {
					winner.push(indiceViejo);
					winner.push(indice);
					let ganados= winner.length/2;
					console.log("////////////////////////////////////" );
					//console.log("VALOR DE LA VARIABLE par:   " + par);
					swal("Buen trabajo!", "Haz memorizado un par!", "success");
					console.log("valoractual :" + valoractual);
					console.log("valoranterior :" + valoranterior);
					console.log("Indice dentro de la matriz 16x16:   " + indice);
					console.log("winner despus del push  "+ winner)
					console.log("////////////////////////////////////" );
					$(pepe).addClass("seleccionada");
					$(roman).addClass("seleccionada");
					$("#puntaje").html("Aciertos: "+ ganados);
					if (ganados==8) {
					swal("Haz ganado!", "alderan te lo agradece!", "info");
					}

				}else {
					console.log("=================================" );
					swal(":/", "haz fallado!", "error");

					//console.log("VALOR DE LA VARIABLE par:   " + par);
					console.log("perdiste gafo fallaste");
					console.log("valoractual :" + valoractual);
					console.log("valoranterior :" + valoranterior);
					console.log("Indice dentro de la matriz 16x16:   " + indice);
					console.log("=================================" );
					//$(pepe).fadeOut(600);

					//$(pepe).fadeInt(500);
					$(pepe).hide(1200);
					$(roman).hide(1200);
					$(pepe).addClass("seleccionada");
					$(pepe).removeClass(valoractual);
					$(roman).removeClass(valoranterior);
					$(pepe).addClass("fondo_carta");
					$(roman).addClass("fondo_carta");
					$(pepe).show(300);
					$(roman).show(800);		
				}
			
					$("#intentos").html("Intentos: "+ intentos/2)

}

$("#Generar").click(function() {
	$("div").removeClass();
	$("div").addClass("fondo_carta");
	aleatoriox=Math.floor(Math.random() * 5);
	intentos=0;
	winner.splice(0, winner.length);
	$("#intentos").html("Intentos: "+ 0);
	$("#puntaje").html("Aciertos: "+ 0);
	console.log("////////////////////////////////////" );
	console.log("aleatoriox :" + aleatoriox);
	console.log("============================================" );
	console.log("campos[aleatoriox de generar :" + campos[aleatoriox]);
	console.log("============================================" );
	posicion=0;
	par=0;
	intentos=0;
})