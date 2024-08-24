//Declarar Variables

let nameEst, message
let grade1, grade2, grade3, definitive
const percent1=0.2
const percent2=0.3
const percent3=0.5

//Dato de Entrada

console.log("┌───────────────────────────────────────┐");
console.log("│           PLANILLA DE NOTAS           │");
console.log("└───────────────────────────────────────┘");

nameEst = prompt('Nombre')
grade1 = parseFloat(prompt('Nota 1'))
grade2 = parseFloat(prompt('Nota 2'))
grade3 = parseFloat(prompt('Nota 3'))

//Datos del proceso
definitive = grade1*percent1 + grade2*percent2 + grade3*percent3
if (definitive <=3){
    message = 'Perdio por vago '
}else{
    message = 'Felicitaciones gano '
}

console.log("┌───────────────────────────────────────┐");
console.log("│            RESULTADO NOTAS            │");
console.log("└───────────────────────────────────────┘");

console.log(`\tEstudiante -> ${nameEst}`);
console.log(`\tNota 1 -> ${grade1} vale = ${percent1} = ${grade1*percent1}`);
console.log(`\tNota 2 -> ${grade2} vale = ${percent2} = ${grade2*percent2}`);
console.log(`\tNota 3 -> ${grade3} vale = ${percent3} = ${grade1*percent3}`);
console.log(`\tDefinitiva -> ${definitive}`);
console.log(`Observación --> ${message}`);