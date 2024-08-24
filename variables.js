/* tipos de declaración de variables
1. let, para variables de bloque
2. const para valores que no cambian
3: var de ambito global, no se recomieda */

/* let nameStud = "Nicol"
console.log(`Hola ${nameStud} como estas`)
nameStud = "Miguel"
console.log(`Hola ${nameStud} como estas`);

var nombre = "Andres"
console.log(`Hola ${nombre} como estas`); */

var nombre = 123
console.log(`Hola ${nombre} como estas`);

let salary = 350000
console.log(`tipo de datos salario ${typeof(salary)}`);

let nameStud = "Miguel"
console.log(`Tipo de datos nombre ${typeof(nameStud)}`);

let gender = null
console.log(`Tipo de datos gay ${typeof(gender)}`);

let lastName = false
console.groupEnd(`Tipo de datos apellido %${typeof(lastName)}`);