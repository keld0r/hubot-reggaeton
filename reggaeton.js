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
//
// Author:
//   @keld0r

const largoEstrofa = 4;
const maxEstrofas = 1;

const bloques = [
  ['Mami', 'Gata', 'Perra', 'Zorra', 'Chica'],
  ['yo quiero', 'vamos a', 'yo voy a', 'yo quiero', 'yo vengo a'],
  ['castigarte', 'cogerte', 'encenderte', 'darte', 'azotarte'],
  ['duro', 'rapido', 'lento', 'suave', 'fuerte'],
  [
    'hasta que salga el sol',
    'toda la noche',
    'hasta el amanecer',
    'hasta mañana',
    'todo el dia'
  ],
  [
    'sin miedo',
    'sin anestesia',
    'en el piso',
    'contra la pared',
    'sin compromiso'
  ]
];
const firma = [
  'mas de 10 mil stickers vendidos, obligao',
  'el que habla con las patas',
  'el imperio del :jquery:',
  'perreando hasta el -5'
];

function random(array)
{
  return array[Math.floor(Math.random() * array.length)];
}

function generarLetra()
{
  const letra = [...Array(maxEstrofas).keys()].reduce((acc, curr) => {
    const estrofa = [...Array(largoEstrofa).keys()].map(() => generarRenglon())
    acc.push(`${estrofa.join('\n')}\n`);
    acc.push('[CORO]');
    acc.push(`${generarCoro()} … x3 :yeah:\n`);
    return acc;
  }, []).join('\n');
	return `${letra}\nEl papi del flow, ${random(firma)}`;
}

function generarRenglon()
{
  return bloques.map(bloque => random(bloque)).join(' ');
}

function generarCoro()
{
	const verbo = `${random(bloques[2])} `;
  return `${verbo.repeat(3)}${random(bloques[4])} ${random(bloques[3])}`;
}

module.exports = function (robot)
{
  robot.respond(/un reg(ga|u|a|e)?et(o|ó)n/gi, function (res) {
    res.send(generarLetra());
  });
};
