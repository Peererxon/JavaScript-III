let clases=["Carta1","Carta2"];
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
let intentosfallidos=0;	
  
/*console.log("--------- JUEGO DE LA 1ERA VEZ ---------" );
console.log("aleatoriox :" + aleatoriox);
console.log("campos de juego : " + campos[aleatoriox] );*/

$("#intentos").html("Intentos: "+ intentosfallidos);
$("#puntaje").html("Aciertos: "+ 0);

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
	$(this).removeClass("fondo_carta")
	$(this).addClass(x[15])	
	posicion=16;
	asignar(x[15],this,posicion);
})

function asignar(x,carta,indice){
	intentos++;
	if (indice==indiceViejo) {
	console.log("////////////////////////////////////" );
	console.log("Estas repitiendo un click");
	console.log("Valor de par: " + par); 
	}else{
		if (winner.indexOf(indice)==-1 && winner.indexOf(indiceViejo)==-1) {
		par++; 
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
    	indiceViejo=0;
    	indice=0;
    	x="";
    }
}

function comparar(valoranterior,valoractual,pepe,roman,indiceViejo,indice){				
				if (valoranterior==valoractual  )  {
					winner.push(indiceViejo);
					winner.push(indice);
					let ganados= winner.length/2;
					console.log("////////////////////////////////////" );
					//swal("Buen trabajo!", "Haz memorizado un par!", "success");
					alert("Buen trabajo!", "Haz memorizado un par!");
					console.log("Carta con su Par encontrado :" + valoractual);
					console.log("indice anterior, indice Actual :"+ indiceViejo, indice);
					console.log("Posiciones de las cartas pareadas en la matriz 4x4  "+ winner);
					$("#puntaje").html("Aciertos: "+ ganados);
					if (ganados==8) {
					//swal("Haz ganado!, Felicitaciones!", "info");
					alert("Haz ganado!, Felicitaciones!");
					}

				}else {
					console.log("=================================" );
					//swal(":/", "haz fallado!", "error");
					alert(":/, haz fallado!");
					console.log("Perdiste, fallaste no has hecho un par");
					console.log("Carta actual :" + valoractual);
					console.log("Carta anterior :" + valoranterior);
					console.log("indice anterior, indice Actual :"+ indiceViejo, indice);
					$(pepe).removeClass(valoractual);
					$(roman).removeClass(valoranterior);
					$(pepe).addClass("fondo_carta");
					$(roman).addClass("fondo_carta");
				}
			        intentosfallidos= Math.floor(intentos/2);
					$("#intentos").html("Intentos: "+ intentosfallidos);
}

$("#Generar").click(function() {
	posicion=0;
	par=0;
	intentos=0;
	intentosfallidos=0;
	aleatoriox=Math.floor(Math.random() * 5);
	x=campos[aleatoriox];
	winner.splice(0, winner.length);
	$("div").removeClass();
	$("div").addClass("fondo_carta");
	$("#intentos").html("Intentos: "+ 0);
	$("#puntaje").html("Aciertos: "+ 0);
	console.log("--------- JUEGO NUEVO GENERADO ---------" );
	console.log("aleatoriox :" + aleatoriox);
	console.log("campo de juego  :" + campos[aleatoriox]);
})

$("#Vercartas").click(function() {
	console.log("============================================" );
	console.log("chuleta para desarrollador" ); 
	console.log("aleatoriox :" + aleatoriox);
	console.log("campo de juego :" + campos[aleatoriox]);
	console.log("============================================" );
})