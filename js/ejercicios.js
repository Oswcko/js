/*
1. Verifica si un numero es par o impar.

2. Realiza un objeto "persona" con las siguiente propiedades:

- Nombre
- Apellido
- Edad
- Cedula
- Nacionalidad
- Profesion
- Estado Civil
- Hobbies

Y evalua si la profesion es "programador" y si el estado civil es "soltero",
en caso de ser programador, agrega una nueva propiedad "lenguaje favorito",
y colocale "Javascript", ademas, colocale una propiedad llamada nombre completo, que sea
la union del nombre y el apellido

3. Crea un objeto que represente a un "estudiante" que tenga las siguientes propiedades:
- Nombre
- Edad
- Nota1
- Nota2
- Nota3

Debes crear un programa que determine si el estudiante aprueba o reprueba segun las siguientes condiciones:

- El estudiante aprueba si su promedio de notas (nota1,nota2,nota3) es igual o mayor a 10.
- Ademas, el estudiante debe tener 18 annos para aprobar.
- Agregar tambien una propiedad que se llame resultado final, que contenga el promedio.
- imprime el objeto por consola.

*/

// 1

/*let numero = parseInt(prompt('ingresa un numero'))

if(numero % 2 === 0){
    alert("El numero es par")
}else{
    alert("El numero no es par")
}*/

// 2

/*let persona ={
    nombre: 'Oswaldo',
    apellido: 'Rodriguez',
    edad: '27',
    cedula: '24918893',
    nacionalidad: 'venezolano',
    profesion: 'programador',
    estadoCivil: 'soltero',
    hobbies: ["futbol","cocinar"]
}

if(persona.profesion === 'programador' && persona.estadoCivil === 'soltero'){
    persona.lenguajeFavorito = 'javaScript';
    persona.nombreCompleto = persona.nombre + '' + persona.apellido;
}
console.log(persona)*/

// 3

/*let estudiante ={
    nombre: "Oswaldo",
    edad: "27",
    nota1: "15",
    nota2: "13",
    nota3: "17",
}

let promedio = estudiante.nota1 + estudiante.nota2 + estudiante.nota3 / 3

if(promedio >= 10 && estudiante.edad >=18){
    console.log('Aprobaste');
    estudiante.resultadoFinal = promedio;
    console.log(estudiante)

    
}*/

// Ejercicios en casa
// 1. Calcula el precio final de una compra despues de aplicar un descuento.
let compra = "Total con descuento"
console.log(compra)
let telefono= "200"

let descuento = 30 / 100 * telefono

let precioFinal = telefono - descuento
console.log(precioFinal)

// 2. Calcula el total de una factura de un restaurante y despues aplicar propina y verificar si se peude aplicar un descuento.
let recibo = "Factura total" 
console.log(recibo)

let pedido ={
    pasta: 8,
    churrasco: 10,
    coctel: 4,
    jugo: 3,
}

let totalPedido = pedido.pasta + pedido.churrasco + pedido.coctel + pedido.jugo

let propina = 10

let descuento1= 25 * 10 / 100

if(totalPedido >= 25){
    factura = totalPedido - descuento1;
    console.log(factura)
}

let sumaTotal = factura + propina
console.log(sumaTotal)

// 3. Calcula la cantidad de dias que una persona ha vivido basandote en su edad.

let edad = "27 años"
console.log(edad)
let dias = 365
let añosNormales= 20
let diasBisiestos = 366 * 7

let diasVividos = añosNormales * dias + diasBisiestos
console.log(diasVividos)



