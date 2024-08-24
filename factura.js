/* Realizar una factura de venta y realizar los respectivos calculos */

let nameCustmer =""
let product =''
let quanty = 0, price = 0, subtotal = 0, discountValue = 0, feeValue = 0, neto = 0
const discount = 0.1
const fee = 0.19

/* Ejemplo sumar dos numeros

let number1 = parseFloat(prompt("Numero 1"))
let number2 = parseFloat(prompt("Numero 2"))

let sum = number1 + number2
console.log(`resultado ${number1} + ${number2} = ${sum}`); */

/* CAPTURAR DATOS PARA LA FACTURA */
nameCustmer = prompt('Nombre del cliente')
product = prompt('Nombre del producto')
quanty = parseInt(prompt('Cantidad'))
price = parseInt(prompt('Precio'))

/* Calcular los datos */

subtotal = quanty * price
discountValue = subtotal * discount
feeValue = (subtotal - discountValue) * fee
neto = subtotal - discountValue + feeValue

/* imprimir datos PERO BIEN HERMOSO no a la hijuemadre */
console.log("┌───────────────────────────────────────┐");
console.log("│                FACTURA                │");
console.log("└───────────────────────────────────────┘");
console.log(`Nombre del cliente ${nameCustmer}`);
console.log("┌───────────────────────────────────────┐");
console.log("│         DETALLE DE LA COMPRA          │");
console.log("└───────────────────────────────────────┘");
console.log(`Producto --------> ${product}`);
console.log(`Precio ----------> ${price}`);
console.log(`Cantidad --------> ${quanty}`);
console.log(`Subtotal --------> ${subtotal}`);
console.log(`Valor Descuento -> ${discountValue}`);
console.log(`Valor Iva -------> ${feeValue}`);
console.log(`Neto Pagar ------> ${neto}`);