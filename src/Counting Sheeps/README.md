Requirements
Nodejs
npm
DevDependencies
Vitest
Installation
$ npm install
Tests
Run test without watch mode

$ npm run test
Run test with watch mode

$ npm run test-w
Run test using vitest command

$ npx vitest

Instrucciones: 

Los "true" son ovejas, los "false" son lobos ... Cuantas ovejas hay? La función recibirá una lista de valores booleans.

Ejemplo de función:
function countSheeps(list) { }

Requisitos:- Se deberán testear los siguientes casos de uso:

Input:
1) list = [ true,  true,  true,  false, true,  true,  true,  true , true,  false, true,  false, true,  false, false, true , true,  true,  true,  true , false, false, true,  true ]
2) list = [ false, false, false ]

Output:
1) There are 17 sheep in total
2) UPS!!! Wolfs eaten Sheeps