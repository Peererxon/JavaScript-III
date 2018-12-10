
$("#Generarjuego").click(function(){
	let camposjuego=[];
	let cartas=[];
	let pos=[];
    let valeanterior=0;
    //let acumulador =0;
	let paridad = 0;
	let vpar=[];

	for (var j = 0; j < 16; j++) {
		let nucarta = Math.ceil(Math.random() * 8)+1;
		console.log ("j  : " + j); 
		console.log ("carta aleatoria del 1 al 8  : " + nucarta);
		//acumulador++; 
		pos[j]=[j];
		cartas[j]=[nucarta];
		if (valeanterior!=nucarta) {
			paridad++;
			vpar[j]=[paridad];
			valeanterior=nucarta;
			//cartas[j]=[nucarta];
			//console.log ("valor de j en el if  : " + j);
			console.log ("valeanterior  : " + valeanterior);

			console.log ("paridad  : " + paridad);
		} else {
          	cartas[j]=[nucarta];
          	console.log ("//////////////////////////////////  : ");
          	console.log ("El else  : ");
          	//console.log ("valor de j en el else  : " + j);
			console.log ("valeanterior  : " + valeanterior);
			console.log ("//////////////////////////////////  : ");
		}
		
	}  	

	// i es la posicion dentro del array camposjuego de cartas pareadas.  
	for (var i = 0; i < 16; i++) {
		
		if (true) {
			// paridad++; //para garantizar la paridad
			// console.log ("paridad " + paridad );
			//camposjuego.push([ ]);
		}
			
	}
	console.log ("valor de j  : " + pos);           
	console.log ("8 cartas aleatorias en 16 posiciones de la matriz 4x4 :  " + cartas );
	console.log ("8 cartas aleatorias en 16 posiciones de la matriz 4x4 :  " + cartas );
})


         