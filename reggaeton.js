
// Description:
//   Hubot canta un perreo intenso
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//   hubot un reggaeton
// Author:
//   @keld0r

const largo_extrofa=4;
const max_estrofas=1;
const salto="\n"

const bloque1 = ['Mami', 'Gata', 'Perra', 'Zorra', 'Chica'];
const bloque2 = ['yo quiero', 'vamos a', 'yo voy a', 'yo quiero', 'yo vengo a'];
const bloque3 = ['castigarte', 'cogerte', 'encenderte', 'darte', 'azotarte'];
const bloque4 = ['duro', 'rapido', 'lento', 'suave', 'fuerte'];
const bloque5 = ['hasta que salga el sol','toda la noche','hasta el amanecer','hasta mañana','todo el dia'];
const bloque6 = ['sin miedo','sin anestesia','en el piso','contra la pared','sin compromiso'];
const firma = ['mas de 10 mil stickers vendidos, obligao','el que habla con las patas','el imperio del :jquery:','perreando hasta el -5 '];

function generarLetra()
{
	let estrofa = [];
	let letra = [];

	for (i = 0; i < max_estrofas; i++)
	{
		estrofa = [];

		for (j = 0; j < largo_extrofa; j++)
		estrofa.push(GenerarRenglon());
		letra.push(estrofa.join("\n")+salto);
		letra.push("[CORO]");
		letra.push(GenerarCoro()+" … x3 :yeah:"+salto);
	}
	return letra.join("\n")+"\nEl papi del flow, "+firma[Math.floor(Math.random()*firma.length)];
}


function GenerarRenglon()
{
	var q =
	bloque1[Math.floor(Math.random()*bloque1.length)]+" "+
	bloque2[Math.floor(Math.random()*bloque2.length)]+" "+
	bloque3[Math.floor(Math.random()*bloque3.length)]+" "+
	bloque4[Math.floor(Math.random()*bloque4.length)]+" "+
	bloque5[Math.floor(Math.random()*bloque5.length)];
	return q;
}

function GenerarCoro()
{	
	let verbo = bloque3[Math.floor(Math.random()*bloque3.length)];

	return verbo+" "+verbo+" "+verbo+" "+bloque5[Math.floor(Math.random()*bloque5.length)]+" "+bloque4[Math.floor(Math.random()*bloque4.length)];
}

module.exports = function(robot) {
  robot.respond(/un reggaeton/gi, generarLetra());
};
